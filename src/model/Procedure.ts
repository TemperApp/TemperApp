import Note from './Note/Note';

export enum ProcAction {
  TUNE_UNIQUE = 'tune unique',
  TUNE_PAIR = 'tune pair',
  TUNE_OCTAVE = 'tune octave',
  CHECK = 'check',
}

export type ProcStep =
  | {
      action: ProcAction.TUNE_UNIQUE;
      message?: string;
      noteX: Note;
    }
  | {
      action: Exclude<ProcAction, ProcAction.TUNE_UNIQUE>;
      message?: string;
      noteX: Note;
      noteY: Note;
    };

export class Procedure {
  steps: ProcStep[] = [];

  hasNext(idx: number): boolean {
    return idx < this.steps.length - 1;
  }

  hasPrev(idx: number): boolean {
    return idx > 0;
  }

  getNoteToTuneAtStep(stepIdx: number): Note | null {
    const s = this.steps[stepIdx];
    if (s.action === ProcAction.TUNE_UNIQUE) return s.noteX;

    if (
      s.action === ProcAction.TUNE_OCTAVE ||
      s.action === ProcAction.TUNE_PAIR
    )
      return s.noteY;

    return null;
  }

  getTunedNotesAtStep(stepIdx: number) {
    let tunedNotes = [];
    for (let i = 0; i < stepIdx; i++) {
      const noteToTune = this.getNoteToTuneAtStep(i);
      noteToTune && tunedNotes.push(noteToTune);
    }
    return tunedNotes;
  }

  static isValid(procStr: string): boolean {
    // TODO: CHECK IF IT'S NORMAL
    if (!procStr) {
      return false;
    }
    return (
      null !==
      procStr.match(
        /^((?:{([^}]*)})?([A-G](?:#|♯|b|♭)?(?:[0-9]|10))(?:([-:])([A-G](?:#|♯|b|♭)?(?:[0-9]|10)))?\s*(?:;|$))+\s*$/i
      )
    );
  }

  static parse(procStr: string): Procedure | null {
    let res = new Procedure();
    if (!this.isValid(procStr)) {
      console.warn('[Procedure]: procedure string is invalid:', procStr);
      return null;
    }
    const regexMatch =
      /(?:{([^}]*)})?([A-G](?:#|♯|b|♭)?(?:[0-9]|10))(?:([-:])([A-G](?:#|♯|b|♭)?(?:[0-9]|10)))?\s*(?=;|$)/gi;
    const matches = procStr.matchAll(regexMatch);

    let match = matches.next();

    while (!match.done) {
      const message = match.value[1];
      const noteX = Note.parse(match.value[2]);
      const separator = match.value[3];
      const noteY = Note.parse(match.value[4]);

      if (noteX && noteY) {
        const interval = Note.intervalBetween(noteX, noteY);
        if (interval % 12 === 0) {
          res.steps.push({
            action: ProcAction.TUNE_OCTAVE,
            message,
            noteX,
            noteY,
          });
        } else {
          res.steps.push({
            action: separator === '-' ? ProcAction.TUNE_PAIR : ProcAction.CHECK,
            message,
            noteX,
            noteY,
          });
        }
      } else if (noteX) {
        res.steps.push({
          action: ProcAction.TUNE_UNIQUE,
          message,
          noteX,
        });
      } else {
        console.warn('[Procedure]: parse failed: ', match.value[0]);
      }
      match = matches.next();
    }
    return res;
  }
}
