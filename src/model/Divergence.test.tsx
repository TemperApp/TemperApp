import {
  cpExp5thStrToNumber,
  csExp3rdStrToNumber,
} from './Divergence';

test('cpExp5thStrToNumber_integer_denominator', () => {
  expect(cpExp5thStrToNumber("-1/12")).toEqual(-1);
  expect(cpExp5thStrToNumber("-1/6")).toEqual(-2);
  expect(cpExp5thStrToNumber("-1/3")).toEqual(-4);
  expect(cpExp5thStrToNumber("-1/2")).toEqual(-6);
  expect(cpExp5thStrToNumber("-1/1")).toEqual(-12);
  expect(cpExp5thStrToNumber("-1/24")).toEqual(-0.5);
});

test('cpExp5thStrToNumber_zero', () => {
  expect(cpExp5thStrToNumber("0")).toEqual(0);
  expect(cpExp5thStrToNumber("-0")).toEqual(0);
  expect(cpExp5thStrToNumber("+0")).toEqual(0);
  expect(cpExp5thStrToNumber("00")).toEqual(0);
});

test('cpExp5thStrToNumber_sign', () => {
  expect(cpExp5thStrToNumber("-1/12")).toEqual(-1);
  expect(cpExp5thStrToNumber("1/12")).toEqual(-1);
  expect(cpExp5thStrToNumber("+1/12")).toEqual(1);
});

test('cpExp5thStrToNumber_float_denominator', () => {
  expect(cpExp5thStrToNumber("-1/4.36")).toBeCloseTo(-2.75);
  expect(cpExp5thStrToNumber("-1/13.19")).toBeCloseTo(-0.91);
  expect(cpExp5thStrToNumber("-1/6.52")).toBeCloseTo(-1.84);
});

test('cpExp5thStrToNumber_non_unit_numerator', () => {
  expect(cpExp5thStrToNumber("-2/6")).toBeCloseTo(-4);
  expect(cpExp5thStrToNumber("-2/4.36")).toBeCloseTo(-5.5);
  expect(cpExp5thStrToNumber("-12/72")).toBeCloseTo(-2);
});
/*
test('cpExp5thStrToNumber_invalid_input', () => {
  expect(cpExp5thStrToNumber("-1//6")).toBeNull();
  expect(cpExp5thStrToNumber("-1/")).toBeNull();
  expect(cpExp5thStrToNumber("-/1")).toBeNull();
  expect(cpExp5thStrToNumber("/1")).toBeNull();
});
*/

test('csExp3rdStrToNumber_integer_denominator', () => {
  expect(csExp3rdStrToNumber("+3/11")).toEqual(3);
  expect(csExp3rdStrToNumber("+7/11")).toEqual(7);
  expect(csExp3rdStrToNumber("+11/11")).toEqual(11);
  expect(csExp3rdStrToNumber("+21/11")).toEqual(21);
});

test('csExp3rdStrToNumber_zero', () => {
  expect(csExp3rdStrToNumber("0")).toEqual(0);
  expect(csExp3rdStrToNumber("-0")).toEqual(0);
  expect(csExp3rdStrToNumber("+0")).toEqual(0);
  expect(csExp3rdStrToNumber("00")).toEqual(0);
});

test('csExp3rdStrToNumber_sign', () => {
  expect(csExp3rdStrToNumber("+1/11")).toEqual(1);
  expect(csExp3rdStrToNumber("1/11")).toEqual(1);
  expect(csExp3rdStrToNumber("-1/11")).toEqual(-1);
});
/*
test('csExp3rdStrToNumber_invalid_input', () => {
  expect(csExp3rdStrToNumber("-1//11")).toBeNull();
  expect(cpExp5thStrToNumber("-1/")).toBeNull();
  expect(cpExp5thStrToNumber("-/1")).toBeNull();
  expect(cpExp5thStrToNumber("/1")).toBeNull();
});
*/