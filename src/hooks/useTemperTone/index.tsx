import { useContext, useEffect, useMemo, useState } from "react";
import { FilterRollOff } from "tone";
import SettingsContext from "../../store/settings-context";
import { equalsDeep } from "../../utils/functions";
import { bound, lerp, magnet } from "../../utils/maths";
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
      rolloff: FilterRollOff,
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
  masterVolume: 1,
  amsynth: {
    volume: 1,
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
    volume: 1,
  },
};


const useTemperTone = () => {
  const settings = useContext(SettingsContext);
  const TemperToneInstance = useMemo(() => new TemperTone(), []);
  const [prevConfig, setPrevConfig] = useState(fallbackConfig);

  useEffect(() => {
    const config = {
      masterVolume: lerp(0, 10, 0, 1, settings.masterVolume),
      amsynth: {
        volume: lerp(0, 10, 0, 1, settings.amSynthVolume),
        partials: [1, 0.05, 0, 0.01],
        envelope: {
          attack: bound(0, 15, settings.amSynthEnvelopeAttack),
          decay: bound(0, 15, settings.amSynthEnvelopeDecay),
          sustain: bound(0, 15, settings.amSynthEnvelopeSustain),
          release: bound(0, 15, settings.amSynthEnvelopeRelease),
        },
        filter: {
          frequency: bound(0.01, 22000, settings.amSynthFilterFrequency),
          rolloff: magnet([-96, -48, -24, -12], settings.amSynthFilterRollOff) as FilterRollOff,
        },
        eq: {
          low: bound(-192, 0, settings.amSynthEQLow),
          mid: bound(-192, 0, settings.amSynthEQMid),
          high: bound(-192, 0, settings.amSynthEQHigh),
          lowFrequency: bound(0.01, 22000, settings.amSynthEQLowFrequency),
          highFrequency: bound(0.01, 22000, settings.amSynthEQHighFrequency),
        },
        distortion: {
          amount: bound(0.01, 1, settings.amSynthDistortionAmount),
          lowFrequency: bound(0.01, 22000, settings.amSynthDistortionLowFrequency),
          highFrequency: bound(0.01, 22000, settings.amSynthDistortionHighFrequency),
        },
      },
      fork: {
        volume: lerp(0, 10, 0, 1, settings.forkVolume),
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
