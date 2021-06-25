export enum Notes {
  C = "C",
  C_sharp = "C_sharp",
  D = "D",
  E_flat = "E_flat",
  E = "E",
  F = "F",
  F_sharp = "F_sharp",
  G = "G",
  G_sharp = "G_sharp",
  A = "A",
  B_flat = "B_flat",
  B = "B",
};

export type NotesMap<T> = { [key in keyof typeof Notes]: T }

/**
 * @param values values to assign to the notes. If it is
 *               of type NotesMap<any>, the input value
 *               associated with the note will correspond
 *               to the output associated with that same note.
 *               If it is of type 'string' or 'number. All the
 *               note will have the same value.
 * @param f function to call when processing the values. Input
 *          values is passed to this function. The returned value
 *          will be respectively assigned to the output values,
 *          for each note.
 * @returns the mapped NotesMap
 */
export function mapNotesMap<T>(
  values: number | string | NotesMap<any>,
  f = (value: any): T => value
): NotesMap<T> {
  const isNotesMap = typeof values !== "number" && typeof values !== "string";
  return ({
      C       : f(isNotesMap ? (values as NotesMap<any>).C       : values),
      C_sharp : f(isNotesMap ? (values as NotesMap<any>).C_sharp : values),
      D       : f(isNotesMap ? (values as NotesMap<any>).D       : values),
      E_flat  : f(isNotesMap ? (values as NotesMap<any>).E_flat  : values),
      E       : f(isNotesMap ? (values as NotesMap<any>).E       : values),
      F       : f(isNotesMap ? (values as NotesMap<any>).F       : values),
      F_sharp : f(isNotesMap ? (values as NotesMap<any>).F_sharp : values),
      G       : f(isNotesMap ? (values as NotesMap<any>).G       : values),
      G_sharp : f(isNotesMap ? (values as NotesMap<any>).G_sharp : values),
      A       : f(isNotesMap ? (values as NotesMap<any>).A       : values),
      B_flat  : f(isNotesMap ? (values as NotesMap<any>).B_flat  : values),
      B       : f(isNotesMap ? (values as NotesMap<any>).B       : values),
    });
}


export enum NoteAlter {
  NONE,
  FLAT = "b",  // ♭
  SHARP = "#", // ♯
}


const ASPN_TO_SYLLABLES: { [idx: string]: string } = {
  A: "La", B: "Si", C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol",
  a: "La", b: "Si", c: "Do", d: "Ré", e: "Mi", f: "Fa", g: "Sol",
}

const SYLLABLES_TO_ASPN: { [idx: string]: string } = {
  La: "A", Si: "B", Do: "C", Ré: "D", Re: "D", Mi: "E", Fa: "F", Sol: "G",
  la: "A", si: "B", do: "C", ré: "D", re: "D", mi: "E", fa: "F", sol: "G",
}


export interface INote {
  char: string,
  alter: NoteAlter,
  octave: number, // ASPN: A4 is 440 Hz
  string(): string,
  string2(): string,
}


export class Note implements INote {
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
  static create(note: Notes, octave = 4): Note | null {
    try {
      switch (note) {
        case "C":       return new Note('C', NoteAlter.NONE, octave);
        case "C_sharp": return new Note('C', NoteAlter.SHARP, octave);
        case "D":       return new Note('D', NoteAlter.NONE, octave);
        case "E_flat":  return new Note('E', NoteAlter.FLAT, octave);
        case "E":       return new Note('E', NoteAlter.NONE, octave);
        case "F":       return new Note('F', NoteAlter.NONE, octave);
        case "F_sharp": return new Note('F', NoteAlter.SHARP, octave);
        case "G":       return new Note('G', NoteAlter.NONE, octave);
        case "G_sharp": return new Note('G', NoteAlter.SHARP, octave);
        case "A":       return new Note('A', NoteAlter.NONE, octave);
        case "B_flat":  return new Note('B', NoteAlter.FLAT, octave);
        case "B":       return new Note('B', NoteAlter.NONE, octave);
        default:        return null;
      }
    } catch (error) {
      console.warn(error);
      return null;
    }
  }


  /**
   * Creates a note
   * @param char letter representing the note
   * @param alter note alteration
   * @param octave octave number according to
   * the American Std. Pitch Notation
   */
  static create2(char: string, alter: NoteAlter, octave = 4): Note | null {
    try {
      return new Note(char, alter, octave);
    } catch (error) {
      console.warn(error);
      return null;
    }
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
      console.warn(`[model]: Cannot parse as note: '${str}'`);
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
   * @returns A string representation of the note in
   * the American Std. Pitch Notation
   */
  string(alterExactSymbol = false): string {
    return this.char
      + (this.alter === NoteAlter.NONE
        ? ""
        : (!alterExactSymbol)
          ? this.alter
          : Note.getAlterExactSymbol(this.alter))
      + this.octave.toFixed(0);
  }


  /**
   * @param alterExactSymbol gives the exact character for
   *                         a sharp or flat note
   * @returns A string representation of the note as
   * a solfege syllable (do, ré, mi...)
   */
  string2(alterExactSymbol = false): string {
    return ASPN_TO_SYLLABLES[this.char]
      + (this.alter === NoteAlter.NONE
        ? ""
        : (!alterExactSymbol)
          ? this.alter
          : Note.getAlterExactSymbol(this.alter))
      + (this.octave - 1).toFixed(0);
  }
}


export const FIFTHS: Array<Note> = [
  Note.create(Notes.C, 4)!,
  Note.create(Notes.G, 4)!,
  Note.create(Notes.D, 4)!,
  Note.create(Notes.A, 4)!,
  Note.create(Notes.E, 4)!,
  Note.create(Notes.B, 4)!,
  Note.create(Notes.F_sharp, 4)!,
  Note.create(Notes.C_sharp, 4)!,
  Note.create(Notes.G_sharp, 4)!,
  Note.create(Notes.E_flat, 4)!,
  Note.create(Notes.B_flat, 4)!,
  Note.create(Notes.F_sharp, 4)!,
];

export default Note;
