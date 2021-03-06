// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Mock matchmedia
window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};


// Custom matchers

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualCloseTo: (
        expected: { [key: string]: any },
        numDigits: number
      ) => CustomMatcherResult;
    }
  }
}

expect.extend({
  toEqualCloseTo(
    received: { [key: string]: any },
    expected: { [key: string]: any },
    numDigits: number
  ): jest.CustomMatcherResult {
    
    for (const [key, value] of Object.entries(received)) {
      if (typeof value === 'number')
        expect(value).toBeCloseTo(expected[key], numDigits);
      else
        expect(value).toEqual(expected[key]);
    }
    return { pass: true, message: () => "" };
  },
});
