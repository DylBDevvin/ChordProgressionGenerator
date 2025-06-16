export const chordToNotes = (chord) => {
  const root  = chord.match(/^[A-G]#?/)[0];
  const type  = chord.slice(root.length);

  const semitonesMap = {
    '':    [0, 4, 7],
    'm':   [0, 3, 7],
    '7':   [0, 4, 7, 10],
    'maj7':[0, 4, 7, 11],
    'm7':  [0, 3, 7, 10],
  };

  const semitones = semitonesMap[type] || semitonesMap[''];

  const NOTE_TO_SEMITONE = {
    C:0, 'C#':1, D:2, 'D#':3, E:4, F:5, 'F#':6,
    G:7, 'G#':8, A:9, 'A#':10, B:11
  };
  const SEMITONE_TO_NOTE = Object.fromEntries(
    Object.entries(NOTE_TO_SEMITONE).map(([k,v]) => [v,k])
  );

  return semitones.map((st) => {
    const rootSemitone = NOTE_TO_SEMITONE[root];
    const totalSemitone = rootSemitone + st;
    const octave = 4 + Math.floor(totalSemitone / 12);
    const pc = SEMITONE_TO_NOTE[totalSemitone % 12];
    return pc + octave;
  });
};