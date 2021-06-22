export enum NoteAlter {
  NONE,
  FLAT = "b",  // ♭
  SHARP = "#", // ♯
}


const ASPN_TO_SYLLABLES: {[idx:string]: string } = {
  A:"La", B:"Si", C:"Do", D:"Ré", E:"Mi", F:"Fa", G:"Sol",
  a:"La", b:"Si", c:"Do", d:"Ré", e:"Mi", f:"Fa", g:"Sol",
}

const SYLLABLES_TO_ASPN: {[idx:string]: string } = {
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
   * @param char letter representing the note
   * @param alter note alteration
   * @param octave octave number according to
   * the American Std. Pitch Notation
   */
  static create(char: string, alter: NoteAlter, octave = 4): Note | null {
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
      
      return Note.create(
        SYLLABLES_TO_ASPN[syllable.toLowerCase()],
        (!alter) ? NoteAlter.NONE : Note.parseAlter(alter),
        (!octave) ? 4 : Number(octave)+1);
    
    } else if (Note.isASPNotation(str)) {
      const [, char, alter, octave] =
          str.match(/^([A-G])(#|♯|b|♭)?([0-9]|10)?$/i) as any[];
      
      return Note.create(
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
  Note.create("C", NoteAlter.NONE , 4)!,
  Note.create("G", NoteAlter.NONE , 4)!,
  Note.create("D", NoteAlter.NONE , 4)!,
  Note.create("A", NoteAlter.NONE , 4)!,
  Note.create("E", NoteAlter.NONE , 4)!,
  Note.create("B", NoteAlter.NONE , 4)!,
  Note.create("F", NoteAlter.SHARP, 4)!,
  Note.create("C", NoteAlter.SHARP, 4)!,
  Note.create("G", NoteAlter.SHARP, 4)!,
  Note.create("E", NoteAlter.FLAT , 4)!,
  Note.create("B", NoteAlter.FLAT , 4)!,
  Note.create("F", NoteAlter.NONE , 4)!,
];

export default Note;
