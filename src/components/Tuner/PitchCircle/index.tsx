import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import { IonPopover } from "@ionic/react";

import PitchCircleView from './View';

import { TuneMode } from '../Tuner';
import Note from '../../../model/Note/Note';
import { mapNotesMap } from '../../../model/Note/NotesMap';
import { Temperament } from '../../../model/Temperament/Temperament';
import { Procedure } from '../../../model/Procedure';
import { acousticBeatToStr, acousticBeat } from '../../../model/AcousticBeat';

import {
  btnStatesReducer, BtnStates, getActiveBtns,
  createNotesFromActive, createNoteFromActive, BtnActions,
  createActiveBtnsFromNote
} from './utils/buttons';
import {
  ProcSubStep, decomposeStep, ProcSubStepClear
} from './utils/procedure';
import SettingsContext from '../../../store/settings-context';
import useTemperTone from '../../../hooks/useTemperTone';
import { useHistory } from 'react-router';


let timeout: NodeJS.Timeout;

type PitchCircleProps = {
  tuneMode: TuneMode,
  freqA4: number,
  temperament: Temperament,
  proc: Procedure | null,
  procStepIdx: number,
  procRepeatCount: number,
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  tuneMode, freqA4, temperament,
  proc, procStepIdx, procRepeatCount,
}) => {

  const history = useHistory();

  const settings = useContext(SettingsContext);
  const TemperTone = useTemperTone();
  
  /*
  useIonViewWillLeave(() => {
    // Works when ionic is handling the routes
    // but not with <Switch> from ReactRouter
    TemperTone.stop();
    clearTimeout(timeout);
    dispatchState({ type: BtnActions.SET_ALL_IDLE });
  });
  */

  // TODO Find a better way with router
  // Commented block above does not work
  history.listen((location) => {
    if (!location.pathname.match(/\/tune\/.*/))
      TemperTone.stop();
  });

  const [btnStates, dispatchState] = useReducer(
    btnStatesReducer(tuneMode),
    mapNotesMap(BtnStates.IDLE)
  );

  const hasPopover = Boolean(proc && proc.steps[procStepIdx].message);


  const executeQueueStep = useCallback((
    queue: ProcSubStep[]
  ) => {
    const substep = {
      notes: [],
      clear: ProcSubStepClear.BEFORE,
      ...queue[0],
    };

    if (substep.clear === ProcSubStepClear.BEFORE)
      dispatchState({ type: BtnActions.SET_ALL_IDLE });

    if (substep.notes.length > 0) {
      TemperTone.play(freqA4, temperament.deviation, substep.notes);
      dispatchState({
        type: BtnActions.SET,
        buttons: createActiveBtnsFromNote(substep.notes)
      });
    }

    timeout = setTimeout(() => {
      TemperTone.stop();

      if (substep.clear === ProcSubStepClear.AFTER)
        dispatchState({ type: BtnActions.SET_ALL_IDLE });

      if (queue.length > 1)
        executeQueueStep(queue.slice(1));
    }, substep.duration * 1000);

  }, [TemperTone, freqA4, temperament.deviation]);


  const executeQueue = useCallback(() => {
    if (tuneMode !== TuneMode.PROCEDURE || !proc)
      return;

    const queue: ProcSubStep[][] = proc.steps.map((step) =>
      decomposeStep(step, temperament)
    );
    executeQueueStep(queue[procStepIdx]);

  }, [executeQueueStep, proc, procStepIdx,
    temperament, tuneMode
  ]);


  const getLabels = useCallback((): string[] => {
    const actives = getActiveBtns(btnStates);
    const [noteX, noteY] = createNotesFromActive(actives);

    if (noteX && !noteY) {
      if (tuneMode === TuneMode.PROCEDURE && proc
        && proc.steps[procStepIdx].action === 'tune octave'
      ) {
        const noteX2 = createNoteFromActive({
          note: actives[0].note,
          state: (actives[0].state === BtnStates.SELECTED)
            ? BtnStates.OCTAVE
            : BtnStates.SELECTED
        });
        const { lowest, highest } = Note.compare(noteX, noteX2);
        return [
          `${lowest.string()} · ${highest.string()}`,
          `${highest.freq(freqA4, temperament.deviation).toFixed(1)} Hz`,
        ];
      } else {
        return [
          noteX.string(),
          `${noteX.freq(freqA4, temperament.deviation).toFixed(1)} Hz`,
        ];
      }
    }

    if (noteX && noteY) {
      const { modulationFreq } = acousticBeat(
        noteX, noteY, freqA4, temperament.deviation
      );
      const { lowest, highest } = Note.compare(noteX, noteY);
      return [
        `${lowest.string()} · ${highest.string()}`,
        (modulationFreq !== null) ? acousticBeatToStr(modulationFreq, settings.isBps) : "—"
      ];
    }
    return ["—", "— Hz"];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [btnStates, freqA4, temperament.deviation]);


  useEffect(() => {
    if (tuneMode !== TuneMode.PROCEDURE) {
      TemperTone.play(
        freqA4,
        temperament.deviation,
        createNotesFromActive(getActiveBtns(btnStates))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [btnStates, freqA4, temperament.deviation]);


  useEffect(() => {
    clearInterval(timeout);
    dispatchState({ type: BtnActions.SET_ALL_IDLE });
    TemperTone.stop();
  }, [tuneMode, procStepIdx, procRepeatCount, TemperTone]);


  useEffect(() => {
    if (!hasPopover || (hasPopover && procRepeatCount > 0))
      executeQueue();
  }, [
    tuneMode, freqA4, temperament,
    proc, procStepIdx, procRepeatCount,
    executeQueue, hasPopover,
  ]);


  // console.info('🟣 [PitchCircle]: Render: states:', Object.values(btnStates).reduce((acc, e) => acc + ' ' + e, ''))
  return (
    <>
      <IonPopover
        isOpen={hasPopover}
        onDidDismiss={executeQueue}
      >
        <p className='px-4'>
          {hasPopover && proc?.steps[procStepIdx].message}
        </p>
      </IonPopover>

      {(tuneMode === TuneMode.PROCEDURE)
        ? (<PitchCircleView
          temperament={temperament}
          labels={getLabels()}
          btnStates={btnStates}
        />)
        : (<PitchCircleView
          temperament={temperament}
          labels={getLabels()}
          btnStates={btnStates}
          dispatchState={dispatchState}
        />)}
    </>
  );
};

export default React.memo(
  PitchCircle,
  (prevProps, nextProps) =>
    prevProps.tuneMode === nextProps.tuneMode &&
    prevProps.freqA4 === nextProps.freqA4 &&
    prevProps.temperament === nextProps.temperament &&
    prevProps.proc === nextProps.proc &&
    prevProps.procStepIdx === nextProps.procStepIdx &&
    prevProps.procRepeatCount === nextProps.procRepeatCount
);
