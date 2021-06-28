// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { Notes, NotesMap } from './model/Note';

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
        expected: NotesMap<number>,
        numDigits: number
      ) => CustomMatcherResult;
    }
  }
}

expect.extend({
  toEqualCloseTo(
    received: NotesMap<number>,
    expected: NotesMap<number>,
    numDigits: number
  ): jest.CustomMatcherResult {
    
    for (const [key, value] of Object.entries(received))
      expect(value).toBeCloseTo(expected[key as Notes], numDigits);
      
    return { pass: true, message: () => "" };
  },
});
