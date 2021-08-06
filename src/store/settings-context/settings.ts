export type Setting<T> = {
  name: string,
  defaultValue: T,
  callback?: (state: T) => void,
};


export type AllowedSettingValue = (
  boolean
  | number
  | string
);


export type AllowedSetting = (
  Setting<boolean>
  | Setting<number>
  | Setting<string>
);


/* Settings enums */

export enum KeyboardLabels {
  NONE, C3C4, A3A4, ALL
}

/* -------------- */

const settings : readonly AllowedSetting[] = [{
    name: 'darkTheme',
    defaultValue: false,
    callback: (state: boolean) => { document.body.classList.toggle('dark', state) },
  },{
    name: 'freqA4',
    defaultValue: 440,
  },{
    name: 'isBps',
    defaultValue: false,
  },{
    name: 'tunerShowCommas',
    defaultValue: true,
  },{
    name: 'waveTriangle',
    defaultValue: true,
  },{
    name: 'masterVolume',
    defaultValue: 10,
  },{
    name: 'procedurekeyboardLabels',
    defaultValue: KeyboardLabels.C3C4,
  },{
    name: 'procedureShowPopover',
    defaultValue: true,
  },{
    name: 'procedureSubStepDurationPause',
    defaultValue: 0.2,
  },{
    name: 'procedureSubStepDurationUnique',
    defaultValue: 3.0,
  },{
    name: 'procedureSubStepDurationPair',
    defaultValue: 1.0,
  },{
    name: 'procedureSubStepDurationOctave',
    defaultValue: 1.0,
  },{
    name: 'procedureSubStepDurationBeat',
    defaultValue: 5.0,
  },{
    name: 'procedureSubStepDurationNoBeat',
    defaultValue: 1.5,
  },{
    name: 'forkVolume',
    defaultValue: 2,
  },{
    name: 'amSynthVolume',
    defaultValue: 10,
  },{
    name: 'amSynthEnvelopeAttack',
    defaultValue: 0.01,
  },{
    name: 'amSynthEnvelopeDecay',
    defaultValue: 1,
  },{
    name: 'amSynthEnvelopeSustain',
    defaultValue: 0.9,
  },{
    name: 'amSynthEnvelopeRelease',
    defaultValue: 1,
  },{
    name: 'amSynthFilterFrequency',
    defaultValue: 4000,
  },{
    name: 'amSynthFilterRollOff',
    defaultValue: -24,
  },{
    name: 'amSynthEQLow',
    defaultValue: -0,
  },{
    name: 'amSynthEQMid',
    defaultValue: -0,
  },{
    name: 'amSynthEQHigh',
    defaultValue: -0,
  },{
    name: 'amSynthEQLowFrequency',
    defaultValue: 440,
  },{
    name: 'amSynthEQHighFrequency',
    defaultValue: 550,
  },{
    name: 'amSynthDistortionAmount',
    defaultValue: 0,
  },{
    name: 'amSynthDistortionLowFrequency',
    defaultValue: 120,
  },{
    name: 'amSynthDistortionHighFrequency',
    defaultValue: 460,
  },
] as const;

export default settings;
