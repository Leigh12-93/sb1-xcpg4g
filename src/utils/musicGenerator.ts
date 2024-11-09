import * as Tone from 'tone';

export function generateBeat() {
  // Drum synthesis
  const kick = new Tone.MembraneSynth({
    pitchDecay: 0.05,
    octaves: 10,
    oscillator: { type: 'sine' },
    envelope: {
      attack: 0.001,
      decay: 0.4,
      sustain: 0.01,
      release: 1.4,
      volume: -6,
    },
  }).toDestination();

  const snare = new Tone.NoiseSynth({
    noise: { type: 'white' },
    envelope: {
      attack: 0.005,
      decay: 0.2,
      sustain: 0,
      volume: -10,
    },
  }).toDestination();

  const hihat = new Tone.MetalSynth({
    frequency: 200,
    envelope: {
      attack: 0.001,
      decay: 0.1,
      release: 0.01,
    },
    harmonicity: 5.1,
    modulationIndex: 32,
    resonance: 4000,
    octaves: 1.5,
    volume: -20,
  }).toDestination();

  // Piano simulation using PolySynth
  const piano = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: 'triangle' },
    envelope: {
      attack: 0.02,
      decay: 0.1,
      sustain: 0.3,
      release: 1,
    },
    volume: -8,
  }).toDestination();

  // Bass
  const bass = new Tone.Synth({
    oscillator: { type: 'triangle' },
    envelope: { attack: 0.05, decay: 0.2, sustain: 0.8, release: 0.1 },
    volume: -6,
  }).toDestination();

  // Drum pattern
  const drumPattern = [
    ['K', 'H', 'S', 'H', 'K', 'H', 'S', 'H'],
    ['K', 'H', 'S', 'H', 'K', 'H', 'S', 'H'],
  ];

  // Chord progression
  const chordProgression = [
    ['C4', 'E4', 'G4'],
    ['F4', 'A4', 'C5'],
    ['G4', 'B4', 'D5'],
    ['A4', 'C5', 'E5'],
  ];

  let currentBeat = 0;
  let currentChord = 0;

  const mainLoop = new Tone.Loop((time) => {
    const pattern = drumPattern[currentBeat];

    // Play drums
    pattern.forEach((note, index) => {
      const noteTime = time + index * 0.125;
      if (note === 'K') kick.triggerAttackRelease('C1', '8n', noteTime);
      if (note === 'S') snare.triggerAttackRelease('8n', noteTime);
      if (note === 'H') hihat.triggerAttackRelease('32n', noteTime);
    });

    // Play piano chords
    piano.triggerAttackRelease(chordProgression[currentChord], '2n', time);

    // Add bass line
    bass.triggerAttackRelease(chordProgression[currentChord][0], '2n', time);

    currentBeat = (currentBeat + 1) % 2;
    if (currentBeat === 0) {
      currentChord = (currentChord + 1) % 4;
    }
  }, '2n');

  // Set initial tempo
  Tone.Transport.bpm.value = 126;

  return {
    start: () => {
      hihat.triggerAttackRelease('32n', 0); // Opening hit
      mainLoop.start(0);
    },
    stop: () => {
      mainLoop.stop();
      currentBeat = 0;
      currentChord = 0;
    },
  };
}
