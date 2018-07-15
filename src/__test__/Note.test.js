/* global test, expect */

import Note from './../Note';

test('Constructor', () => {
  const note = new Note('a');
  expect(note).toBeDefined();
});

test('Throw error if invalid note given', () => {
  expect(() => {
    const note = new Note(); // eslint-disable-line
  }).toThrow('Invalid Note Specified');
});

test('Can step up notes', () => {
  const note = new Note('b');

  expect(note.stepUp().toString()).toBe('C');
});

test('Can step down notes', () => {
  const note = new Note('b');
  expect(note.stepDown().toString()).toBe('A');
});