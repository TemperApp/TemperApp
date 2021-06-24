import * as Tone from 'tone';

/**
 * Singleton class to manage sound generating
 */
class SoundEngine {

  private static instance: SoundEngine;
  private synth: Tone.AMSynth;
  private freq: number = 440; // default temp value

  private constructor() {
    SoundEngine.volume(-24);
    this.synth = new Tone.AMSynth({
      harmonicity: 0, // 0 is unison, 1 is upper octave
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
    this.get().freq = freq;
    try {
      this.get().synth.triggerAttack(this.get().freq);
      Tone.Transport.start();
    } catch (e) {
      console.warn(e);
    }
  }


  public static stopAndPlay(freq: number): void {
    this.stop();
    this.play(freq);
  }


  public static stop(): void {
    this.get().synth.triggerRelease();
    Tone.Transport.stop();
  }


  public static volume(volume = Tone.Destination.volume.value): number {
    return Tone.Destination.volume.value = volume;
  }


  public static setPulseBPM(pulseBPM: number): void {
    this.setPulseBPS(pulseBPM/60);
  }


  public static setPulseBPS(pulseBPS: number): void {
    const carrierFreq = this.get().freq;
    const harmonicity = (carrierFreq + pulseBPS) / carrierFreq - 1 ;
    this.get().synth.harmonicity.value = harmonicity;
  }
}

export default SoundEngine;
