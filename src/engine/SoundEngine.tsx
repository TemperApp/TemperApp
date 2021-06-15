import * as Tone from 'tone';

/**
 * Singleton class to manage sound generating
 */
class SoundEngine {

  private static instance: SoundEngine;
  private volume: number = -24;
  private synth: Tone.AMSynth;

  private constructor() {
    Tone.Destination.volume.value = this.volume;
    this.synth = new Tone.AMSynth({
      harmonicity: 0.008,
      oscillator: {
        type: 'sine'
      },
      modulation : {
        type : 'sine'
      },
      envelope: {
        attack: 0.005,
        decay: 1,
        sustain: 1,
        release: 0.2
      }
    }).toDestination();
  }

  private static get(): SoundEngine {
    if (!SoundEngine.instance)
      SoundEngine.instance = new SoundEngine();
    return SoundEngine.instance;
  }

  public static play(freq: number): void {
    this.get().synth.triggerAttack(freq);
    Tone.Transport.start();
  }

  public static stopAndPlay(freq: number): void {
    this.stop();
    this.play(freq);
  }

  public static stop(): void {
    this.get().synth.triggerRelease();
    Tone.Transport.stop();
  }
}

export default SoundEngine;
