export enum NoteAlter {
  NONE,
  FLAT = "b",  // ♭
  SHARP = "#", // ♯
}

export enum Notes {
  C = "C",
  C_sharp = "C_sharp",
  D = "D",
  E_flat = "E_flat",
  E = "E",
  F = "F",
  F_sharp = "F_sharp",
  G = "G",
  G_sharp = "G_sharp",
  A = "A",
  B_flat = "B_flat",
  B = "B",
};

/**
 * Notes index relative to 'A'.
 * G_sharp is -1, A is 0, B_flat is 1, etc.
 */
export enum NotesIndex {
  C =       -9,
  C_sharp = -8,
  D =       -7,
  E_flat =  -6,
  E =       -5,
  F =       -4,
  F_sharp = -3,
  G =       -2,
  G_sharp = -1,
  A =        0,
  B_flat =   1,
  B =        2,
};


export enum FifthsIndex {
  C =       0,
  G =       1,
  A =       2,
  D =       3,
  E =       4,
  B =       5,
  F_sharp = 6,
  C_sharp = 7,
  G_sharp = 8,
  E_flat =  9,
  B_flat =  10,
  F =       11,
};


 export enum PitchInterval {
  UNISON  =  0,
  MIN2    =  1,
  MAJ2    =  2,
  MIN3    =  3,
  MAJ3    =  4,
  FOURTH  =  5,
  TRITONE =  6,
  FIFTH   =  7,
  MIN6    =  8,
  MAJ6    =  9,
  MIN7    = 10,
  MAJ7    = 11,
  OCTAVE  = 12,
};
