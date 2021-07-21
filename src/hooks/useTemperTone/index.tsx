import { useContext, useEffect, useMemo, useState } from "react";
import SettingsContext from "../../store/settings/settings-context";
import { equalsDeep } from "../../utils/functions";
import TemperTone from "./TemperTone";

export type TemperToneConfig = {
  masterVolume: number,
  amsynth: {
    volume: number,
    partials: number[],
    envelope: {
      attack: number,
      decay: number,
      sustain: number,
      release: number,
    },
    filter: {
      frequency: number,
      rolloff: -12 | -24 | -48,
    },
    eq: {
      low: number,
      mid: number,
      high: number,
      lowFrequency: number,  // Transition frequency between low and mid
      highFrequency: number, // Transition frequency between mid and high
    },
    distortion: {
      amount: number,
      lowFrequency: number,  // 100% distortion below 120Hz
      highFrequency: number, // 0% distortion above 460Hz
    },
  },
  fork: {
    volume: number,
  },
};


export const fallbackConfig: TemperToneConfig = {
  masterVolume: -0.1,
  amsynth: {
    volume: -1,
    partials: [1, 0.05, 0, 0.01],
    envelope: {
      attack: 0.01,
      decay: 1,
      sustain: 0.9,
      release: 1,
    },
    filter: {
      frequency: 620,
      rolloff: -24,
    },
    eq: {
      low: -0,
      mid: -0,
      high: -0,
      lowFrequency: 440,
      highFrequency: 550,
    },
    distortion: {
      amount: 1,
      lowFrequency: 120,
      highFrequency: 460,
    },
  },
  fork: {
    volume: -18,
  },
};


const useTemperTone = () => {
  const settings = useContext(SettingsContext);
  const TemperToneInstance = useMemo(() => new TemperTone(), []);
  const [prevConfig, setPrevConfig] = useState(fallbackConfig);

  useEffect(() => {
    const config = {
      masterVolume: settings.masterVolume,
      amsynth: {
        volume: settings.amSynthVolume,
        partials: [1, 0.05, 0, 0.01],
        envelope: {
          attack: settings.amSynthEnvelopeAttack,
          decay: settings.amSynthEnvelopeDecay,
          sustain: settings.amSynthEnvelopeSustain,
          release: settings.amSynthEnvelopeRelease,
        },
        filter: {
          frequency: settings.amSynthFilterFrequency,
          rolloff: settings.amSynthFilterRollOff,
        },
        eq: {
          low: settings.amSynthEQLow,
          mid: settings.amSynthEQMid,
          high: settings.amSynthEQHigh,
          lowFrequency: settings.amSynthEQLowFrequency,
          highFrequency: settings.amSynthEQHighFrequency,
        },
        distortion: {
          amount: settings.amSynthDistortionAmount,
          lowFrequency: settings.amSynthDistortionLowFrequency,
          highFrequency: settings.amSynthDistortionHighFrequency,
        },
      },
      fork: {
        volume: settings.forkVolume,
      },
    };

    if (!equalsDeep(config, prevConfig)) {
      TemperToneInstance.update(config);
      setPrevConfig(config);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  return TemperToneInstance;
}

export default useTemperTone;
