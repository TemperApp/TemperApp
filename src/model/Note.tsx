export enum NoteAsString {
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
    if (-1 === char.search(/A|B|C|D|E|F|G/))
      throw `Error: Invalid note character: ${char}`;
    if (octave < 0 || octave > 10)
      throw `Error: Octave must be between 0 and 10: found ${octave}`;

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

  static parse(str: string): Note | null {
    const octave: number = 
      (!isNaN(Number(str.slice(-1))))
      ? Number(str.slice(-1))
      : 4;

    let char: string;
    let alter: NoteAlter;

    if (Note.isSyllablesNotation(str)) {
      if (str.trim().search(/sol/i) === 0) {
        char = SYLLABLES_TO_ASPN[str.slice(0, 3)];
        alter = Note.parseAlter(str.slice(3, 4));
      } else {
        char = SYLLABLES_TO_ASPN[str.slice(0, 2)];
        alter = Note.parseAlter(str.slice(2, 3));
      }
    } else if (Note.isASPNotation(str)) {
      char = str.slice(0, 1).toUpperCase();
      alter = Note.parseAlter(str.slice(1, 2));
    } else {
      console.warn(`Failed to parse "${str}"`)
      return null;
    }

    return new Note(char, alter, octave);
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
    return 0 === str
      .trim()
      .normalize("NFD") //Remove accent for "Ré"
      .search(/do|re|mi|fa|sol|la|si/i)
  }

  private static isASPNotation(str: string): boolean {
    return !this.isSyllablesNotation(str) &&
      0 === str
      .trim()
      .search(/A|B|C|D|E|F|G/i)
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
