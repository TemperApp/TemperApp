import { mapNotesMap } from '../../../model/Note/NotesMap';
import { frequencies4 } from './frequencies';

test('mapToMap_with_string', () => {
  expect(mapNotesMap("foo")
  ).toEqual({
    C       : "foo",
    C_sharp : "foo",
    D       : "foo",
    E_flat  : "foo",
    E       : "foo",
    F       : "foo",
    F_sharp : "foo",
    G       : "foo",
    G_sharp : "foo",
    A       : "foo",
    B_flat  : "foo",
    B       : "foo",
  });
});


test('mapToMap_with_number', () => {
  expect(mapNotesMap(-1)
  ).toEqual({
    C       : -1,
    C_sharp : -1,
    D       : -1,
    E_flat  : -1,
    E       : -1,
    F       : -1,
    F_sharp : -1,
    G       : -1,
    G_sharp : -1,
    A       : -1,
    B_flat  : -1,
    B       : -1,
  });
});


test('mapToMap_with_number_and_function', () => {
  expect(mapNotesMap(2, (x) => x*2)
  ).toEqual({
    C       : 4,
    C_sharp : 4,
    D       : 4,
    E_flat  : 4,
    E       : 4,
    F       : 4,
    F_sharp : 4,
    G       : 4,
    G_sharp : 4,
    A       : 4,
    B_flat  : 4,
    B       : 4,
  });
});


test('mapToMap_with_NotesMap_and_function', () => {
  expect(mapNotesMap({
    C       : 1,
    C_sharp : 2,
    D       : 3,
    E_flat  : 4,
    E       : 5,
    F       : 6,
    F_sharp : 7,
    G       : 8,
    G_sharp : 9,
    A       : 10,
    B_flat  : 11,
    B       : 12,
  }, (x) => x*3)
  ).toEqualCloseTo({
    C       : 3,
    C_sharp : 6,
    D       : 9,
    E_flat  : 12,
    E       : 15,
    F       : 18,
    F_sharp : 21,
    G       : 24,
    G_sharp : 27,
    A       : 30,
    B_flat  : 33,
    B       : 36,
  }, 1);
});


test('frequencies4_equal_temperament', () => {
  expect(frequencies4()).toEqualCloseTo({
    C       : 261.6,
    C_sharp : 277.2,
    D       : 293.7,
    E_flat  : 311.1,
    E       : 329.6,
    F       : 349.2,
    F_sharp : 370.0,
    G       : 392.0,
    G_sharp : 415.3,
    A       : 440.0,
    B_flat  : 466.2,
    B       : 493.9,
  }, 1);
  expect(frequencies4(440)).toEqualCloseTo({
    C       : 261.6,
    C_sharp : 277.2,
    D       : 293.7,
    E_flat  : 311.1,
    E       : 329.6,
    F       : 349.2,
    F_sharp : 370.0,
    G       : 392.0,
    G_sharp : 415.3,
    A       : 440.0,
    B_flat  : 466.2,
    B       : 493.9,
  }, 1);
});


test('frequencies4_equal_temperament_when_not_440_Hz', () => {
  expect(frequencies4(415)).toEqualCloseTo({
    C       : 246.8,
    C_sharp : 261.4,
    D       : 277.0,
    E_flat  : 293.4,
    E       : 310.9,
    F       : 329.4,
    F_sharp : 349.0,
    G       : 369.7,
    G_sharp : 391.7,
    A       : 415.0,
    B_flat  : 439.7,
    B       : 465.8,
  }, 1);
});


test('freq4_valloti', () => {
  expect(frequencies4(440, {
    C       :  5.865,
    C_sharp :  0.000,
    D       :  1.955,
    E_flat  :  3.910,
    E       : -1.955,
    F       :  7.820,
    F_sharp : -1.955,
    G       :  3.910,
    G_sharp :  1.955,
    A       :  0.000,
    B_flat  :  5.865,
    B       : -3.910,
  }))
  .toEqualCloseTo({
    C       : 262.5,
    C_sharp : 277.2,
    D       : 294.0,
    E_flat  : 311.8,
    E       : 329.3,
    F       : 350.8,
    F_sharp : 369.6,
    G       : 392.9,
    G_sharp : 415.8,
    A       : 440.0,
    B_flat  : 467.7,
    B       : 492.8,
  }, 1);
});


test('freq4_valloti_when_not_440_Hz', () => {
  expect(frequencies4(465, {
    C       :  5.865,
    C_sharp :  0.000,
    D       :  1.955,
    E_flat  :  3.910,
    E       : -1.955,
    F       :  7.820,
    F_sharp : -1.955,
    G       :  3.910,
    G_sharp :  1.955,
    A       :  0.000,
    B_flat  :  5.865,
    B       : -3.910,
  }))
  .toEqualCloseTo({
    C       : 277.4,
    C_sharp : 292.9,
    D       : 310.7,
    E_flat  : 329.5,
    E       : 348.0,
    F       : 370.7,
    F_sharp : 390.6,
    G       : 415.2,
    G_sharp : 439.4,
    A       : 465.0,
    B_flat  : 494.3,
    B       : 520.8,
  }, 1);
});


