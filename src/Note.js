import notes from './notes.json';
import { noteVarientToUTF8 } from './helpers/symbols';

class Note {
  constructor(note, variant) {
    if (!notes[note]) {
      throw new Error('Invalid Note Specified');
    }

    this.note = note.toLowerCase();
    this.variant = noteVarientToUTF8(variant);
  }
}

export default Note;
