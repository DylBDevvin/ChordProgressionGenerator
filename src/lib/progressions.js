// src/lib/progressions.js

export const presetProgressions = [
  // Key: C major
  { key: 'C', mood: 'sad',     chords: ['C', 'G',   'Am',   'F']      },
  { key: 'C', mood: 'chill',   chords: ['Cmaj7', 'Dm7', 'G7',  'Em7']  },

  // Key: G major
  { key: 'G', mood: 'funky',   chords: ['G7',   'C7',   'D7',  'Am7']  },
  { key: 'G', mood: 'chill',   chords: ['Gmaj7','Em7',  'Am7', 'D7']   },

  // Key: D major
  { key: 'D', mood: 'bright',  chords: ['D',    'A',    'Bm',  'G']     },
  { key: 'D', mood: 'uplifting', chords: ['Dmaj7','F#m7', 'Bm7', 'A7'] },

  // Key: A major
  { key: 'A', mood: 'epic',    chords: ['A',    'E',    'F#m', 'D']     },
  { key: 'A', mood: 'chill',   chords: ['Amaj7','C#m7', 'F#m7','E7']   },

  // Key: E major
  { key: 'E', mood: 'rock',    chords: ['E',    'B',    'C#m', 'A']     },
  { key: 'E', mood: 'smooth',  chords: ['Emaj7','G#m7', 'C#m7','B7']   },

  // Key: B major
  { key: 'B', mood: 'driving', chords: ['B',    'F#',   'G#m', 'E']     },
  { key: 'B', mood: 'jazzy',   chords: ['Bmaj7','D#m7', 'G#m7','F#7']  },

  // Key: F# major
  { key: 'F#', mood: 'bright',  chords: ['F#',   'C#',   'D#m', 'B']     },
  { key: 'F#', mood: 'intense', chords: ['F#maj7','A#m7','D#m7','C#7']  },

  // Key: C# major
  { key: 'C#', mood: 'lush',    chords: ['C#',   'G#',   'A#m', 'F#']    },
  { key: 'C#', mood: 'dreamy',  chords: ['C#maj7','D#m7','G#m7','G#7']  },

  // Key: F major
  { key: 'F', mood: 'warm',     chords: ['F',    'C',    'Dm',  'Bb']    },
  { key: 'F', mood: 'dreamy',   chords: ['Fmaj7','Am7',  'Dm7', 'C7']   },

  // Key: Bb major
  { key: 'Bb', mood: 'jazz',    chords: ['Bbmaj7','Cm7', 'F7',  'Ebmaj7'] },
  { key: 'Bb', mood: 'rock',    chords: ['Bb',   'F',    'Gm',  'Eb']    },

  // Key: Eb major
  { key: 'Eb', mood: 'soulful', chords: ['Ebmaj7','Cm7','Fm7', 'Bb7']   },
  { key: 'Eb', mood: 'uplifting', chords: ['Eb',  'Bb',  'Cm',  'Ab']   },

  // Key: Ab major
  { key: 'Ab', mood: 'smooth',  chords: ['Abmaj7','Fm7', 'Bb7', 'Ebmaj7'] },
  { key: 'Ab', mood: 'bright',  chords: ['Ab',   'Eb',   'Fm',  'Db']    },

  // Key: Db major
  { key: 'Db', mood: 'elegant', chords: ['Dbmaj7','Fm7','Bb7', 'Ebmaj7'] },
  { key: 'Db', mood: 'warm',    chords: ['Db',   'Ab',   'Bbm', 'Gb']    },

  // Key: Gb major
  { key: 'Gb', mood: 'mellow',  chords: ['Gbmaj7','Bbm7','Eb7', 'Dbmaj7'] },
  { key: 'Gb', mood: 'bright',  chords: ['Gb',   'Db',   'Ebm', 'Cb']    },

  // Key: Cb/B major
  { key: 'B', mood: 'bold',     chords: ['B',    'F#',   'G#m', 'E']     },
  { key: 'B', mood: 'smooth',   chords: ['Bmaj7','D#m7','G#m7','F#7']  },

  // Minor Keys

  // Key: A minor
  { key: 'Am', mood: 'dark',    chords: ['Am',   'F',    'C',   'G']     },
  { key: 'Am', mood: 'sad',     chords: ['Am7',  'Dm7',  'G7',  'Em7']   },

  // Key: E minor
  { key: 'Em', mood: 'moody',   chords: ['Em',   'C',    'G',   'D']     },
  { key: 'Em', mood: 'ambient', chords: ['Em7',  'G6',   'Dmaj7','Cmaj7'] },

  // Key: B minor
  { key: 'Bm', mood: 'intense', chords: ['Bm',   'G',    'D',   'A']     },
  { key: 'Bm', mood: 'jazzy',   chords: ['Bm7',  'E7',   'Amaj7','Dmaj7'] },

  // Key: F# minor
  { key: 'F#m', mood: 'brooding', chords: ['F#m', 'D',   'A',   'E']     },
  { key: 'F#m', mood: 'smooth',    chords: ['F#m7','B7',  'Emaj7','Amaj7'] },

  // Key: C# minor
  { key: 'C#m', mood: 'melancholic', chords: ['C#m', 'A',    'E',   'B']    },
  { key: 'C#m', mood: 'uplifting',   chords: ['C#m7','F#7',  'Bmaj7','Emaj7'] },

  // Key: G# minor
  { key: 'G#m', mood: 'haunting', chords: ['G#m', 'E',   'B',   'F#']    },
  { key: 'G#m', mood: 'jazzy',    chords: ['G#m7','C#7','F#maj7','Bmaj7'] },

  // Key: D minor
  { key: 'Dm', mood: 'moody',     chords: ['Dm',   'Bb',   'F',   'C']   },
  { key: 'Dm', mood: 'chill',     chords: ['Dm7',  'Gm7',  'Am7', 'C7']  },

  // Key: G minor
  { key: 'Gm', mood: 'dark',      chords: ['Gm',   'Eb',   'Bb',  'F']  },
  { key: 'Gm', mood: 'jazzy',     chords: ['Gm7',  'Cm7',  'D7',  'Ebmaj7'] },

  // Key: C minor
  { key: 'Cm', mood: 'brooding',  chords: ['Cm',   'Ab',   'Eb',  'Bb'] },
  { key: 'Cm', mood: 'ambient',   chords: ['Cm7',  'F7',   'Bbmaj7','Ebmaj7'] },

  // Key: F minor
  { key: 'Fm', mood: 'moody',    chords: ['Fm',   'Db',   'Ab',  'Eb']   },
  { key: 'Fm', mood: 'soulful',  chords: ['Fm7',  'Bb7',  'Ebmaj7','Abmaj7'] },

  // Key: Bb minor
  { key: 'Bbm', mood: 'intense',  chords: ['Bbm',  'Gb',   'Db',  'Ab']   },
  { key: 'Bbm', mood: 'warm',     chords: ['Bbm7', 'Eb7',  'Abmaj7','Dbmaj7'] },

  // Key: Eb minor
  { key: 'Ebm', mood: 'dark',     chords: ['Ebm',  'B',    'Fm',  'Cm']   },
  { key: 'Ebm', mood: 'brooding', chords: ['Ebm7', 'Ab7',  'Cm7', 'Fm7']  },

  // (Add these entries into your existing presetProgressions array)

// Key: C major – Pop/Rock
{ key: 'C', mood: 'upbeat',     chords: ['C',    'F',   'Am',  'G']    }, // I–IV–vi–V
{ key: 'C', mood: 'gospel',     chords: ['C',    'Em',  'Fmaj7','G']   }, // I–iii–IV–V
{ key: 'C', mood: 'reggae',     chords: ['Cmaj7','Gmaj7','Am7','Fmaj7'] }, // Imaj7–Vmaj7–vi7–IVmaj7

// Key: G major – Country/Folk
{ key: 'G', mood: 'country',    chords: ['G',    'C',   'D',   'Em']   }, // I–IV–V–vi
{ key: 'G', mood: 'folk',       chords: ['G',    'Em',  'C',   'D']    }, // I–vi–IV–V

// Key: D major – EDM/Trance‐style
{ key: 'D', mood: 'energetic',   chords: ['D',    'Bm',  'G',   'A']    }, // I–vi–IV–V (common EDM)
{ key: 'D', mood: 'uplifting2',  chords: ['D',    'A',   'G',   'Bm']   }, // I–V–IV–vi

// Key: A major – Punk/Rock
{ key: 'A', mood: 'punk',       chords: ['A',    'D',   'E',   'F#m']  }, // I–IV–V–vi
{ key: 'A', mood: 'anthem',     chords: ['A',    'E',   'D',   'F#m']  }, // I–V–IV–vi

// Key: E major – Bluesy/Rock
{ key: 'E', mood: 'bluesy',     chords: ['E7',   'A7',  'B7',  'E7']   }, // I7–IV7–V7–I7 (12‑bar outcome)
{ key: 'E', mood: 'indié',      chords: ['E',    'C#m', 'A',   'B']    }, // I–iii–IV–V

// Key: B major – R&B
{ key: 'B', mood: 'rnb',        chords: ['Bmaj7','F#m7','G#m7','Emaj7']}, // Imaj7–vi7–vii7–IVmaj7
{ key: 'B', mood: 'dance',      chords: ['B',    'E',   'F#',  'G#m']  }, // I–IV–V–vi

// Key: F# major – Latin/Reggaeton
{ key: 'F#', mood: 'latin',      chords: ['F#m',  'Dmaj7','E',  'C#m']  }, // vi–IVmaj7–V–iii
{ key: 'F#', mood: 'reggaeton',  chords: ['F#m7', 'B7',  'Emaj7','C#m7']}, // vi7–II7–Vmaj7–iii7

// Key: C# major – Chillwave
{ key: 'C#', mood: 'chillwave', chords: ['C#m7', 'G#m7','Amaj7','Emaj7']}, // vi7–iii7–IVmaj7–Imaj7
{ key: 'C#', mood: 'dream',     chords: ['C#maj7','F#m7','G#m7','Bmaj7']}, // Imaj7–iv7–vii7–Vmaj7

// Key: F major – Soul/Neo‑Soul
{ key: 'F', mood: 'neo-soul',    chords: ['Fmaj7','Gm7', 'Am7','Bbmaj7']}, // Imaj7–ii7–iii7–IVmaj7
{ key: 'F', mood: 'soul2',       chords: ['Fm7',  'Bb7', 'Ebmaj7','Abmaj7']}, // i7–IV7–VIImaj7–IIImaj7 (minor feel)

// Key: Bb major – Jazz Standards
{ key: 'Bb', mood: 'swing',      chords: ['Bbmaj7','Gm7','Cm7','F7']  }, // Imaj7–vi7–ii7–V7
{ key: 'Bb', mood: 'bossa',      chords: ['Bbmaj7','Ebmaj7','F7','Gm7']}, // Imaj7–IVmaj7–V7–vi7

// Key: Eb major – Disco
{ key: 'Eb', mood: 'disco',      chords: ['Eb',   'Ab',  'Bb',  'Gm']   }, // I–IV–V–vi
{ key: 'Eb', mood: 'funk',       chords: ['Eb7',  'Ab7', 'Bb7', 'Eb7'] }, // I7–IV7–V7–I7

// Key: Ab major – Funk/R&B
{ key: 'Ab', mood: 'funk2',      chords: ['Ab',   'Db',  'Eb',  'Fm']   }, // I–IV–V–vi
{ key: 'Ab', mood: 'smooth2',    chords: ['Abmaj7','Bbm7','Cm7','Dbmaj7']}, // Imaj7–ii7–iii7–IVmaj7

// Key: Db major – Jazz Fusion
{ key: 'Db', mood: 'fusion',     chords: ['Dbmaj7','Gbm7','Abm7','Cbmaj7']}, // Imaj7–ivm7–vm7–VIImaj7
{ key: 'Db', mood: 'chill2',     chords: ['Dbm7','Gb7','Bmaj7','F#maj7']}, // im7–IV7–VIImaj7–Vmaj7 (minor feel)

// Key: Gb major – Electronic
{ key: 'Gb', mood: 'edm',        chords: ['Gb',   'Ebm', 'Db',  'Bbm']  }, // I–vi–IV–ii
{ key: 'Gb', mood: 'darkwave',   chords: ['Gbm7', 'Bmaj7','Dbm7','Ebm7']}, // im7–Vmaj7–vm7–viim7

// Key: B major – Trap/Rap
{ key: 'B', mood: 'trap',        chords: ['B',    'E',   'F#',  'G#m']  }, // I–IV–V–vi
{ key: 'B', mood: 'vaporwave',   chords: ['Bmaj7','D#m7','G#m7','F#7']}, // Imaj7–iiim7–viiim7–V7

// Minor Keys

// Key: A minor – Acoustic/Indie
{ key: 'Am', mood: 'indie',      chords: ['Am',   'C',   'G',   'F']    }, // vi–I–V–IV (relative major feel)
{ key: 'Am', mood: 'folk2',      chords: ['Am7',  'Dm7', 'G7',  'Cmaj7']}, // i7–iv7–V7–IIImaj7

// Key: E minor – EDM/Trance
{ key: 'Em', mood: 'trance',     chords: ['Em',   'C',   'G',   'D']    }, // i–VI–III–VII
{ key: 'Em', mood: 'melancholy', chords: ['Em7',  'B7',  'Cmaj7','Gmaj7']}, // i7–V7–VImaj7–IIImaj7

// Key: B minor – Metal/Rock
{ key: 'Bm', mood: 'metal',      chords: ['Bm',   'G',   'D',   'F#']   }, // i–VI–III–V
{ key: 'Bm', mood: 'rock2',      chords: ['Bm7',  'Em7', 'A7',  'Dmaj7']}, // i7–iv7–VII7–IIImaj7

// Key: F# minor – Experimental
{ key: 'F#m', mood: 'ambient2',  chords: ['F#m',  'Dmaj7','Emaj7','C#m'] }, // i–VImaj7–VIImaj7–iii
{ key: 'F#m', mood: 'brooding2', chords: ['F#m7', 'B7',  'Emaj7','Amaj7']}, // i7–iv7–VIImaj7–IIImaj7

// Key: C# minor – Neo‐Soul
{ key: 'C#m', mood: 'neosoul2',  chords: ['C#m7', 'F#m7','G#m7','Bmaj7']}, // i7–iv7–v7–VIImaj7
{ key: 'C#m', mood: 'moody2',    chords: ['C#m',  'A',   'E',   'B']    }, // i–VI–III–VII

// Key: G# minor – Darkwave
{ key: 'G#m', mood: 'darkwave2', chords: ['G#m',  'E',   'B',   'F#']   }, // i–VI–III–VII
{ key: 'G#m', mood: 'jazz2',     chords: ['G#m7', 'C#7', 'F#maj7','Bmaj7']}, // i7–IV7–VIImaj7–IIImaj7

// Key: D minor – Cinematic
{ key: 'Dm', mood: 'cinematic',  chords: ['Dm',   'Bb',  'F',   'C']    }, // i–VI–III–VII
{ key: 'Dm', mood: 'vintage',    chords: ['Dm7',  'Gm7', 'C7',  'Fmaj7']}, // i7–iv7–V7–IIImaj7

// Key: G minor – Fusion
{ key: 'Gm', mood: 'fusion2',    chords: ['Gm7',  'Cm7', 'F7',  'Bbmaj7']}, // i7–iv7–V7–IIImaj7
{ key: 'Gm', mood: 'dark2',      chords: ['Gm',   'Eb',  'Bb',  'F']    }, // i–VI–III–VII

// Key: C minor – Trap/Rap
{ key: 'Cm', mood: 'trap2',      chords: ['Cm',   'Ab',  'Eb',  'Bb']   }, // i–VI–III–VII
{ key: 'Cm', mood: 'ambient3',   chords: ['Cm7',  'Fm7', 'Bb7', 'Ebmaj7']}, // i7–iv7–VII7–IIImaj7

// Key: F minor – Alternative
{ key: 'Fm', mood: 'alt',        chords: ['Fm',   'Db',  'Ab',  'Eb']   }, // i–VI–III–VII
{ key: 'Fm', mood: 'soul2',      chords: ['Fm7',  'Bbm7','Eb7', 'Abmaj7']}, // i7–iv7–V7–IIImaj7

// Key: Bb minor – Gothic
{ key: 'Bbm', mood: 'gothic',    chords: ['Bbm',  'Gb',  'Db',  'Ab']   }, // i–VI–III–VII
{ key: 'Bbm', mood: 'brooding3', chords: ['Bbm7', 'Eb7', 'Abmaj7','Dbmaj7']}, // i7–iv7–V7–IIImaj7

// Key: Eb minor – Experimental
{ key: 'Ebm', mood: 'glitch',    chords: ['Ebm',  'B',   'Fm',  'Cm']   }, // i–VI–III–VII
{ key: 'Ebm', mood: 'ambient4',  chords: ['Ebm7', 'Ab7', 'Cm7', 'Fm7'] }, // i7–iv7–V7–IIImaj7

];

export const getRandomProgression = ({
  key = null,
  mood = null,
  startChord = null,
} = {}) => {
  let pool = presetProgressions;
  if (key) pool = pool.filter((p) => p.key === key);
  if (mood) pool = pool.filter((p) => p.mood === mood);
  if (startChord) pool = pool.filter((p) => p.chords[0] === startChord);
  if (pool.length === 0) pool = presetProgressions;
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx].chords;
};
