import { processAcousticBeat } from './AcousticBeat';
import { Notes } from './Note/enums';
import Note from './Note/Note';


const meantone14gsebDeviation = {
  C:        10.263,
  C_sharp: -13.686,
  D:         3.420,
  E_flat:   20.528,
  E:        -3.422,
  F:        13.685,
  F_sharp: -10.265,
  G:         6.842,
  G_sharp: -17.108,
  A:         0.000,
  B_flat:   17.106,
  B:        -6.843,
};


test('processAcousticBeat_fifth_440_equal', () => {
  expect(processAcousticBeat(
    Note.create(Notes.E, 4),
    Note.create(Notes.B, 4),
    440
  )).toEqualCloseTo({
    carrierFreq: 988.32,
    modulationFreq: 1.12
  }, 2);
});
  
test('processAcousticBeat_maj3_440_equal', () => {
  expect(processAcousticBeat(
    Note.create(Notes.C, 4),
    Note.create(Notes.E, 4),
    440
  )).toEqualCloseTo({
    carrierFreq: 1313.32,
    modulationFreq: 10.38
  }, 2);
});
  
test('processAcousticBeat_fourth_440_equal', () => {
  expect(processAcousticBeat(
    Note.create(Notes.A, 3),
    Note.create(Notes.D, 4),
    440
  )).toEqualCloseTo({
    carrierFreq: 880.50,
    modulationFreq: 0.99
  }, 2);
});


test('processAcousticBeat_432_equal', () => {
  expect(processAcousticBeat(
    Note.create(Notes.E, 4),
    Note.create(Notes.B, 4),
    432
  )).toEqualCloseTo({
    carrierFreq: 970.36,
    modulationFreq: 1.10
  }, 2);
  
  expect(processAcousticBeat(
    Note.create(Notes.C, 4),
    Note.create(Notes.E, 4),
    432
  )).toEqualCloseTo({
    carrierFreq: 1289.44,
    modulationFreq: 10.19
  }, 2);
  
  expect(processAcousticBeat(
    Note.create(Notes.A, 3),
    Note.create(Notes.D, 4),
    432
  )).toEqualCloseTo({
    carrierFreq: 864.49,
    modulationFreq: 0.98
  }, 2);
});



test('processAcousticBeat_440_meantone-1-4-g#eb', () => {
  expect(processAcousticBeat(
    Note.create(Notes.G_sharp, 3),
    Note.create(Notes.E_flat, 4),
    440, meantone14gsebDeviation
  )).toEqualCloseTo({
    carrierFreq: 623.25,
    modulationFreq: 12.84
  }, 2);
  
  expect(processAcousticBeat(
    Note.create(Notes.C_sharp, 4),
    Note.create(Notes.F, 4),
    440, meantone14gsebDeviation
  )).toEqualCloseTo({
    carrierFreq: 1391.50,
    modulationFreq: 33.00
  }, 2);
  
  expect(processAcousticBeat(
    Note.create(Notes.B_flat, 4),
    Note.create(Notes.D, 5),
    440, meantone14gsebDeviation
  )).toEqualCloseTo({
    carrierFreq: 2353.96,
    modulationFreq: 0.00
  }, 2);
});
