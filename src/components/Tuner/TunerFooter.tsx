import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { reload } from 'ionicons/icons';
import { TuneMode } from './Tuner';
import Toggler from '../inputs/Toggler';

const TunerFooter: React.FC<any> = ({ // TODO Update any
  tuneMode,
  isMuted,
  canEnterProcedure,
  isProcedureFirstStep,
  isProcedureLastStep,
  onClickMute,
  onClickBeats,
  onClickPitchPipe,
  onEnterProcedure,
  onExitProcedure,
  onProcedureNext,
  onProcedurePrev,
  onProcedureRepeatStep,
}) => {
  console.info('🔹 [TunerFooter]: Render')

  const btnEnterProcedure = (
    <IonButton
      className='btn-round'
      disabled={!canEnterProcedure}
      onClick={(canEnterProcedure) ? onEnterProcedure : () => { }}
    >
      <IonIcon
        style={{ fontSize: "3rem" } /* TODO Find a better way */}
        src="/assets/logotypes/icon-tuning-procedure.svg"
      />
    </IonButton>
  );

  const btnExitProcedure = (
    <IonButton
      className='btn-round'
      onClick={onExitProcedure}
    >
      <IonIcon
        style={{ fontSize: "3rem" } /* TODO Find a better way */}
        src="/assets/logotypes/icon-tuning-procedure-back.svg"
      />
    </IonButton>
  );

  const btnProcedurePrev = (
    <IonButton
      className='no-ripple'
      fill="clear"
      onClick={onProcedurePrev}
    >
      <IonIcon className="h-9 w-9"
        slot='icon-only'
        src="/assets/logotypes/icon-procedure-left.svg"
        style={{
          fontSize: "3rem", /* TODO Find a better way */
          stroke: (isProcedureFirstStep) ? "var(--color-grey)" : "var(--color-button)"
        }}
      />
    </IonButton>
  );

  const btnProcedureNext = (
    <IonButton
      className='no-ripple'
      fill="clear"
      onClick={onProcedureNext}
    >
      <IonIcon className="h-9 w-9"
        slot='icon-only'
        src="/assets/logotypes/icon-procedure-right.svg"
        style={{
          fontSize: "3rem", /* TODO Find a better way */
          stroke: (isProcedureLastStep) ? "var(--color-grey)" : "var(--color-button)"
        }}
      />
    </IonButton>
  );

  const btnMute = (
    <IonButton
      className='no-ripple'
      fill="clear"
      onClick={onClickMute}
    >
      <IonIcon
        style={{ fontSize: "2rem" }}
        src={
          isMuted
            ? "/assets/logotypes/icon-mute.svg"
            : "/assets/logotypes/icon-sound.svg"
        }
        slot="icon-only"
      />
    </IonButton>
  );

  const btnProcedureRepeatStep = (
    <IonButton
      className='no-ripple'
      fill="clear"
      onClick={onProcedureRepeatStep}
    >
      <IonIcon
        style={{ fontSize: "2rem" }}
        src={reload}
        slot="icon-only"
      />
    </IonButton>
  );

  return (
    <section className="w-full px-5 flex justify-between items-center">
      {(tuneMode === TuneMode.PROCEDURE)
        ? btnExitProcedure
        : btnEnterProcedure}

      {(tuneMode === TuneMode.PROCEDURE)
        && btnProcedurePrev}

      {btnMute}

      {(tuneMode === TuneMode.PROCEDURE)
        && btnProcedureNext}

      {(tuneMode === TuneMode.PROCEDURE)
        && btnProcedureRepeatStep}

      {(tuneMode !== TuneMode.PROCEDURE)
        && (
          <Toggler 
            typeContentText={false}
            sizeSVG = '1em'
            contentLeft = '/assets/logotypes/icon-tuner-bpm-mode.svg'
            contentRight = '/assets/logotypes/icon-tuner-hz-mode.svg'
            conditionLeft = {tuneMode === TuneMode.BEATS}
            conditionRight = {tuneMode === TuneMode.PITCHPIPE}
            onClickLeft = {onClickBeats} 
            onClickRight = {onClickPitchPipe}

          />
        )}
    </section>
  );
};

export default TunerFooter;
