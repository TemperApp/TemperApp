import { magnet } from "./maths";

test('magnet_outbounds', () => {
  expect(magnet([1, 2, 3], -1.47)).toEqual(1);
  expect(magnet([1, 2, 3], 0.23)).toEqual(1);
  expect(magnet([1, 2, 3], 3.12)).toEqual(3);
  expect(magnet([1, 2, 3], 4.52)).toEqual(3);
});

test('magnet_inbounds', () => {
  expect(magnet([1, 2, 3], 1.21)).toEqual(1);
  expect(magnet([1, 2, 3], 2.49)).toEqual(2);
  expect(magnet([1, 2, 3], 2.76)).toEqual(3);
});

test('magnet_negative', () => {
  expect(magnet([-3, -2, -1, 0, 1, 2, 3], -0.35)).toEqual(0);
  expect(magnet([-3, -2, -1, 0, 1, 2, 3], -1.21)).toEqual(-1);
  expect(magnet([-3, -2, -1, 0, 1, 2, 3], -2.43)).toEqual(-2);
  expect(magnet([-3, -2, -1, 0, 1, 2, 3], -2.92)).toEqual(-3);
  expect(magnet([-3, -2, -1, 0, 1, 2, 3], -3.25)).toEqual(-3);
  expect(magnet([-3, -2, -1, 0, 1, 2, 3], -12.2)).toEqual(-3);
});

test('magnet_equal', () => {
  expect(magnet([2, 4, 6, 8, 10], 4)).toEqual(4);
});

test('magnet_right_in_the_middle', () => {
  expect(magnet([2, 4, 6, 8, 10], 7)).toEqual(6);
});

test('magnet_duplicates_in_set', () => {
  expect(magnet([10, 20, 30, 30, 40, 50, 60], 24)).toEqual(20);
  expect(magnet([10, 20, 30, 30, 40, 50, 60], 26)).toEqual(30);
  expect(magnet([10, 20, 30, 30, 40, 50, 60], 30)).toEqual(30);
  expect(magnet([10, 20, 30, 30, 40, 50, 60], 32)).toEqual(30);
  expect(magnet([10, 20, 30, 30, 40, 50, 60], 36)).toEqual(40);
});

test('magnet_non_sorted', () => {
  expect(magnet([1, -3, 2, 0, -2, -1, 3], -0.35)).toEqual(0);
  expect(magnet([3, -2, 2, 0, -3, 1, -1], -1.21)).toEqual(-1);
  expect(magnet([1, -2, 2, 0, -3, -1, 3], -2.43)).toEqual(-2);
  expect(magnet([2, 1, -3, -1, 0, -2, 3], -2.92)).toEqual(-3);
  expect(magnet([0, -2, 1, 3, -3, 2, -1], -3.25)).toEqual(-3);
  expect(magnet([0, 1, -2, -3, -1, 2, 3], -12.2)).toEqual(-3);
});

test('magnet_misc', () => {
  expect(magnet([-96, -48, -24, -12, 0], -53)).toEqual(-48);
  expect(magnet([-96, -48, -24, -12, 0], -76)).toEqual(-96);
  expect(magnet([-96, -48, -24, -12, 0], -24)).toEqual(-24);
  expect(magnet([-96, -48, -24, -12, 0], -10)).toEqual(-12);
  expect(magnet([-96, -48, -24, -12, 0], -5)).toEqual(0);
});
