import * as Tone from 'tone';

/**
 * Singleton class to manage sound generating
 */
class SoundEngine {

  public static defaultVolume = -0.1;
  
  private static instance: SoundEngine;
  private amsynth: Tone.AMSynth;
  private amsynthDist: Tone.Distortion;
  private amsynthEQ: Tone.EQ3;
  private amsynthFilter: Tone.Filter;
  private fork: Tone.Sampler;
  private freq: number = 440;
  private modFreq: number = 0;

  private constructor() {
    SoundEngine.setVolume(SoundEngine.defaultVolume);

    this.amsynthFilter = new Tone.Filter({
      type : 'lowpass',
      frequency : 620,
      rolloff : -24,
    }).toDestination();

    this.amsynthEQ = new Tone.EQ3({
      low : -0,
      mid : -0,
      high : -0,
      lowFrequency: 440,
      highFrequency: 550,
    }).connect(this.amsynthFilter);

    this.amsynthDist = new Tone.Distortion(1)
      .connect(this.amsynthEQ);

    this.amsynth = new Tone.AMSynth({
      harmonicity: 0, // 0 is unison, 1 is upper octave
      modulation: {
        type: 'sine'
      },
      envelope: {
        attackCurve: 'exponential',
        attack: 0.01,
        decayCurve: 'exponential',
        decay: 1,
        sustain: 0.9,
        release: 1
      }
    }).connect(this.amsynthDist);
    this.amsynth.volume.value = -1;
    this.amsynth.oscillator.partials = [1, 0.05, 0, 0.01];
    this.amsynth.modulation.volume.value = 4; // 4 ≈ 70% modulation index
    
    this.fork = new Tone.Sampler({
      urls: { A4: "fork-hit.wav", },
      baseUrl: "/assets/samples/"
    }).toDestination();
    this.fork.volume.value = -18;
  }


  private static get(): SoundEngine {
    if (!SoundEngine.instance)
      SoundEngine.instance = new SoundEngine();
    return SoundEngine.instance;
  }


  public static freqResponseTest() {
    this.stop();
    this.get().amsynth.triggerAttackRelease(100, 10);
    this.get().amsynth.frequency.rampTo(2000, 7);
  }


  public static play(freq: number): void {
    this.get().freq = freq;
    try {
      const forkFreq = 330 + Math.max(0, (this.get().freq-330) / 2) + Math.random() * 20;
      this.get().amsynthDist.wet.rampTo(Math.min(1, Math.max(0, 1 - (freq - 120) / 340)), 0.1);
      this.get().fork.triggerAttackRelease(forkFreq, 1);
      this.get().amsynth.triggerAttack(this.get().freq, '+0.02');
      this.get().updateHarmonicity();
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
    this.get().amsynth.triggerRelease();
    Tone.Transport.stop();
  }


  public static setVolume(volume: number): void {
    Tone.Destination.volume.rampTo(volume, 0.05);
  }


  public static setPulseBPM(pulseBPM: number): void {
    this.setPulseBPS(pulseBPM / 60);
  }


  public static setPulseBPS(pulseBPS: number): void {
    this.get().modFreq = (pulseBPS < 0) ? 0 : pulseBPS;
    this.get().updateHarmonicity();
  }

  private updateHarmonicity(): void {
    const carrierFreq = this.freq;
    const harmonicity = (carrierFreq + this.modFreq) / carrierFreq - 1; // minus 1 because: 0 is unison, 1 is upper octave
    this.amsynth.harmonicity.value = harmonicity;
  }
}

export default SoundEngine;
