import {
  cpExp5thStrToNumber,
  cpExp5thToCsExp5th,
  csExp3rdStrToNumber,
  formatCpExp5thStr,
  formatCsExp3rdStr,
  freqs4,
  isCpExp5thValid,
  isCsExp3rdValid,
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


test('formatCpExp5thStr', () => {
  expect(formatCpExp5thStr("-0")).toEqual("0");
  expect(formatCpExp5thStr("0")).toEqual("0");
  expect(formatCpExp5thStr("+0")).toEqual("0");
  expect(formatCpExp5thStr("-1/4.33")).toEqual("1/4.3");
  expect(formatCpExp5thStr("+1/12.768")).toEqual("+1/12.8");
  expect(formatCpExp5thStr("1/1.89")).toEqual("1/1.9");
  expect(formatCpExp5thStr("1/4.0")).toEqual("1/4");
  expect(formatCpExp5thStr("1/4")).toEqual("1/4");
  expect(formatCpExp5thStr("1/12.0")).toEqual("1/12");
  expect(formatCpExp5thStr("1/12.01")).toEqual("1/12.0");
  expect(formatCpExp5thStr("1/4.20")).toEqual("1/4.2");
});


test('isCpExp5thValid', () => {
  expect(isCpExp5thValid("-1/4.33")).toEqual(true);
  expect(isCpExp5thValid("1/12")).toEqual(true);
  expect(isCpExp5thValid("1/1.1")).toEqual(true);
  expect(isCpExp5thValid("+1/8.91")).toEqual(true);
  expect(isCpExp5thValid("0")).toEqual(true);
  expect(isCpExp5thValid("-0")).toEqual(true);
  expect(isCpExp5thValid("+0")).toEqual(true);
  expect(isCpExp5thValid("00")).toEqual(true);
  expect(isCpExp5thValid(" 4/67")).toEqual(true);
  expect(isCpExp5thValid("4")).toEqual(false);
  expect(isCpExp5thValid("45")).toEqual(false);
  
  
});


test('cpExp5thToCsExp5th', () => {
  expect(cpExp5thToCsExp5th("1/12")).toEqual("1/11");
  expect(cpExp5thToCsExp5th("-1/6")).toEqual("1/5.5");
  expect(cpExp5thToCsExp5th("+1/0.66")).toEqual("+1/0.6");
  expect(cpExp5thToCsExp5th("-1/4.36")).toEqual("1/4");
  expect(cpExp5thToCsExp5th("-1/6.52")).toEqual("1/6.0");
  expect(cpExp5thToCsExp5th("+1/13.19")).toEqual("+1/12.1");
  expect(cpExp5thToCsExp5th("+1/3.3")).toEqual("+1/3.0");
  expect(cpExp5thToCsExp5th("+1/6.61")).toEqual("+1/6.1");
  expect(cpExp5thToCsExp5th("0")).toEqual("0");
  expect(cpExp5thToCsExp5th("-1/5")).toEqual("1/4.6");
  expect(cpExp5thToCsExp5th("+1/4")).toEqual("+1/3.7");
  expect(cpExp5thToCsExp5th("-1/1")).toEqual("1/0.9");
});


test('isCsExp3rdValid', () => {
  expect(isCsExp3rdValid("-1/11")).toEqual(true);
  expect(isCsExp3rdValid("1/11")).toEqual(true);
  expect(isCsExp3rdValid("1/11")).toEqual(true);
  expect(isCsExp3rdValid("24/11")).toEqual(true);
  expect(isCsExp3rdValid("0")).toEqual(true);
  expect(isCsExp3rdValid("-0")).toEqual(true);
  expect(isCsExp3rdValid("+0")).toEqual(true);
  expect(isCsExp3rdValid("00")).toEqual(true);
  expect(isCsExp3rdValid("4")).toEqual(false);
  expect(isCsExp3rdValid("12/15")).toEqual(false);
});


test('csExp3rdStrToNumber', () => {
  expect(formatCsExp3rdStr("-0")).toEqual("0");
  expect(formatCsExp3rdStr("0")).toEqual("0");
  expect(formatCsExp3rdStr("+0")).toEqual("0");
  expect(formatCsExp3rdStr("+1/11")).toEqual("1/11");
  expect(formatCsExp3rdStr("1/11")).toEqual("1/11");
  expect(formatCsExp3rdStr("-1/11")).toEqual("-1/11");
});



test('freqs4_equal_temperament', () => {
  expect(freqs4()).toEqualCloseTo({
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
  expect(freqs4(440)).toEqualCloseTo({
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


test('freqs4_equal_temperament_when_not_440_Hz', () => {
  expect(freqs4(415)).toEqualCloseTo({
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
  expect(freqs4(440, {
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
  expect(freqs4(465, {
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
