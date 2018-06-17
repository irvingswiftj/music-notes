/* global test, expect */

import symbolHelpers from './../../helpers/symbols';

test('UTF8 symbol helper for flats', () => {
  expect(symbolHelpers.noteVarientToUTF8('♭')).toBe('♭');
  expect(symbolHelpers.noteVarientToUTF8('flat')).toBe('♭');
  expect(symbolHelpers.noteVarientToUTF8('b')).toBe('♭');
});

test('UTF8 symbol helper for sharps', () => {
  expect(symbolHelpers.noteVarientToUTF8('♯')).toBe('♯');
  expect(symbolHelpers.noteVarientToUTF8('#')).toBe('♯');
  expect(symbolHelpers.noteVarientToUTF8('sharp')).toBe('♯');
});

test('UTF8 symbol helper for neutrals', () => {
  expect(symbolHelpers.noteVarientToUTF8()).toBe('');
  expect(symbolHelpers.noteVarientToUTF8('')).toBe('');
  expect(symbolHelpers.noteVarientToUTF8('rubbish')).toBe('');
  expect(symbolHelpers.noteVarientToUTF8(true)).toBe('');
  expect(symbolHelpers.noteVarientToUTF8(false)).toBe('');
});
