// src/App.jsx

import React, { useState, useRef, useEffect } from 'react';
import * as Tone from 'tone';
import './App.css';
import { chordToNotes } from './lib/chordUtils.js';
import { getRandomProgression } from './lib/progressions.js';
import { allChords } from './lib/allChords.js';

// ─── Instrument constructors (Synth & Piano samples) ───
const instrumentConstructors = {
  piano: () =>
    new Tone.Sampler({
      urls: {
        A0:    'A0v7.wav',   C1:    'C1v7.wav',   'D#1': 'Ds1v7.wav', 'F#1': 'Fs1v7.wav',
        A1:    'A1v7.wav',   C2:    'C2v7.wav',   'D#2': 'Ds2v7.wav', 'F#2': 'Fs2v7.wav',
        A2:    'A2v7.wav',   C3:    'C3v7.wav',   'D#3': 'Ds3v7.wav', 'F#3': 'Fs3v7.wav',
        A3:    'A3v7.wav',   C4:    'C4v7.wav',   'D#4': 'Ds4v7.wav', 'F#4': 'Fs4v7.wav',
        A4:    'A4v7.wav',   C5:    'C5v7.wav',   'D#5': 'Ds5v7.wav', 'F#5': 'Fs5v7.wav',
        C6:    'C6v7.wav',   'D#6': 'Ds6v7.wav', 'F#6': 'Fs6v7.wav',  A6:    'A6v7.wav',
        C7:    'C7v7.wav',   'D#7': 'Ds7v7.wav', 'F#7': 'Fs7v7.wav',  A7:    'A7v7.wav',
        C8:    'C8v7.wav',
      },
      baseUrl: '/samples/piano/',
      release: 1,
      onload: () => console.log('🎹 Piano samples loaded'),
    }).toDestination(),

  synth: () =>
    new Tone.PolySynth(Tone.Synth, {
      volume: -12,
      envelope: { attack: 0.05, release: 0.3 },
    }).toDestination(),
};

// Map pitches → semitone numbers
const NOTE_TO_SEMITONE = {
  C: 0, 'B#': 0,
  'C#': 1, Db: 1,
  D: 2,
  'D#': 3, Eb: 3,
  E: 4, 'Fb': 4,
  'E#': 5, F: 5,
  'F#': 6, Gb: 6,
  G: 7,
  'G#': 8, Ab: 8,
  A: 9,
  'A#': 10, Bb: 10,
  B: 11, 'Cb': 11,
};

// Extract the root semitone from a chord string
function chordRootToSemitone(chord) {
  if (!chord) return null;
  const match = chord.match(/^[A-G][b#]?/);
  return match ? NOTE_TO_SEMITONE[match[0]] : null;
}

// Shift an array of notes by octave
function shiftOctave(notes, shift) {
  return notes.map((note) => {
    const letter = note.slice(0, -1);
    const octave = parseInt(note.slice(-1), 10);
    return letter + (octave + shift);
  });
}

export default function App() {
  // Four chords, BPM, key, UI state
  const [chords, setChords] = useState(['C', 'G', 'Am', 'F']);
  const [bpm, setBpm] = useState(90);
  const [selectedKey, setSelectedKey] = useState('C');
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const [octaveShifts, setOctaveShifts] = useState([0, 0, 0, 0]);
  const [arpeggiateFlags, setArpeggiateFlags] = useState([false, false, false, false]);

  // Instrument selection
  const [instrument, setInstrument] = useState('piano');
  const synthRef = useRef(null);
  const dropdownRef = useRef(null);

  // Initialize or switch synth/instrument
  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.releaseAll();
      synthRef.current.disconnect();
      synthRef.current.dispose();
    }
    synthRef.current = instrumentConstructors[instrument]();
  }, [instrument]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdownIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Update Tone.Transport BPM
  useEffect(() => {
    Tone.Transport.bpm.value = bpm;
  }, [bpm]);

  // Event handlers
  const handleChordChange = (i, chord) => {
    const next = [...chords];
    next[i] = chord;
    setChords(next);
  };

  const toggleArpeggiate = (i) => {
    const next = [...arpeggiateFlags];
    next[i] = !next[i];
    setArpeggiateFlags(next);
  };

  const playChord = async (chord, i) => {
    if (!chord || !synthRef.current) return;
    await Tone.start();
    synthRef.current.releaseAll();
    const notes = shiftOctave(chordToNotes(chord), octaveShifts[i]);
    const duration = 60 / bpm;
    if (arpeggiateFlags[i]) {
      const offset = duration * 0.1;
      const now = Tone.now();
      notes.forEach((n, idx) =>
        synthRef.current.triggerAttackRelease(n, duration - idx * offset, now + idx * offset)
      );
    } else {
      synthRef.current.triggerAttackRelease(notes, duration);
    }
  };

  const playAllChords = async () => {
    if (!synthRef.current) return;
    await Tone.start();
    synthRef.current.releaseAll();
    const interval = 60 / bpm;
    const now = Tone.now();
    chords.forEach((chord, idx) => {
      if (!chord) return;
      const notes = shiftOctave(chordToNotes(chord), octaveShifts[idx]);
      const time = now + idx * interval;
      if (arpeggiateFlags[idx]) {
        const offset = interval * 0.1;
        notes.forEach((n, j) =>
          synthRef.current.triggerAttackRelease(n, interval - j * offset, time + j * offset)
        );
      } else {
        synthRef.current.triggerAttackRelease(notes, interval, time);
      }
    });
  };

  const handleInspireMe = () => {
    setChords(getRandomProgression({ key: selectedKey }));
  };

  const getRecommendedSemitones = (prev) => {
    const root = chordRootToSemitone(prev);
    return root === null ? [] : [(root + 7) % 12, (root + 5) % 12];
  };

  return (
    <div className = "app-container">
    <div className="App" style={{ textAlign: 'center', padding: '2rem' }}>
      
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        🎹 Easy Chord Progression Player 
      </h1>

      {/* Top Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          maxWidth: '60rem',
          margin: '0 auto 2rem',
        }}
      >
        {/* Instrument Toggle (left) */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
            Instrument:
          </div>
          {['piano', 'synth'].map((key) => (
            <button
              key={key}
              onClick={() => setInstrument(key)}
              style={{
                margin: '0 0.5rem',
                padding: '0.75rem 1.25rem',
                fontSize: '0.9rem',
                background: instrument === key ? '#333' : '#eee',
                color: instrument === key ? '#fff' : '#000',
                border: 'none',
                borderRadius: '0.4rem',
                cursor: 'pointer',
              }}
            >
              {key === 'synth' ? 'Synth' : 'Piano'}
            </button>
          ))}
        </div>

        {/* Play All + BPM (center) */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={playAllChords}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1.1rem',
              background: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '0.4rem',
              cursor: 'pointer',
              marginBottom: '0.75rem',
            }}
          >
            ▶️ Play All
          </button>
          <div>
            <label style={{ fontSize: '0.9rem', marginRight: '0.5rem' }}>BPM:</label>
            <input
              type="number"
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value) || 1)}
              style={{
                width: '4rem',
                padding: '0.4rem',
                fontSize: '0.9rem',
                borderRadius: '0.4rem',
                border: '1px solid #ccc',
                textAlign: 'center',
              }}
            />
          </div>
        </div>

        {/* Key Selector & Inspire (right) */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
            Suggest in key:
          </div>
          <select
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
            style={{
              padding: '0.5rem',
              fontSize: '0.9rem',
              borderRadius: '0.4rem',
              border: '1px solid #ccc',
            }}
          >
            <option value="C">C major</option>
            <option value="G">G major</option>
            <option value="D">D major</option>
            <option value="A">A major</option>
            <option value="E">E major</option>
            <option value="B">B major</option>
            <option value="F#">F♯ major</option>
            <option value="F">F major</option>
            <option value="Bb">B♭ major</option>
            <option value="Eb">E♭ major</option>
            <option value="Ab">A♭ major</option>
            <option value="Db">D♭ major</option>
            <option value="Am">A minor</option>
            <option value="Em">E minor</option>
            <option value="Bm">B minor</option>
            <option value="F#m">F♯ minor</option>
            <option value="C#m">C♯ minor</option>
            <option value="G#m">G♯ minor</option>
            <option value="Dm">D minor</option>
            <option value="Gm">G minor</option>
            <option value="Cm">C minor</option>
            <option value="Fm">F minor</option>
            <option value="Bbm">B♭ minor</option>
            <option value="Ebm">E♭ minor</option>
          </select>
          <div style={{ marginTop: '0.75rem' }}>
            <button
              onClick={handleInspireMe}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                background: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '0.4rem',
                cursor: 'pointer',
              }}
            >
              ✨ Inspire Me
            </button>
          </div>
        </div>
      </div>

      {/* Circle‐of‐Fifths Note */}
      <div
        style={{
          fontSize: '0.85rem',
          fontStyle: 'italic',
          color: '#666',
          marginBottom: '1rem',
        }}
      >
        * Bold & italicized chords follow the circle of fifths *
      </div>

      {/* Chord Combos */}
      <div
        ref={dropdownRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
        }}
      >
        {chords.map((ch, i) => {
          const prev = i > 0 ? chords[i - 1] : null;
          const recs = prev ? getRecommendedSemitones(prev) : [];
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                minWidth: '10rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Chord Name */}
                <button
                  onClick={() => setOpenDropdownIndex(-1)}
                  style={{
                    padding: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    border: '1px solid #ccc',
                    borderRadius: '0.4rem',
                    background: '#1a1a1a',
                    cursor: 'pointer',
                    color: '#fff'
                  }}
                >
                  {ch || '—'}
                </button>

                {/* Dropdown Arrow */}
                <div style={{ position: 'relative', marginLeft: '0.5rem' }}>
                  <button
                    onClick={() =>
                      setOpenDropdownIndex(openDropdownIndex === i ? -1 : i)
                    }
                    style={{
                      padding: '0.75rem',
                      fontSize: '1rem',
                      border: '1px solid #ccc',
                      borderRadius: '0.4rem',
                      background: '#1a1a1a',
                      cursor: 'pointer',
                      color: '#fff'
                    }}
                  >
                    ▼
                  </button>
                  {openDropdownIndex === i && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '110%',
                        left: 0,
                        background: '#1a1a1a',
                        border: '1px solid #ccc',
                        borderRadius: '0.4rem',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        width: '10rem',
                        zIndex: 10,
                        color: '#fff'
                      }}
                    >
                      {allChords.map((opt) => {
                        const isRec = recs.includes(chordRootToSemitone(opt));
                        return (
                          <div
                            key={opt}
                            onClick={() => handleChordChange(i, opt)}
                            style={{
                              padding: '0.5rem',
                              cursor: 'pointer',
                              fontWeight: isRec ? 'bold' : 'normal',
                              fontStyle: isRec ? 'italic' : 'normal',
                            }}
                          >
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Play Single */}
                <button
                  onClick={() => playChord(ch, i)}
                  disabled={!ch}
                  style={{
                    padding: '0.75rem',
                    marginLeft: '0.5rem',
                    fontSize: '1rem',
                    cursor: ch ? 'pointer' : 'not-allowed',
                    border: '1px solid #ccc',
                    borderRadius: '0.4rem',
                    background: '#1a1a1a',
                  }}
                >
                  ▶️
                </button>
              </div>

              {/* Chord Info Panel */}
              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '0.4rem',
                  background: '#1a1a1a',
                  width: '100%',
                  maxWidth: '240px',
                  fontSize: '0.9rem',
                  minHeight: '6rem',
                  color: '#fff'
                }}
              >
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{ch}</div>
                <div style={{ marginBottom: '0.5rem' }}>
                  {chordToNotes(ch)
                    .map((n) => n.slice(0, -1))
                    .join(' – ')}
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span>Octave:</span>
                  <button
                    onClick={() => {
                      const next = [...octaveShifts];
                      next[i]--;
                      setOctaveShifts(next);
                    }}
                    style={{ margin: '0 0.5rem' }}
                  >
                    –
                  </button>
                  {octaveShifts[i]}
                  <button
                    onClick={() => {
                      const next = [...octaveShifts];
                      next[i]++;
                      setOctaveShifts(next);
                    }}
                    style={{ margin: '0 0.5rem' }}
                  >
                    +
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={arpeggiateFlags[i]}
                    onChange={() => toggleArpeggiate(i)}
                  />
                  <label style={{ marginLeft: '0.5rem' }}>Arpeggiate</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
