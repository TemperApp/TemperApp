import { Notes, PitchInterval } from './enums';
import Note from './Note';

test('Note.parse_ASPN_chars_octaves', () => {
  expect(Note.parse("E0" )).toEqual(Note.create(Notes.E, 0));
  expect(Note.parse("F1" )).toEqual(Note.create(Notes.F, 1));
  expect(Note.parse("G2" )).toEqual(Note.create(Notes.G, 2));
  expect(Note.parse("A3" )).toEqual(Note.create(Notes.A, 3));
  expect(Note.parse("B4" )).toEqual(Note.create(Notes.B, 4));
  expect(Note.parse("C5" )).toEqual(Note.create(Notes.C, 5));
  expect(Note.parse("D6" )).toEqual(Note.create(Notes.D, 6));
  expect(Note.parse("E7" )).toEqual(Note.create(Notes.E, 7));
  expect(Note.parse("F8" )).toEqual(Note.create(Notes.F, 8));
  expect(Note.parse("G9" )).toEqual(Note.create(Notes.G, 9));
  expect(Note.parse("A10")).toEqual(Note.create(Notes.A, 10));
});

test('Note.parse_ASPN_alter', () => {
  expect(Note.parse("B3" )).toEqual(Note.create(Notes.B, 3));
  expect(Note.parse("C#3")).toEqual(Note.create(Notes.C_sharp, 3));
  expect(Note.parse("Bb3")).toEqual(Note.create(Notes.B_flat, 3));
  expect(Note.parse("E3" )).toEqual(Note.create(Notes.E, 3));
  expect(Note.parse("F#3")).toEqual(Note.create(Notes.F_sharp, 3));
  expect(Note.parse("E♭3")).toEqual(Note.create(Notes.E_flat, 3));
});

test('Note.parse_ASPN_no_octave', () => {
  expect(Note.parse("B" )).toEqual(Note.create(Notes.B, 4));
  expect(Note.parse("C#")).toEqual(Note.create(Notes.C_sharp, 4));
  expect(Note.parse("Bb")).toEqual(Note.create(Notes.B_flat, 4));
  expect(Note.parse("E" )).toEqual(Note.create(Notes.E, 4));
  expect(Note.parse("F#")).toEqual(Note.create(Notes.F_sharp, 4));
  expect(Note.parse("Eb")).toEqual(Note.create(Notes.E_flat, 4));
});


test('Note.parse_syllables_chars_octaves', () => {
  expect(Note.parse("mi-1")).toEqual(Note.create(Notes.E, 0));
  expect(Note.parse("Fa0" )).toEqual(Note.create(Notes.F, 1));
  expect(Note.parse("Sol1")).toEqual(Note.create(Notes.G, 2));
  expect(Note.parse("LA2" )).toEqual(Note.create(Notes.A, 3));
  expect(Note.parse("sI3" )).toEqual(Note.create(Notes.B, 4));
  expect(Note.parse("Do4" )).toEqual(Note.create(Notes.C, 5));
  expect(Note.parse("ré5" )).toEqual(Note.create(Notes.D, 6));
  expect(Note.parse("re5" )).toEqual(Note.create(Notes.D, 6));
  expect(Note.parse("Mi6" )).toEqual(Note.create(Notes.E, 7));
  expect(Note.parse("FA7" )).toEqual(Note.create(Notes.F, 8));
  expect(Note.parse("sOl8")).toEqual(Note.create(Notes.G, 9));
  expect(Note.parse("lA9" )).toEqual(Note.create(Notes.A, 10));
});

test('Note.parse_syllables_alter', () => {
  expect(Note.parse("si2" )).toEqual(Note.create(Notes.B, 3));
  expect(Note.parse("do#2")).toEqual(Note.create(Notes.C_sharp, 3));
  expect(Note.parse("sib2")).toEqual(Note.create(Notes.B_flat, 3));
  expect(Note.parse("mi2" )).toEqual(Note.create(Notes.E, 3));
  expect(Note.parse("fa♯2")).toEqual(Note.create(Notes.F_sharp, 3));
  expect(Note.parse("mi♭2")).toEqual(Note.create(Notes.E_flat, 3));
});

test('Note.parse_syllables_no_octave', () => {
  expect(Note.parse("si" )).toEqual(Note.create(Notes.B, 4));
  expect(Note.parse("do#")).toEqual(Note.create(Notes.C_sharp, 4));
  expect(Note.parse("sib")).toEqual(Note.create(Notes.B_flat, 4));
  expect(Note.parse("mi" )).toEqual(Note.create(Notes.E, 4));
  expect(Note.parse("fa#")).toEqual(Note.create(Notes.F_sharp, 4));
  expect(Note.parse("mib")).toEqual(Note.create(Notes.E_flat, 4));
});

test('Note.isInterval_major_third_same_octave', () => {
  expect(Note.isInterval(
    Note.create(Notes.C, 4),
    Note.create(Notes.E, 4),
    PitchInterval.MAJ3
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.F_sharp, 4),
    Note.create(Notes.B_flat, 4),
    PitchInterval.MAJ3
  )).toBe(true);
  
  expect(Note.isInterval(
    Note.create(Notes.F_sharp, 4),
    Note.create(Notes.B, 4),
    PitchInterval.MAJ3
  )).toBe(false);
  expect(Note.isInterval(
    Note.create(Notes.F_sharp, 4),
    Note.create(Notes.A, 4),
    PitchInterval.MAJ3
  )).toBe(false);
});

test('Note.isInterval_major_third_different_octave', () => {
  expect(Note.isInterval(
    Note.create(Notes.B, 3),
    Note.create(Notes.E_flat, 4),
    PitchInterval.MAJ3
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.C_sharp, 4),
    PitchInterval.MAJ3
  )).toBe(true);
  
  expect(Note.isInterval(
    Note.create(Notes.A, 4),
    Note.create(Notes.C_sharp, 4),
    PitchInterval.MAJ3
  )).toBe(false);
  expect(Note.isInterval(
    Note.create(Notes.B, 3),
    Note.create(Notes.D, 4),
    PitchInterval.MAJ3
  )).toBe(false);
});


test('Note.isInterval_all_interval', () => {
  expect(Note.isInterval(
    Note.create(Notes.B, 3),
    Note.create(Notes.B, 3),
    PitchInterval.UNISON
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.B, 3),
    Note.create(Notes.C, 4),
    PitchInterval.UNISON
  )).toBe(false);
  
  expect(Note.isInterval(
    Note.create(Notes.B, 3),
    Note.create(Notes.C, 4),
    PitchInterval.MIN2
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.B, 3),
    Note.create(Notes.C_sharp, 4),
    PitchInterval.MIN2
  )).toBe(false);
  
  expect(Note.isInterval(
    Note.create(Notes.B, 3),
    Note.create(Notes.C_sharp, 4),
    PitchInterval.MAJ2
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.B_flat, 3),
    Note.create(Notes.C_sharp, 4),
    PitchInterval.MAJ2
  )).toBe(false);
  
  expect(Note.isInterval(
    Note.create(Notes.B_flat, 3),
    Note.create(Notes.C_sharp, 4),
    PitchInterval.MIN3
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.C_sharp, 4),
    PitchInterval.MIN3
  )).toBe(false);
  
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.C_sharp, 4),
    PitchInterval.MAJ3
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.D, 4),
    PitchInterval.MAJ3
  )).toBe(false);
  
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.D, 4),
    PitchInterval.FOURTH
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.E_flat, 4),
    PitchInterval.FOURTH
  )).toBe(false);
  
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.E_flat, 4),
    PitchInterval.TRITONE
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.E, 4),
    PitchInterval.TRITONE
  )).toBe(false);
  
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.E, 4),
    PitchInterval.FIFTH
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.F, 4),
    PitchInterval.FIFTH
  )).toBe(false);

  expect(Note.isInterval(
    Note.create(Notes.A, 3),
    Note.create(Notes.F, 4),
    PitchInterval.MIN6
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.G_sharp, 3),
    Note.create(Notes.F, 4),
    PitchInterval.MIN6
  )).toBe(false);

  expect(Note.isInterval(
    Note.create(Notes.G_sharp, 3),
    Note.create(Notes.F, 4),
    PitchInterval.MAJ6
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.G, 3),
    Note.create(Notes.F, 4),
    PitchInterval.MAJ6
  )).toBe(false);

  expect(Note.isInterval(
    Note.create(Notes.G, 3),
    Note.create(Notes.F, 4),
    PitchInterval.MIN7
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.G, 3),
    Note.create(Notes.F_sharp, 4),
    PitchInterval.MIN7
  )).toBe(false);

  expect(Note.isInterval(
    Note.create(Notes.G, 3),
    Note.create(Notes.F_sharp, 4),
    PitchInterval.MAJ7
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.G, 3),
    Note.create(Notes.G, 4),
    PitchInterval.MAJ7
  )).toBe(false);

  expect(Note.isInterval(
    Note.create(Notes.G, 3),
    Note.create(Notes.G, 4),
    PitchInterval.OCTAVE
  )).toBe(true);
  expect(Note.isInterval(
    Note.create(Notes.G, 3),
    Note.create(Notes.G_sharp, 4),
    PitchInterval.OCTAVE
  )).toBe(false);
  
});
