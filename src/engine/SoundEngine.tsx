import * as Tone from 'tone';

/**
 * Singleton class to manage sound generating
 */
class SoundEngine {

  private static instance: SoundEngine;
  private volume: number = -36;
  private synth: Tone.Synth;

  private constructor() {
    Tone.Destination.volume.value = this.volume;
    this.synth = new Tone.Synth({
      oscillator: {
        type: 'sine'
      },
      envelope: {
        attack: 0.05,
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

  public static stopAndplay(freq: number): void {
    this.stop();
    this.play(freq);
  }

  public static stop(): void {
    this.get().synth.triggerRelease();
    Tone.Transport.stop();
  }
}

export default SoundEngine;
