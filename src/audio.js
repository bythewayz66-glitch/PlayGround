export class Soundscape {
  constructor() {
    this.context = null;
    this.started = false;
    this.muted = localStorage.getItem('openwork-muted') === '1';
    this.nextBird = 5;
    this.master = null;
    this.ambient = null;
    this.reverb = null;
  }

  async start() {
    if (this.started) {
      await this.context?.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    this.context = new AudioCtx();
    this.started = true;
    const ctx = this.context;

    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -20;
    compressor.knee.value = 20;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.01;
    compressor.release.value = 0.3;

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.62;
    this.master.connect(compressor);
    compressor.connect(ctx.destination);

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(3.2, 2.8);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.32;
    this.reverb.connect(reverbGain);
    reverbGain.connect(compressor);

    this.ambient = ctx.createGain();
    this.ambient.gain.value = this.muted ? 0 : 1;
    this.ambient.connect(this.master);
    const ambientSend = ctx.createGain();
    ambientSend.gain.value = 0.25;
    this.ambient.connect(ambientSend);
    ambientSend.connect(this.reverb);

    this.buildPad();
    this.buildWind();
    await ctx.resume();
  }

  makeImpulse(duration = 3, decay = 2.5) {
    const ctx = this.context;
    const length = Math.floor(ctx.sampleRate * duration);
    const impulse = ctx.createBuffer(2, length, ctx.sampleRate);
    for (let channel = 0; channel < 2; channel += 1) {
      const data = impulse.getChannelData(channel);
      for (let i = 0; i < length; i += 1) {
        const t = i / length;
        const noise = Math.random() * 2 - 1;
        const early = i < ctx.sampleRate * 0.08 ? 0.4 : 1;
        data[i] = noise * Math.pow(1 - t, decay) * early;
      }
    }
    return impulse;
  }

  buildPad() {
    const ctx = this.context;
    const bus = ctx.createGain();
    bus.gain.value = this.muted ? 0 : 0.022;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 620;
    filter.Q.value = 0.5;

    bus.connect(filter);
    filter.connect(this.ambient);

    const frequencies = [73.42, 110, 146.83, 185, 220, 293.66];
    const gains = [0.8, 0.55, 0.46, 0.28, 0.2, 0.11];
    this.padOscillators = [];

    frequencies.forEach((frequency, index) => {
      const oscillator = ctx.createOscillator();
      oscillator.type = index % 2 === 0 ? 'sine' : 'triangle';
      oscillator.frequency.value = frequency;
      oscillator.detune.value = (index - 2.5) * 4;

      const gain = ctx.createGain();
      gain.gain.value = gains[index];

      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.025 + index * 0.007;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = frequency * 0.0035;
      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);
      lfo.start();

      oscillator.connect(gain);
      gain.connect(bus);
      oscillator.start();
      this.padOscillators.push({ oscillator, gain, lfo });
    });

    const filterLfo = ctx.createOscillator();
    filterLfo.type = 'sine';
    filterLfo.frequency.value = 0.04;
    const filterLfoGain = ctx.createGain();
    filterLfoGain.gain.value = 160;
    filterLfo.connect(filterLfoGain);
    filterLfoGain.connect(filter.frequency);
    filterLfo.start();

    this.padBus = bus;
  }

  buildWind() {
    const ctx = this.context;
    const length = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i += 1) {
      const white = Math.random() * 2 - 1;
      last = last * 0.985 + white * 0.015;
      data[i] = last * 8;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 430;
    filter.Q.value = 0.65;

    const gain = ctx.createGain();
    gain.gain.value = this.muted ? 0 : 0.026;

    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.055;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 170;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ambient);
    noise.start();
    this.windGain = gain;
  }

  setMuted(muted) {
    this.muted = muted;
    localStorage.setItem('openwork-muted', muted ? '1' : '0');
    if (!this.context) return;
    const now = this.context.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.linearRampToValueAtTime(muted ? 0 : 0.62, now + 0.3);
    this.ambient.gain.cancelScheduledValues(now);
    this.ambient.gain.linearRampToValueAtTime(muted ? 0 : 1, now + 0.3);
  }

  note(frequency, duration, options = {}) {
    if (!this.started || this.muted) return;
    const {
      type = 'sine',
      gain = 0.08,
      attack = 0.01,
      release = 0.4,
      delay = 0,
      pan = 0,
      send = 0.4,
      endFrequency = null,
    } = options;
    const ctx = this.context;
    const start = ctx.currentTime + delay;

    const oscillator = ctx.createOscillator();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    if (endFrequency !== null) {
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), start + duration);
    }

    const envelope = ctx.createGain();
    envelope.gain.setValueAtTime(0.0001, start);
    envelope.gain.exponentialRampToValueAtTime(gain, start + attack);
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration + release);

    const panner = ctx.createStereoPanner();
    panner.pan.value = pan;

    oscillator.connect(envelope);
    envelope.connect(panner);
    panner.connect(this.master);
    if (send > 0) {
      const sendGain = ctx.createGain();
      sendGain.gain.value = send;
      panner.connect(sendGain);
      sendGain.connect(this.reverb);
    }
    oscillator.start(start);
    oscillator.stop(start + duration + release + 0.05);
  }

  noise(duration = 0.2, options = {}) {
    if (!this.started || this.muted) return;
    const { gain = 0.03, frequency = 1200, q = 0.8, delay = 0, type = 'bandpass' } = options;
    const ctx = this.context;
    const start = ctx.currentTime + delay;
    const length = Math.ceil(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) {
      data[i] = Math.random() * 2 - 1;
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = frequency;
    filter.Q.value = q;
    const envelope = ctx.createGain();
    envelope.gain.setValueAtTime(0.0001, start);
    envelope.gain.exponentialRampToValueAtTime(gain, start + 0.012);
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter);
    filter.connect(envelope);
    envelope.connect(this.master);
    source.start(start);
  }

  select() {
    this.note(520, 0.08, { type: 'sine', gain: 0.035, release: 0.12, send: 0.2 });
  }

  place(tool, level = 1) {
    const levelShift = 1 + Math.min(level - 1, 2) * 0.08;
    if (tool === 'land' || tool === 'terrain') {
      this.note(104 * levelShift, 0.18, { type: 'sine', gain: 0.12, endFrequency: 72, release: 0.28, send: 0.2 });
      this.noise(0.22, { gain: 0.045, frequency: 650, q: 0.7 });
      this.note(392, 0.22, { type: 'triangle', gain: 0.018, delay: 0.02, release: 0.3, send: 0.5 });
    } else if (tool === 'water') {
      this.note(520 * levelShift, 0.2, { type: 'sine', gain: 0.06, endFrequency: 880, release: 0.5, send: 0.8 });
      this.note(780 * levelShift, 0.3, { type: 'sine', gain: 0.025, delay: 0.06, release: 0.55, send: 0.9 });
      this.noise(0.28, { gain: 0.025, frequency: 1700, q: 1.4 });
    } else if (tool === 'grove' || tool === 'tree') {
      const root = 293.66 * levelShift;
      [1, 1.25, 1.5, 2].forEach((ratio, index) => {
        this.note(root * ratio, 0.28, {
          type: index === 0 ? 'sine' : 'triangle',
          gain: 0.032,
          delay: index * 0.055,
          release: 0.6,
          pan: (index - 1.5) * 0.16,
          send: 0.8,
        });
      });
      this.noise(0.18, { gain: 0.022, frequency: 2800, q: 1.1, delay: 0.02 });
    } else if (tool === 'crystal' || tool === 'magic') {
      const root = 659.25 * levelShift;
      [1, 1.5, 2, 2.5, 3].forEach((ratio, index) => {
        this.note(root * ratio, 0.34, {
          type: 'sine',
          gain: 0.026 - index * 0.002,
          delay: index * 0.075,
          release: 0.8,
          pan: (index - 2) * 0.18,
          send: 1,
        });
      });
    } else if (tool === 'home' || tool === 'shop') {
      const root = 220 * levelShift;
      [1, 1.5, 2].forEach((ratio, index) => {
        this.note(root * ratio, 0.22, {
          type: 'triangle',
          gain: 0.032,
          delay: index * 0.065,
          release: 0.55,
          send: 0.55,
        });
      });
      this.noise(0.16, { gain: 0.02, frequency: 900, q: 0.9 });
    } else if (tool === 'folk') {
      this.note(392 * levelShift, 0.1, { type: 'sine', gain: 0.04, release: 0.22, send: 0.4 });
      this.note(523.25 * levelShift, 0.14, { type: 'sine', gain: 0.03, delay: 0.08, release: 0.3, send: 0.5 });
    } else if (tool === 'path') {
      this.note(174 * levelShift, 0.08, { type: 'triangle', gain: 0.022, release: 0.18, send: 0.2 });
      this.noise(0.1, { gain: 0.016, frequency: 520, q: 0.7 });
    } else if (tool === 'prop') {
      this.note(246.94 * levelShift, 0.14, { type: 'sine', gain: 0.036, endFrequency: 220, release: 0.24, send: 0.32 });
      this.noise(0.12, { gain: 0.02, frequency: 700, q: 0.8 });
    } else {
      this.note(329.63 * levelShift, 0.16, { type: 'sine', gain: 0.03, release: 0.3, send: 0.4 });
    }
  }

  denied() {
    if (!this.started || this.muted) return;
    this.note(146.83, 0.1, { type: 'triangle', gain: 0.045, endFrequency: 120, release: 0.15, send: 0.1 });
    this.note(138.59, 0.12, { type: 'triangle', gain: 0.035, delay: 0.07, endFrequency: 110, release: 0.18, send: 0.1 });
  }

  expand() {
    if (!this.started || this.muted) return;
    [146.83, 220, 293.66, 369.99, 440, 587.33].forEach((frequency, index) => {
      this.note(frequency, 0.9, {
        type: index < 2 ? 'sine' : 'triangle',
        gain: 0.028,
        delay: index * 0.07,
        release: 1.8,
        pan: (index - 2.5) * 0.1,
        send: 1,
      });
    });
    this.noise(0.7, { gain: 0.022, frequency: 900, q: 0.45 });
  }

  win() {
    if (!this.started || this.muted) return;
    const chord = [146.83, 185, 220, 293.66, 369.99, 440, 587.33, 739.99];
    chord.forEach((frequency, index) => {
      this.note(frequency, 1.7, {
        type: index % 2 === 0 ? 'sine' : 'triangle',
        gain: 0.038,
        delay: index * 0.11,
        release: 3,
        pan: (index - 3.5) * 0.1,
        send: 1.1,
      });
    });
    this.noise(1.2, { gain: 0.032, frequency: 1500, q: 0.4 });
  }

  chime() {
    this.note(880, 0.2, { type: 'sine', gain: 0.024, release: 0.5, send: 0.8 });
    this.note(1318.5, 0.24, { type: 'sine', gain: 0.016, delay: 0.08, release: 0.6, send: 0.8 });
  }

  update(dt) {
    if (!this.started || this.muted) return;
    this.nextBird -= dt;
    if (this.nextBird <= 0) {
      this.nextBird = 7 + Math.random() * 10;
      const pan = Math.random() * 1.6 - 0.8;
      const base = 1600 + Math.random() * 900;
      const notes = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < notes; i += 1) {
        this.note(base * (0.9 + Math.random() * 0.25), 0.07, {
          type: 'sine',
          gain: 0.012,
          delay: i * 0.1,
          endFrequency: base * (1.15 + Math.random() * 0.2),
          release: 0.12,
          pan,
          send: 0.7,
        });
      }
    }
  }
}
