
export enum NoteState {
    Unselected,
    Normal,
    Octave
  }

export type Note = {
    name: String,
    octave: Number
}

export type NotesCircleState = {
    note: Note,
    state: NoteState,
    noteBpm1 : Note,
    noteBpm2 : Note
}

export enum TunerMode {
    TuningFork = "Diapason",
    Bpm = "Battement"
}