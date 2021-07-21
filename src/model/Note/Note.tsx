import { NoteAlter, Notes, NotesIndex, PitchInterval } from "./enums";
import { ASPN_TO_SYLLABLES, SYLLABLES_TO_ASPN } from "./names";
import { mapNotesMap } from "./NotesMap";

export interface INote {
  char: string,
  alter: NoteAlter,
  octave: number, // ASPN: A4 is 440 Hz
  string(): string,
  string2(): string,
}


class Note implements INote {
  char: string;
  alter: NoteAlter;
  octave: number;

  private constructor(char: string, alter: NoteAlter, octave: number) {
    if (-1 === char.search(/[A-G]/i))
      throw new Error(`Error: Invalid note character: ${char}`);
    if (octave < 0 || octave > 10)
      throw new Error(`Error: Octave must be between 0 and 10: found ${octave}`);

    this.char = char;
    this.alter = alter;
    this.octave = octave;
  }


  /**
   * Creates a note
   * @param note 'Notes' enum element
   * @param octave octave number according to
   * the American Std. Pitch Notation
   */
  static create(note: Notes, octave = 4): Note {
    switch (note) {
      case Notes.C:       return new Note('C', NoteAlter.NONE, octave);
      case Notes.C_sharp: return new Note('C', NoteAlter.SHARP, octave);
      case Notes.D:       return new Note('D', NoteAlter.NONE, octave);
      case Notes.E_flat:  return new Note('E', NoteAlter.FLAT, octave);
      case Notes.E:       return new Note('E', NoteAlter.NONE, octave);
      case Notes.F:       return new Note('F', NoteAlter.NONE, octave);
      case Notes.F_sharp: return new Note('F', NoteAlter.SHARP, octave);
      case Notes.G:       return new Note('G', NoteAlter.NONE, octave);
      case Notes.G_sharp: return new Note('G', NoteAlter.SHARP, octave);
      case Notes.A:       return new Note('A', NoteAlter.NONE, octave);
      case Notes.B_flat:  return new Note('B', NoteAlter.FLAT, octave);
      case Notes.B:       return new Note('B', NoteAlter.NONE, octave);
      default: throw Error(`[Note]: Unvalid note: ${note}`);
    }
  }


  /**
   * Creates a note
   * @param char letter representing the note
   * @param alter note alteration
   * @param octave octave number according to
   * the American Std. Pitch Notation
   */
  static create2(char: string, alter: NoteAlter, octave = 4): Note {
    return new Note(char, alter, octave);
  }


  /**
   * @param noteX
   * @param noteY
   * @returns semitones count between
   * the two notes
   */
  static intervalBetween(noteX: Note, noteY: Note): PitchInterval {
    const indexX = NotesIndex[noteX.toNotes()] + noteX.octave * 12;
    const indexY = NotesIndex[noteY.toNotes()] + noteY.octave * 12;
    return indexY - indexX as PitchInterval;
  }


  /**
   * @param noteX 
   * @param noteY 
   * @param pitchInterval semitone count between the
   *                      two notes
   * @returns true if the interval between 'noteX'
   * and 'noteY' is effectively 'pitchInterval'
   */
  static isInterval(noteX: Note, noteY: Note, pitchInterval: PitchInterval): boolean {
    return Note.intervalBetween(noteX, noteY) === pitchInterval;
  }

  /**
   * @param noteX
   * @param noteY
   * @returns the notes encapsuled in an object
   * with two props: 'lowest' and 'highest'
   */
  static compare(noteX: Note, noteY: Note) {
    return {
      lowest: (noteX.isHigherThan(noteY)) ? noteY : noteX,
      highest: (noteX.isHigherThan(noteY)) ? noteX : noteY,
    }
  }

  /**
   * Compares the musical pitch (and not the frequency)
   * with another note.
   * @param note note to compare to
   * @returns true if the musical pitch is higher
   * than the one given as parameter.
   */
  isHigherThan(note: Note) {
    return NotesIndex[this.toNotes()] + this.octave * 12
      > NotesIndex[note.toNotes()] + note.octave * 12;
  }


  /**
   * @param freqA4 Reference pitch frequency of A4 note
   * @param deviations Deviation tables for each note
   *                   relative to the equal temperament
   * @returns the frequency of the note given the A4 reference
   * and the eventual deviation table values
   */
  freq(freqA4: number, deviations = mapNotesMap(0)): number {
    const devia: number = deviations[this.toNotes()];
    const freqEqualTmpmt = freqA4
      * Math.pow(2, NotesIndex[this.toNotes()] / 12)
      * Math.pow(2, this.octave - 4);
    return freqEqualTmpmt * Math.pow(2, devia/1200);
  }


  /**
   * @param note the note to parse as string with a common
   *             format of use (ASPN or syllables).
   *             (e.g.: a#6, Gb4, bb10, La3, réb6).
   *             Octaves range goes from 0 to 10 (ASPN) included.
   *             'Syllables' octaves are shifted by one unit lower
   *             than 'ASPN' octaves (e.g.: La3 = A4).
   * @returns a Note object corresponding to the given string
   * @returns null, if parsing fails
   */
  static parse(note: string): Note | null {
    if (!note)
      return null;
      
    const str = note.trim();
    if (Note.isSyllablesNotation(str)) {
      const [, syllable, alter, octave] =
        str.match(/^(do|re|ré|mi|fa|sol|la|si)(#|♯|b|♭)?(-1|[0-9])?$/i) as any[];

      return Note.create2(
        SYLLABLES_TO_ASPN[syllable.toLowerCase()],
        (!alter) ? NoteAlter.NONE : Note.parseAlter(alter),
        (!octave) ? 4 : Number(octave) + 1);

    } else if (Note.isASPNotation(str)) {
      const [, char, alter, octave] =
        str.match(/^([A-G])(#|♯|b|♭)?([0-9]|10)?$/i) as any[];

      return Note.create2(
        char,
        (!alter) ? NoteAlter.NONE : Note.parseAlter(alter),
        (!octave) ? 4 : Number(octave));

    } else {
      console.warn('[Note]: Cannot parse:', str);
      return null;
    }
  }


  private static parseAlter(str: string): NoteAlter {
    return -1 !== str.search("b") || -1 !== str.search("♭")
      ? NoteAlter.FLAT
      : (0 === str.search("#")) || (0 === str.search("♯"))
        ? NoteAlter.SHARP
        : NoteAlter.NONE;
  }

  private static getAlterExactSymbol(alter: NoteAlter): string {
    return alter === NoteAlter.NONE
      ? ""
      : alter === NoteAlter.FLAT
        ? "♭"
        : "♯"
  }

  private static isSyllablesNotation(str: string): boolean {
    return 0 === str.trim()
      .search(/^(do|re|ré|mi|fa|sol|la|si)(#|♯|b|♭)?(-1|[0-9])?$/i);
  }

  private static isASPNotation(str: string): boolean {
    return 0 === str.trim()
      .search(/^([A-G])(#|♯|b|♭)?([0-9]|10)?$/i);
  }


  /**
   * @param alterExactSymbol gives the exact character for
   *                         a sharp or flat note
   * @param withOctave gives the octave number
   * @returns A string representation of the note in
   * the American Std. Pitch Notation
   */
  string(alterExactSymbol = true, withOctave = true): string {
    return this.char
      + (this.alter === NoteAlter.NONE
        ? ""
        : (!alterExactSymbol)
          ? this.alter
          : Note.getAlterExactSymbol(this.alter))
      + (withOctave ? this.octave.toFixed(0) : "");
  }


  /**
   * @param alterExactSymbol gives the exact character for
   *                         a sharp or flat note
   * @param withOctave gives the octave number
   * @returns A string representation of the note as
   * a solfege syllable (do, ré, mi...)
   */
  string2(alterExactSymbol = true, withOctave = true): string {
    return ASPN_TO_SYLLABLES[this.char]
      + (this.alter === NoteAlter.NONE
        ? ""
        : (!alterExactSymbol)
          ? this.alter
          : Note.getAlterExactSymbol(this.alter))
      + (withOctave ? (this.octave - 1).toFixed(0) : "");
  }

  
  /**
   * @returns the note as a 'Notes' enum element
   */
  toNotes(): Notes {
    const str = this.char + (
      (this.alter === NoteAlter.FLAT)
        ? "_flat"
        : (this.alter === NoteAlter.SHARP)
          ? "_sharp"
          : ""
    );

    switch (str) {
      case "C":       return Notes.C;
      case "C_sharp": return Notes.C_sharp;
      case "D_flat":  return Notes.C_sharp;
      case "D":       return Notes.D;
      case "D_sharp": return Notes.E_flat;
      case "E_flat":  return Notes.E_flat;
      case "E":       return Notes.E;
      case "F":       return Notes.F;
      case "F_sharp": return Notes.F_sharp;
      case "G_flat":  return Notes.F_sharp;
      case "G":       return Notes.G;
      case "G_sharp": return Notes.G_sharp;
      case "A_flat":  return Notes.G_sharp;
      case "A":       return Notes.A;
      case "A_sharp": return Notes.B_flat;
      case "B_flat":  return Notes.B_flat;
      case "B":       return Notes.B;
      default: throw Error(`[Note]: Unvalid note: ${str}`);
    }
  }
}

export default Note;
