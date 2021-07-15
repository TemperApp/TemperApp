import React from 'react';
import { processAcousticBeat } from '../../../model/AcousticBeat';
import { ActiveBtn, createNoteFromActive } from '../PitchCircleController';
import { Notes } from '../../../model/Note/enums';
import NotesMap from '../../../model/Note/NotesMap';

//Styles
import "./CenterCircle.css";
import Note from '../../../model/Note/Note';

const isBpm = true;

export const notesToStr = (note: Notes) => {
  switch (note) {
    case Notes.B_flat: return "B♭";
    case Notes.E_flat: return "E♭";
    case Notes.G_sharp: return "G♯";
    case Notes.C_sharp: return "C♯";
    case Notes.F_sharp: return "F♯";
    default: return note;
  }
};

const beatToStr = (bps: number, isBpm = false) => {
  if (isBpm) {
    const bpm = bps * 60;
    return (bpm > 600)
      ? '> 600 bpm'
      : (bpm > 200)
        ? '4 x ' + (bpm / 4).toFixed(0) + ' bpm'
        : bpm.toFixed(0) + ' bpm';
  } else {
    return (bps > 4)
      ? '> 4 bps'
      : bps.toFixed(1) + ' bps';
  }
};

type PitchCircleSVGProps = {
  actives: ActiveBtn[],
  freqA4: number,
  deviations: NotesMap<number>,
}

const CenterCircle: React.FC<PitchCircleSVGProps> = ({
  actives, freqA4, deviations
}) => {

  let text;
  let subtext;

  const noteX = (actives[0]) && createNoteFromActive(actives[0]);
  const noteY = (actives[1]) && createNoteFromActive(actives[1]);

  if (!noteX && !noteY) {
    text = "—";
    subtext = "— Hz";
  }

  if (noteX && !noteY) {
    text = noteX.string();
    subtext = `${noteX.freq(freqA4, deviations).toFixed(1)} Hz`;
  }

  if (noteX && noteY) {
    const { lowest, highest } = Note.getLowestAndHighest(
      noteX, noteY
    );

    const { modulationFreq } = processAcousticBeat(
      lowest, highest, freqA4, deviations
    );

    text = `${lowest.string()} · ${highest.string()}`;
    subtext = (modulationFreq)
      ? beatToStr(modulationFreq, isBpm)
      : "—";
  }

  console.info('🔹 [CenterCircle]: Render')
  return (
    <g id="CenterCercleInformation">
      <text transform="matrix(1 0 0 1 178.5 178.5)" className="st25 st30">
        <tspan
          x="0" className="st30"
          textAnchor="middle" id="centerCircleNote"
        >
          {text}
        </tspan>
        <tspan
          x="0" dy="30" className="st31"
          textAnchor="middle" id="centerCircleFrequency"
        >
          {subtext}
        </tspan>
      </text>
    </g>
  );
};

export default React.memo(
  CenterCircle,
  (prevProps, nextProps) =>
    prevProps.actives === nextProps.actives &&
    prevProps.freqA4 === nextProps.freqA4 &&
    prevProps.deviations === nextProps.deviations
);
