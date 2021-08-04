import React, { useContext } from 'react';
import { NoteAlter, Notes } from '../../model/Note/enums';
import Note from '../../model/Note/Note';
import SettingsContext from '../../store/settings-context';
import { KeyboardLabels } from '../../store/settings-context/settings';
import { equalsDeep } from '../../utils/functions';

const keys = [
  { note: Note.create(Notes.C, 3)        , x:   0   , y: 0.58, },
  { note: Note.create(Notes.D, 3)        , x:  25.08, y: 0.58, },
  { note: Note.create(Notes.E, 3)        , x:  50.16, y: 0.58, },
  { note: Note.create(Notes.F, 3)        , x:  75.24, y: 0.58, },
  { note: Note.create(Notes.G, 3)        , x: 100.32, y: 0.58, },
  { note: Note.create(Notes.A, 3)        , x: 125.4 , y: 0.58, },
  { note: Note.create(Notes.B, 3)        , x: 150.48, y: 0.58, },
  { note: Note.create(Notes.C, 4)        , x: 175.56, y: 0.58, },
  { note: Note.create(Notes.D, 4)        , x: 200.64, y: 0.58, },
  { note: Note.create(Notes.E, 4)        , x: 225.72, y: 0.58, },
  { note: Note.create(Notes.F, 4)        , x: 250.8 , y: 0.58, },
  { note: Note.create(Notes.G, 4)        , x: 275.88, y: 0.58, },
  { note: Note.create(Notes.A, 4)        , x: 300.96, y: 0.58, },
  { note: Note.create(Notes.B, 4)        , x: 326.04, y: 0.58, },
  { note: Note.create(Notes.C_sharp, 3)  , x:  13.76, y: 0.58, },
  { note: Note.create(Notes.E_flat, 3)   , x:  44.8 , y: 0.58, },
  { note: Note.create(Notes.F_sharp, 3)  , x:  89.02, y: 0.58, },
  { note: Note.create(Notes.G_sharp, 3)  , x: 117.06, y: 0.58, },
  { note: Note.create(Notes.B_flat, 3)   , x: 145.02, y: 0.58, },
  { note: Note.create(Notes.C_sharp, 4)  , x: 189.41, y: 0.58, },
  { note: Note.create(Notes.E_flat, 4)   , x: 219.93, y: 0.58, },
  { note: Note.create(Notes.F_sharp, 4)  , x: 264.63, y: 0.58, },
  { note: Note.create(Notes.G_sharp, 4)  , x: 292.6 , y: 0.58, },
  { note: Note.create(Notes.B_flat, 4)   , x: 320.63, y: 0.58, },
];

type TunerHeaderKeyboardProps = {
  tunedNotes: Array<Note>,
  noteToTune?: Note | null,
}

const TunerHeaderKeyboard: React.FC<TunerHeaderKeyboardProps> = ({
  tunedNotes, noteToTune
}) => {

  const settings = useContext(SettingsContext);

  const color = (note: Note) => {
    for (const tn of tunedNotes)
      if (equalsDeep(tn, note))
        return "key-tuned";

    if (noteToTune && equalsDeep(noteToTune, note))
      return "key-active";

    return note.alter !== NoteAlter.NONE && 'key-black';
  }

  const labels = settings.procedurekeyboardLabels === KeyboardLabels.NONE
    ? []
    : settings.procedurekeyboardLabels === KeyboardLabels.C3C4
      ? ['C3', 'C4']
      : settings.procedurekeyboardLabels === KeyboardLabels.A3A4
        ? ['A3', 'A4']
        : keys
          .filter(({note}) => note.alter === NoteAlter.NONE)
          .map(({note}) => note.string(false));

  return (
    <div className="px-6 pt-2 w-full max-w-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 351.1 94.6">
        {
          keys.map((k) => (
            <g key={k.note.string(false)}>
              <rect
                id={`key-${k.note.string(false)}`}
                x={k.x}
                y={k.y}
                className={`
                  key
                  ${color(k.note)}
                `}
                width={k.note.alter === NoteAlter.NONE ? 25.08 : 16.67}
                height={k.note.alter === NoteAlter.NONE ? 94.62 : 56}
              />

              { labels.includes(k.note.string(false))
                && 
                  <text x={k.x + 3.54} y={k.y + 92.03}>
                    { k.note.string(false) }
                  </text>
              }
            </g>
          ))
        }
      </svg>
    </div>
  );
};

export default React.memo(
  TunerHeaderKeyboard,
  (prevProps, nextProps) =>
    prevProps.tunedNotes === nextProps.tunedNotes &&
    prevProps.noteToTune === nextProps.noteToTune
);
