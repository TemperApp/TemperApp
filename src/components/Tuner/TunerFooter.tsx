import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { TuneMode } from './Tuner';

const TunerFooter: React.FC<any> = ({ // TODO Update any
  tuneMode,
  isMuted,
  hasProcedure,
  isProcedureFirstStep,
  isProcedureLastStep,
  isClickable,
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
  return (
    <section className="w-full px-5 flex justify-between items-center">
      <div className="w-20">
        <IonButton 
          className={`btn-round ${hasProcedure ? '' : 'no-selected'}`} 
          onClick={onEnterProcedure}>
          <IonIcon
            style={{ fontSize: "3rem" } /* TODO Find a better way */}
            src={
              isClickable
                ? "/assets/logotypes/icon-tuning-procedure.svg"
                : "/assets/logotypes/icon-tuning-procedure-back.svg"
            }
          />
        </IonButton>
      </div>
      <div>
        <IonButton
          fill="clear"
          style={!isClickable
            ? {"--ripple-color": "transparent", display: "block"} 
            : {display: "none"} 
            }
          onClick={onProcedurePrev}
        >
          <IonIcon className="h-9 w-9"
            style={(isProcedureFirstStep) 
              ?  {fontSize: "3rem", stroke:"var(--color-grey)"}
              :  {fontSize: "3rem", stroke:"var(--color-button)" } /* TODO Find a better way */}
            slot='icon-only'
            src="/assets/logotypes/icon-procedure-left.svg"
          />
        </IonButton>
      </div>
      <div>
        <IonButton
          fill="clear"
          style={{ "--ripple-color": "transparent" }}
          onClick={onClickMute}
        >
          <IonIcon
            style={{fontSize: "2rem"}}
            src={
              isMuted
                ? "/assets/logotypes/icon-mute.svg"
                : "/assets/logotypes/icon-sound.svg"
            }
            slot="icon-only"
          />
        </IonButton>
      </div>
      <div>
        <IonButton
          fill="clear"
          style={!isClickable ? { "--ripple-color": "transparent",
          "display": "block"} 
          : {"display": "none" }}
          onClick={onProcedureNext}
        >
          <IonIcon className="h-9 w-9"
            style={(isProcedureLastStep) 
              ?  {fontSize: "3rem", stroke:"var(--color-grey)"}
              :  {fontSize: "3rem", stroke:"var(--color-button)" } /* TODO Find a better way */}
            slot='icon-only'
            src="/assets/logotypes/icon-procedure-right.svg"
          />
        </IonButton>
      </div>
      <div>
        <IonButton
          fill="clear"
          style={!isClickable ? { "--ripple-color": "transparent",
          "display": "block"} 
          : {"display": "none" }}
          onClick={onProcedureRepeatStep}
        >
          REPEAT
        </IonButton>
      </div>
      <div className="w-20 btn-mode">
      {isClickable
      ?
      <>
        <IonButton
          onClick={onClickBeats}
          className={`btn-mode-bpm m-0 p-0
            ${tuneMode === TuneMode.BEATS ? " btn-mode-activated" : ""}`}
        >
          <IonIcon
            style={{fontSize:"1em"}}
            src="/assets/logotypes/icon-tuner-bpm-mode.svg"
          ></IonIcon>
        </IonButton>
        <IonButton
          onClick={onClickPitchPipe}
          className={`btn-mode-hz m-0 p-0
            ${tuneMode === TuneMode.PITCHPIPE ? " btn-mode-activated" : ""}`}
        >
          <IonIcon
            style={{fontSize:"1em"}}
            src="/assets/logotypes/icon-tuner-hz-mode.svg"
          ></IonIcon>
        </IonButton>
      </>
      :
      <>
      </>
      }
      </div>
    </section>
  );
};

export default TunerFooter;
