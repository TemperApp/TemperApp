import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { reload } from 'ionicons/icons';
import { TuneMode } from './Tuner';

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
          <div className="w-20 btn-mode">
            <IonButton
              onClick={onClickBeats}
              className={`btn-mode-bpm m-0 p-0
                ${tuneMode === TuneMode.BEATS ? " btn-mode-activated" : ""}`}
            >
              <IonIcon
                style={{ fontSize: "1em" }}
                src="/assets/logotypes/icon-tuner-bpm-mode.svg"
              ></IonIcon>
            </IonButton>
            <IonButton
              onClick={onClickPitchPipe}
              className={`btn-mode-hz m-0 p-0
                ${tuneMode === TuneMode.PITCHPIPE ? " btn-mode-activated" : ""}`}
            >
              <IonIcon
                style={{ fontSize: "1em" }}
                src="/assets/logotypes/icon-tuner-hz-mode.svg"
              ></IonIcon>
            </IonButton>
          </div>
        )}
    </section>
  );
};

export default TunerFooter;
