import Note from "../../../../model/Note/Note";
import { Temperament } from "../../../../model/Temperament/Temperament";
import { ProcStep } from "../../../../model/Procedure";
import { hasAcousticBeat } from "../../../../model/AcousticBeat";

/**
 * Defines if and when the 'btnStates' should be
 * reset to 'idle' during the QueuedStep processing
 */
export enum ProcSubStepClear {
  NONE,
  BEFORE = 1 << 0,
  AFTER = 1 << 1,
};

export type ProcSubStep = {
  duration: number,
  notes?: [] | [Note] | [Note, Note],
  clear?: ProcSubStepClear,
};

export type ProcSubStepDurations = {
  pause: 0.2,
  unique: 3.0,
  pair: 1.0,
  beat: 5.0,
  noBeat: 1.5,
}

/**
 * 
 * @param step ProcStep to decompose
 * @param temperament 
 * @returns an array of 'ProcSubStep' for
 * the given 'step'.
 */
export const decomposeStep = (
  step: ProcStep,
  temperament: Temperament,
  durations: ProcSubStepDurations,
): ProcSubStep[] => {
  if (step.action === 'tune unique')
    return [
      { duration: 0.4 },
      { duration: durations.unique, notes: [step.noteX] },
    ];
  if (step.action === 'tune octave')
    return [
      { duration: 0.4 },
      { duration: durations.pair , notes: [step.noteX] },
      { duration: durations.pause, clear: ProcSubStepClear.NONE },
      { duration: durations.pair , notes: [step.noteY] },
    ];
  if (step.action === 'tune pair') {
    const durationBeat = hasAcousticBeat(step.noteX, step.noteY, temperament.deviation)
      ? durations.beat
      : durations.noBeat;
    return [
      { duration: 0.4 },
      { duration: durations.pair , notes: [step.noteX] },
      { duration: durations.pause, clear: ProcSubStepClear.NONE },
      { duration: durations.pair , notes: [step.noteY] },
      { duration: durations.pause, clear: ProcSubStepClear.NONE },
      { duration: durationBeat, notes: [step.noteX, step.noteY] },
    ];
  } if (step.action === 'check') {
    const durationBeat = hasAcousticBeat(step.noteX, step.noteY, temperament.deviation)
      ? durations.beat
      : durations.noBeat;
    return [
      { duration: 0.4 },
      { duration: durationBeat, notes: [step.noteX, step.noteY] },
    ];
  }
  return [];
};
