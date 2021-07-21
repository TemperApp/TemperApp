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


const settings : readonly AllowedSetting[] = [{
    name: 'darkTheme',
    defaultValue: false,
    callback: (state: boolean) => { document.body.classList.toggle('dark', state) },
  },{
    name: 'freqA4',
    defaultValue: 440,
  },{
    name: 'masterVolume',
    defaultValue: -0.1,
  },{
    name: 'forkVolume',
    defaultValue: -18,
  },{
    name: 'amSynthVolume',
    defaultValue: -1,
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
    defaultValue: 620,
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
    defaultValue: 1,
  },{
    name: 'amSynthDistortionLowFrequency',
    defaultValue: 120,
  },{
    name: 'amSynthDistortionHighFrequency',
    defaultValue: 460,
  },
] as const;

export default settings;
