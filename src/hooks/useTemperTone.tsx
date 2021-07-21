import { useContext, useEffect, useMemo, useState } from "react";
import SettingsContext from "../store/settings/settings-context";
import * as Tone from 'tone';
import { DeepPartial } from "../utils/types";
import { equalsDeep, mergeDeep } from "../utils/functions";
import NotesMap from "../model/Note/NotesMap";
import Note from "../model/Note/Note";
import { acousticBeat } from "../model/AcousticBeat";

type TemperToneConfig = {
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


const fallbackConfig: TemperToneConfig = {
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

/**
 * Creates the TemperTone singleton
 */
class TemperTone {
  cfg: TemperToneConfig = fallbackConfig;
  isMuted: boolean = false;

  amsynth: Tone.AMSynth;
  amsynthDist: Tone.Distortion;
  amsynthEQ: Tone.EQ3;
  amsynthFilter: Tone.Filter;
  amsynthGain: Tone.Gain;
  fork: Tone.Sampler;
  forkGain: Tone.Gain;
  gain: Tone.Gain;

  freq: number = 440;
  modFreq: number = 0;

  constructor(config: DeepPartial<TemperToneConfig> = {}) {
    this.toggleMute(false);

    // Main Gain
    this.gain = new Tone.Gain(1)
      .toDestination();

    // AM Synth Gain
    this.amsynthGain = new Tone.Gain(1)
      .connect(this.gain);

    // AM Synth Filter
    this.amsynthFilter = new Tone.Filter({
      type: 'lowpass',
      ...fallbackConfig.amsynth.filter,
    }).connect(this.amsynthGain);

    // AM Synth EQ
    this.amsynthEQ = new Tone.EQ3({
      ...fallbackConfig.amsynth.eq,
    }).connect(this.amsynthFilter);

    // AM Synth Distortion
    this.amsynthDist = new Tone.Distortion(1)
      .connect(this.amsynthEQ);

    // AM synth
    this.amsynth = new Tone.AMSynth({
      harmonicity: 0, // 0 is unison, 1 is upper octave
      modulation: {
        type: 'sine'
      },
      envelope: {
        attackCurve: 'exponential',
        decayCurve: 'exponential',
        ...fallbackConfig.amsynth.envelope,
      }
    }).connect(this.amsynthDist);
    this.amsynth.modulation.volume.value = 4; // 4 ≈ 70% modulation index

    // Fork Gain
    this.forkGain = new Tone.Gain(1)
      .connect(this.gain);

    // Fork
    this.fork = new Tone.Sampler({
      urls: { A4: "fork-hit.wav", },
      baseUrl: "/assets/samples/"
    }).connect(this.forkGain);

    // Handle config
    this.update(config);
  }


  update(config: DeepPartial<TemperToneConfig>) {
    this.cfg = mergeDeep(fallbackConfig, config);

    this.gain.gain.rampTo(this.cfg.masterVolume);
    this.amsynthGain.gain.rampTo(this.cfg.amsynth.volume);
    this.amsynth.oscillator.partials = this.cfg.amsynth.partials;
    this.amsynth.envelope.set(this.cfg.amsynth.envelope);
    this.amsynthFilter.frequency.rampTo(this.cfg.amsynth.filter.frequency, 0.1);
    this.amsynthFilter.set(this.cfg.amsynth.filter);
    this.amsynthEQ.set(this.cfg.amsynth.eq);
    this.forkGain.gain.rampTo(this.cfg.fork.volume);
  }


  play(
    freqA4: number,
    deviations: NotesMap<number>,
    notes: Note[],
  ) {
    switch (notes.length) {
      case 1:
        this.setPulseBPS(0);
        this.stopAndPlay(notes[0].freq(freqA4, deviations));
        break;

      case 2:
        const { modulationFreq, carrierFreq } = acousticBeat(
          notes[0], notes[1], freqA4, deviations
        );

        if (modulationFreq === null || carrierFreq === null) {
          console.warn('[TemperTone]: play: unhandled notes:', notes, 'acoustic beat: ', modulationFreq, carrierFreq);
          return;
        }
        this.setPulseBPS(modulationFreq);
        let heardFreq = carrierFreq;
        while (heardFreq > 1000)
          heardFreq /= 2;
        this.stopAndPlay(heardFreq);
        break;

      default:
        this.stop();
    }
  }


  trigger(freq: number, duration?: number): void {
    this.freq = freq;
    try {
      this.updateHarmonicity();
      this.amsynthDist.wet.rampTo(this.amsynthDistortionWet(), 0.1);

      if (duration)
        this.amsynth.triggerAttackRelease(this.freq, duration, '+0.02');
      else
        this.amsynth.triggerAttack(this.freq, '+0.02');

      this.fork.triggerAttackRelease(this.forkFreq(), 1);
    } catch (e) {
      console.warn(e);
    }
  }


  stop(): void {
    this.amsynth.triggerRelease();
  }


  stopAndPlay(freq: number): void {
    this.stop();
    this.trigger(freq);
  }


  toggleMute(mute?: boolean): void {
    this.isMuted = (mute !== undefined) ? mute : !this.isMuted;
    Tone.Destination.volume.rampTo(this.isMuted ? -192 : -0.1, 0.05);
  }


  setPulseBPM(pulseBPM: number): void {
    this.setPulseBPS(pulseBPM / 60);
  }


  setPulseBPS(pulseBPS: number): void {
    this.modFreq = (pulseBPS < 0) ? 0 : pulseBPS;
    this.updateHarmonicity();
  }


  private updateHarmonicity(): void {
    const carrierFreq = this.freq;
    const harmonicity = (carrierFreq + this.modFreq) / carrierFreq - 1; // minus 1 because: 0 is unison, 1 is upper octave
    this.amsynth.harmonicity.value = harmonicity;
  }


  private forkFreq(): number {
    return 330
      + Math.max(0, (this.freq - 330) / 2) // lerp
      + Math.random() * 20;                // random variation
  }


  private amsynthDistortionWet(): number {
    const { amount, lowFrequency, highFrequency } = this.cfg.amsynth.distortion;
    return Math.min(1, Math.max(0,                      // bounded between [0,1]
      (1 - (this.freq - lowFrequency) / highFrequency)  // lerp
      * amount
    ));
  }
}


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
