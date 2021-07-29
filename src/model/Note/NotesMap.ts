import { FifthsIndex, Notes, NotesIndex } from "./enums";

type NotesMap<T> = { [key in keyof typeof Notes]: T }

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
export const mapNotesMap = <T>(
  values: T | NotesMap<any>,
  f = (value: any): T | null => value,
  fallbackValue: T | null = null,
): NotesMap<T> => {
  const isNotesMap = typeof values !== "number" && typeof values !== "string";
  const valueNoteMap = values as NotesMap<any>;
  return ({
    C       : f(isNotesMap ? valueNoteMap.C       : values) ?? fallbackValue!,
    C_sharp : f(isNotesMap ? valueNoteMap.C_sharp : values) ?? fallbackValue!,
    D       : f(isNotesMap ? valueNoteMap.D       : values) ?? fallbackValue!,
    E_flat  : f(isNotesMap ? valueNoteMap.E_flat  : values) ?? fallbackValue!,
    E       : f(isNotesMap ? valueNoteMap.E       : values) ?? fallbackValue!,
    F       : f(isNotesMap ? valueNoteMap.F       : values) ?? fallbackValue!,
    F_sharp : f(isNotesMap ? valueNoteMap.F_sharp : values) ?? fallbackValue!,
    G       : f(isNotesMap ? valueNoteMap.G       : values) ?? fallbackValue!,
    G_sharp : f(isNotesMap ? valueNoteMap.G_sharp : values) ?? fallbackValue!,
    A       : f(isNotesMap ? valueNoteMap.A       : values) ?? fallbackValue!,
    B_flat  : f(isNotesMap ? valueNoteMap.B_flat  : values) ?? fallbackValue!,
    B       : f(isNotesMap ? valueNoteMap.B       : values) ?? fallbackValue!,
  });
};


export enum OrderBy {
  PITCH, FIFTHS_CIRCLE
};

/**
 * @param notesMap 
 * @returns an array of objects
 *  with two props: 'note' and 'value'
 */
export const notesMapToArray = <T>(
  notesMap: NotesMap<T>,
  orderBy: OrderBy,
): Array<{note: Notes, value: T}> => (
  Object.entries(notesMap).map((
      [n, value]: [string, T]
    ) => ({
        note: n as Notes,
        value,
        orderIdx: (orderBy === OrderBy.FIFTHS_CIRCLE)
          ? FifthsIndex[n as Notes]
          : NotesIndex[n as Notes],
    })
  ).sort((a, b) => a.orderIdx - b.orderIdx)
);

export default NotesMap;
