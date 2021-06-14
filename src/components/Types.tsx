
export enum NoteState {
    Unselected,
    Normal,
    Octave
  }

export type NotesCircleState = {
    note: String,
    state: NoteState
}

export enum TunerMode {
    TuningFork = "Diapason",
    Bpm = "Battement"
}