import { useContext, useEffect, useMemo, useState } from "react";
import { FilterRollOff } from "tone";
import SettingsContext from "../../store/settings-context";
import { equalsDeep, mergeDeep } from "../../utils/functions";
import { lerp, bound, magnet } from "../../utils/maths";
import { DeepPartial } from "../../utils/types";
import TemperTone from "./TemperTone";

export type TemperToneConfig = {
  masterVolume: number,
  amsynth: {
    type: 'triangle' | 'sine',
    volume: number,
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
    type: 'sine',
    volume: 1,
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


export const formatConfig = (
  config: DeepPartial<TemperToneConfig>
): TemperToneConfig => {
  const cfg = mergeDeep(fallbackConfig, config);
  return {
    masterVolume: lerp(0, 10, 0, 1, cfg.masterVolume),
    amsynth: {
      volume: lerp(0, 10, 0, 1, cfg.amsynth.volume),
      type: cfg.amsynth.type,
      envelope: {
        attack: bound(0, 15, cfg.amsynth.envelope.attack),
        decay: bound(0, 15, cfg.amsynth.envelope.decay),
        sustain: bound(0, 15, cfg.amsynth.envelope.sustain),
        release: bound(0, 15, cfg.amsynth.envelope.release),
      },
      filter: {
        frequency: bound(0.01, 22000, cfg.amsynth.filter.frequency),
        rolloff: magnet([-96, -48, -24, -12], cfg.amsynth.filter.rolloff) as FilterRollOff,
      },
      eq: {
        low: bound(-192, 0, cfg.amsynth.eq.low),
        mid: bound(-192, 0, cfg.amsynth.eq.mid),
        high: bound(-192, 0, cfg.amsynth.eq.high),
        lowFrequency: bound(0.01, 22000, cfg.amsynth.eq.lowFrequency),
        highFrequency: bound(0.01, 22000, cfg.amsynth.eq.highFrequency),
      },
      distortion: {
        amount: bound(0.01, 1, cfg.amsynth.distortion.amount),
        lowFrequency: bound(0.01, 22000, cfg.amsynth.distortion.lowFrequency),
        highFrequency: bound(0.01, 22000, cfg.amsynth.distortion.highFrequency),
      },
    },
    fork: {
      volume: lerp(0, 10, 0, 1, cfg.fork.volume),
    },
  };
};


const useTemperTone = () => {
  const settings = useContext(SettingsContext);
  const TemperToneInstance = useMemo(() => new TemperTone(), []);
  const [prevConfig, setPrevConfig] = useState(fallbackConfig);

  useEffect(() => {
    const settingsMatchedWithConfig: DeepPartial<TemperToneConfig> = {
      masterVolume: settings.masterVolume,
      amsynth: {
        type: settings.waveTriangle ? 'triangle' : 'sine',
        volume: settings.amSynthVolume,
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
    console.log(settings.amSynthFilterRollOff)

    const config = formatConfig(settingsMatchedWithConfig);

    if (!equalsDeep(config, prevConfig)) {
      TemperToneInstance.update(config);
      setPrevConfig(config);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  return TemperToneInstance;
}

export default useTemperTone;
