import { Notes } from "./enums";

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
export function mapNotesMap<T>(
  values: T | NotesMap<any>,
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

export default NotesMap;
