import { mapNotesMap } from './NotesMap';

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


test('mapToMap_with_fallback', () => {

  const sqrt = (x: number) => ((x >= 0) ? Math.sqrt(x) : null);

  expect(mapNotesMap({
    C       : 1,
    C_sharp : 4,
    D       : 9,
    E_flat  : 16,
    E       : 25,
    F       : 36,
    F_sharp : -151541,
    G       : 64,
    G_sharp : 81,
    A       : 100,
    B_flat  : 121,
    B       : 144,
  }, sqrt, -1)
  ).toEqual({
    C       : 1,
    C_sharp : 2,
    D       : 3,
    E_flat  : 4,
    E       : 5,
    F       : 6,
    F_sharp : -1,
    G       : 8,
    G_sharp : 9,
    A       : 10,
    B_flat  : 11,
    B       : 12,
  });
});
