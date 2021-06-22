import Note, { NoteAlter } from './Note';

test('Note.parse_ASPN_chars_octaves', () => {
  expect(Note.parse("E0" )).toEqual(Note.create('E', NoteAlter.NONE, 0));
  expect(Note.parse("F1" )).toEqual(Note.create('F', NoteAlter.NONE, 1));
  expect(Note.parse("G2" )).toEqual(Note.create('G', NoteAlter.NONE, 2));
  expect(Note.parse("A3" )).toEqual(Note.create('A', NoteAlter.NONE, 3));
  expect(Note.parse("B4" )).toEqual(Note.create('B', NoteAlter.NONE, 4));
  expect(Note.parse("C5" )).toEqual(Note.create('C', NoteAlter.NONE, 5));
  expect(Note.parse("D6" )).toEqual(Note.create('D', NoteAlter.NONE, 6));
  expect(Note.parse("E7" )).toEqual(Note.create('E', NoteAlter.NONE, 7));
  expect(Note.parse("F8" )).toEqual(Note.create('F', NoteAlter.NONE, 8));
  expect(Note.parse("G9" )).toEqual(Note.create('G', NoteAlter.NONE, 9));
  expect(Note.parse("A10")).toEqual(Note.create('A', NoteAlter.NONE, 10));
});

test('Note.parse_ASPN_alter', () => {
  expect(Note.parse("B3" )).toEqual(Note.create('B', NoteAlter.NONE, 3));
  expect(Note.parse("C#3")).toEqual(Note.create('C', NoteAlter.SHARP, 3));
  expect(Note.parse("Bb3")).toEqual(Note.create('B', NoteAlter.FLAT, 3));
  expect(Note.parse("E3" )).toEqual(Note.create('E', NoteAlter.NONE, 3));
  expect(Note.parse("F#3")).toEqual(Note.create('F', NoteAlter.SHARP, 3));
  expect(Note.parse("A♭3")).toEqual(Note.create('A', NoteAlter.FLAT, 3));
});

test('Note.parse_ASPN_no_octave', () => {
  expect(Note.parse("B" )).toEqual(Note.create('B', NoteAlter.NONE, 4));
  expect(Note.parse("C#")).toEqual(Note.create('C', NoteAlter.SHARP, 4));
  expect(Note.parse("Bb")).toEqual(Note.create('B', NoteAlter.FLAT, 4));
  expect(Note.parse("E" )).toEqual(Note.create('E', NoteAlter.NONE, 4));
  expect(Note.parse("F#")).toEqual(Note.create('F', NoteAlter.SHARP, 4));
  expect(Note.parse("Ab")).toEqual(Note.create('A', NoteAlter.FLAT, 4));
});


test('Note.parse_syllables_chars_octaves', () => {
  expect(Note.parse("mi-1")).toEqual(Note.create('E', NoteAlter.NONE, 0));
  expect(Note.parse("Fa0" )).toEqual(Note.create('F', NoteAlter.NONE, 1));
  expect(Note.parse("Sol1")).toEqual(Note.create('G', NoteAlter.NONE, 2));
  expect(Note.parse("LA2" )).toEqual(Note.create('A', NoteAlter.NONE, 3));
  expect(Note.parse("sI3" )).toEqual(Note.create('B', NoteAlter.NONE, 4));
  expect(Note.parse("Do4" )).toEqual(Note.create('C', NoteAlter.NONE, 5));
  expect(Note.parse("ré5" )).toEqual(Note.create('D', NoteAlter.NONE, 6));
  expect(Note.parse("re5" )).toEqual(Note.create('D', NoteAlter.NONE, 6));
  expect(Note.parse("Mi6" )).toEqual(Note.create('E', NoteAlter.NONE, 7));
  expect(Note.parse("FA7" )).toEqual(Note.create('F', NoteAlter.NONE, 8));
  expect(Note.parse("sOl8")).toEqual(Note.create('G', NoteAlter.NONE, 9));
  expect(Note.parse("lA9" )).toEqual(Note.create('A', NoteAlter.NONE, 10));
});

test('Note.parse_syllables_alter', () => {
  expect(Note.parse("si2" )).toEqual(Note.create('B', NoteAlter.NONE, 3));
  expect(Note.parse("do#2")).toEqual(Note.create('C', NoteAlter.SHARP, 3));
  expect(Note.parse("sib2")).toEqual(Note.create('B', NoteAlter.FLAT, 3));
  expect(Note.parse("mi2" )).toEqual(Note.create('E', NoteAlter.NONE, 3));
  expect(Note.parse("fa♯2")).toEqual(Note.create('F', NoteAlter.SHARP, 3));
  expect(Note.parse("la♭2")).toEqual(Note.create('A', NoteAlter.FLAT, 3));
});

test('Note.parse_syllables_no_octave', () => {
  expect(Note.parse("si" )).toEqual(Note.create('B', NoteAlter.NONE, 4));
  expect(Note.parse("do#")).toEqual(Note.create('C', NoteAlter.SHARP, 4));
  expect(Note.parse("sib")).toEqual(Note.create('B', NoteAlter.FLAT, 4));
  expect(Note.parse("mi" )).toEqual(Note.create('E', NoteAlter.NONE, 4));
  expect(Note.parse("fa#")).toEqual(Note.create('F', NoteAlter.SHARP, 4));
  expect(Note.parse("lab")).toEqual(Note.create('A', NoteAlter.FLAT, 4));
});
