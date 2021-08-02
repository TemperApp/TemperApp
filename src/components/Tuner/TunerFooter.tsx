import React from 'react';
import { IonButton, IonCol, IonIcon } from '@ionic/react';
import { TuneMode } from './Tuner';
import Toggler from '../inputs/Toggler';

const TunerFooter: React.FC<any> = ({ // TODO Update any
  tuneMode,
  isMute,
  enableEnterProcedure,
  enableProcedurePrev,
  enableProcedureNext,
  onClickMute,
  onClickBeats,
  onClickPitchPipe,
  onEnterProcedure,
  onExitProcedure,
  onProcedureNext,
  onProcedurePrev,
  onProcedureRepeatStep,
}) => {

  const btnEnterProcedure = (
    <IonCol size="5">
      <IonButton
        className='btn-round'
        disabled={!enableEnterProcedure}
        onClick={(enableEnterProcedure) ? onEnterProcedure : () => { }}
      >
        <IonIcon
          style={{ fontSize: "3rem" } /* TODO Find a better way */}
          src="/assets/logotypes/icon-tuning-procedure.svg"
        />
      </IonButton>
    </IonCol>
  );

  const btnExitProcedure = (
    <IonCol size="3">
      <IonButton
        className='btn-round'
        onClick={onExitProcedure}
      >
        <IonIcon
          style={{ fontSize: "3rem" } /* TODO Find a better way */}
          src="/assets/logotypes/icon-tuning-procedure-back.svg"
        />
      </IonButton>
    </IonCol>
  );

  const btnProcedurePrev = (
    <IonCol size="2" className="flex justify-center">
      <IonButton
        className='h-12 no-ripple'
        fill="clear"
        disabled={!enableProcedurePrev}
        onClick={onProcedurePrev}
      >
        <IonIcon className="h-9 w-9"
          slot='icon-only'
          src="/assets/logotypes/icon-procedure-left.svg"
          style={{
            fontSize: "3rem", /* TODO Find a better way */
            stroke: (enableProcedurePrev) ? "var(--color-button)" : "var(--color-grey)"
          }}
        />
      </IonButton>
    </IonCol>
  );

  const btnProcedureNext = (
    <IonCol size="2" className="flex justify-center">
      <IonButton
        className='h-12 no-ripple'
        fill="clear"
        disabled={!enableProcedureNext}
        onClick={onProcedureNext}
      >
        <IonIcon className="h-9 w-9"
          slot='icon-only'
          src="/assets/logotypes/icon-procedure-right.svg"
          style={{
            fontSize: "3rem", /* TODO Find a better way */
            stroke: (enableProcedureNext) ? "var(--color-button)" : "var(--color-grey)"
          }}
        />
      </IonButton>
    </IonCol>
  );

  const btnMute = (
    <IonCol size="2" className="flex justify-center">
      <IonButton
        className='h-12 no-ripple'
        fill="clear"
        onClick={onClickMute}
      >
        <IonIcon
          style={{ fontSize: "2rem" }}
          src={
            isMute
              ? "/assets/logotypes/icon-mute.svg"
              : "/assets/logotypes/icon-sound.svg"
          }
          slot="icon-only"
        />
      </IonButton>
    </IonCol>
  );

  const btnProcedureRepeatStep = (
    <IonCol size="3" className="flex justify-end">
      <IonButton
        className='h-12 w-20 m-0 no-ripple'
        fill="clear"
        onClick={onProcedureRepeatStep}
      >
        <IonIcon
          className="pr-2"
          style={{ fontSize: "2rem" }}
          src="/assets/logotypes/icon-repeat.svg"
          slot="icon-only"
        />
      </IonButton>
    </IonCol>
  );

  return (
    
    <section className="w-full px-6 pb-2 flex justify-between items-center">
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
          <IonCol size="5" className="flex justify-end">
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
          </IonCol>
        )}
    </section>
  );
};

export default React.memo(
  TunerFooter,
  (prevProps, nextProps) => 
    prevProps.tuneMode === nextProps.tuneMode &&
    prevProps.isMute === nextProps.isMute &&
    prevProps.enableEnterProcedure === nextProps.enableEnterProcedure &&
    prevProps.enableProcedurePrev === nextProps.enableProcedurePrev &&
    prevProps.enableProcedureNext === nextProps.enableProcedureNext &&
    prevProps.onProcedureNext === nextProps.onProcedureNext &&
    prevProps.onProcedurePrev === nextProps.onProcedurePrev &&
    prevProps.onProcedureRepeatStep === nextProps.onProcedureRepeatStep
);
