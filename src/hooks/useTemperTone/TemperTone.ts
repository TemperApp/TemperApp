import * as Tone from 'tone';
import { DeepPartial } from "../../utils/types";
import { mergeDeep } from "../../utils/functions";
import NotesMap from "../../model/Note/NotesMap";
import Note from "../../model/Note/Note";
import { acousticBeat } from "../../model/AcousticBeat";
import { fallbackConfig, TemperToneConfig } from '.';
import { bound, lerp, random } from '../../utils/maths';

/**
 * Singleton class handling the emission of sound
 */
class TemperTone {

  static instance: TemperTone;

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


  constructor() {

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
    this.amsynthDist = new Tone.Distortion(
      fallbackConfig.amsynth.distortion.amount
    ).connect(this.amsynthEQ);

    // AM synth
    this.amsynth = new Tone.AMSynth({
      harmonicity: 0, // 0 is unison, 1 is upper octave
      oscillator: {
        type: fallbackConfig.amsynth.type
      },
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
  }


  static get(): TemperTone {
    if (!TemperTone.instance)
      TemperTone.instance = new TemperTone();
    return TemperTone.instance;
  }

  static getConfig() {
    return this.get().cfg;
  }


  /**
   * Updates the TemperTone configuration
   * @param config 
   */
  static update(config: DeepPartial<TemperToneConfig>) {
    this.get().cfg = mergeDeep(fallbackConfig, config);

    this.get().gain.gain.rampTo(this.get().cfg.masterVolume);
    this.get().amsynthGain.gain.rampTo(this.get().cfg.amsynth.volume);
    this.get().amsynth.oscillator.type = this.get().cfg.amsynth.type;
    this.get().amsynth.envelope.set(this.get().cfg.amsynth.envelope);
    this.get().amsynthFilter.frequency.rampTo(this.get().cfg.amsynth.filter.frequency, 0.1);
    this.get().amsynthFilter.set({ rolloff: this.get().cfg.amsynth.filter.rolloff });
    this.get().amsynthEQ.set(this.get().cfg.amsynth.eq);
    this.get().amsynthDist.set({ distortion: this.get().cfg.amsynth.distortion.amount });
    this.get().forkGain.gain.rampTo(this.get().cfg.fork.volume);
  }


  /**
   * Plays the notes
   * @param freqA4 the pitch frequency of the A4 note
   * @param deviations the deviation values of the temperament
   * @param notes an array of notes to play
   * @returns 
   */
  static play(
    freqA4: number,
    deviations: NotesMap<number>,
    notes: Note[],
  ): void {
    switch (notes.length) {
      case 1:
        this.setPulseBPS(0);
        this.stopAndPlay(notes[0].freq(freqA4, deviations));
        break;

      case 2:
        const { modulationFreq, carrierFreq } = acousticBeat(
          notes[0], notes[1], freqA4, deviations
        );

        if (modulationFreq === null || carrierFreq === null)
          return;
          
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


  /**
   * Triggers a periodic sound
   * @param freq frequency of the sound
   * @param duration duration in seconds
   */
  static trigger(freq: number, duration?: number): void {
    this.get().freq = freq;
    try {
      this.updateHarmonicity();
      this.get().amsynthDist.wet.rampTo(this.amsynthDistortionWet(), 0.1);

      if (duration)
        this.get().amsynth.triggerAttackRelease(this.get().freq, duration, '+0.02');
      else
        this.get().amsynth.triggerAttack(this.get().freq, '+0.02');

      this.get().fork.triggerAttackRelease(this.forkFreq(), 1);
    } catch (e) {
      console.warn(e);
    }
  }


  /**
   * Stops the sound that is currently playing
   */
  static stop(): void {
    this.get().amsynth.triggerRelease();
  }


  /**
   * Stops the sound that is currently playing
   * and triggers another periodic sound
   * @param freq frequency of the sound to play
   * @param duration duration in seconds
   */
  static stopAndPlay(freq: number, duration?: number): void {
    this.stop();
    this.trigger(freq, duration);
  }


  static toggleMute(mute?: boolean): void {
    this.get().isMuted = (mute !== undefined) ? mute : !this.get().isMuted;
    Tone.Destination.volume.rampTo(this.get().isMuted ? -192 : -0.1, 0.05);
  }


  static setPulseBPM(pulseBPM: number): void {
    this.setPulseBPS(pulseBPM / 60);
  }


  static setPulseBPS(pulseBPS: number): void {
    this.get().modFreq = (pulseBPS < 0) ? 0 : pulseBPS;
    this.updateHarmonicity();
  }


  /**
   * Updates the modulation frequency of the synth
   */
  private static updateHarmonicity(): void {
    const carrierFreq = this.get().freq;
    const harmonicity = (carrierFreq + this.get().modFreq) / carrierFreq - 1; // minus 1 because: 0 is unison, 1 is upper octave
    this.get().amsynth.harmonicity.rampTo(harmonicity, 0.05);
  }


  /**
   * @returns the pitch frequency of the fork sound
   * to be played
   */
  private static forkFreq(): number {
    return random(-20, 20)
      + bound(330, 550, 
          lerp(120, 800, 330, 550, this.get().freq)
        );
  }

  /**
   * @returns a value between 0 and 1 representing
   * the amount of distortion depending on the frequency
   * of the sound. A low pitch will have more distortion
   * and vice versa
   */
  private static amsynthDistortionWet(): number {
    const { amount, lowFrequency, highFrequency } = this.get().cfg.amsynth.distortion;
    return amount
      * bound(0, 1,
          lerp(lowFrequency, highFrequency, 1, 0, this.get().freq)
        );
  }
}

export default TemperTone;
