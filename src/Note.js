import notes from './notes.json';
import { noteVarientToUTF8 } from './helpers/symbols';

function getByObjectKey(index) {
  const keys = Object.keys(notes);
  return keys[index];
}

class Note {
  constructor(note, variant) {
    if (!notes[note]) {
      throw new Error('Invalid Note Specified');
    }

    this.note = note.toLowerCase();
    this.variant = noteVarientToUTF8(variant);
  }

  toString() {
    console.log(this.note.toUpperCase());
    return `${this.note.toUpperCase()}${this.variant}`;
  }

  getObjectKey() {
    const keys = Object.keys(notes);
    return keys.indexOf(this.note);
  }

  halfStepUp() {
    return this.stepUp(0.5);
  }

  halfStepDown() {
    return this.stepDown(0.5);
  }

  stepUp(steps) {
    return new Note(getByObjectKey(this.getObjectKey() + (steps || 1)));
  }

  stepDown(steps) {
    return new Note(getByObjectKey(this.getObjectKey() - (steps || 1)));
  }
}

export default Note;
