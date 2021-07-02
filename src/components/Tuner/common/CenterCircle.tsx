import React, { useEffect, useState } from 'react';
import AcousticBeat, { processAcousticBeat } from '../../../model/AcousticBeat';
import { ActiveNotes, NoteStates } from '../clickable/PitchCircleSVG';
import Note from '../../../model/Note/Note';
import { Notes } from '../../../model/Note/enums';
import NotesMap from '../../../model/Note/NotesMap';
import SoundEngine from '../../../engine/SoundEngine';
import Settings from '../../../engine/Settings';

//Styles
import "./CenterCircle.css";

const isBpm = true;
const refOctave = 4;

export const notesToStr = (note : Notes) => {
  switch (note) {
    case Notes.B_flat:  return "B♭";
    case Notes.E_flat:  return "E♭";
    case Notes.G_sharp: return "G♯";
    case Notes.C_sharp: return "C♯";
    case Notes.F_sharp: return "F♯" ;  
    default: return note;
  }
};

const beatToStr = (bps: number, isBpm = false) => {
  if (isBpm) {
    const bpm = bps*60;
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
  actives: ActiveNotes,
  frequencies: NotesMap<number>,
  freqA4: number,
  deviations: NotesMap<number>,
}

const CenterCircle: React.FC<PitchCircleSVGProps> = ({
  actives, frequencies, freqA4, deviations
}) => {

  const [beat, setBeat] = useState<AcousticBeat>({
    carrierFreq: null,
    modulationFreq: null
  });

  useEffect(() => {
    if (beat.modulationFreq && beat.carrierFreq) {
      SoundEngine.setPulseBPS(beat.modulationFreq);
      let heardFreq = beat.carrierFreq;
      while (heardFreq > 1000)
        heardFreq /= 2;
      SoundEngine.stopAndPlay(heardFreq);
    }
      
    const cFreq = document.getElementById("centerCircleFrequency")!;

    cFreq.innerHTML = (beat.modulationFreq)
      ? beatToStr(beat.modulationFreq, isBpm)
      : "—";
  }, [beat]);

  useEffect(() => {
    const cNote = document.getElementById("centerCircleNote")!;
    const cFreq = document.getElementById("centerCircleFrequency")!;

    const isIdle0 = actives[0].state === NoteStates.IDLE;
    const isIdle1 = actives[1].state === NoteStates.IDLE;
    const isOctave0 = actives[0].state === NoteStates.OCTAVE;
    const isOctave1 = actives[1].state === NoteStates.OCTAVE;

    if (isIdle0 && isIdle1) {
      cNote.innerHTML = "—";
      cFreq.innerHTML = "— Hz";
    }

    if (!isIdle0 && isIdle1) {
      cNote.innerHTML = notesToStr(actives[0].note!) 
        + (refOctave + (isOctave0 ? -1 : 0));

      cFreq.innerHTML = (frequencies[actives[0].note!] 
        * (isOctave0 ? 0.5 : 1)).toFixed(1) + " Hz";
    }

    if (!isIdle0 && !isIdle1) {
      cNote.innerHTML =
        notesToStr(actives[0].note!)
        + (refOctave + (isOctave0 ? -1 : 0))
        + " · "
        + notesToStr(actives[1].note!)
        + (refOctave + (isOctave1 ? -1 : 0));

      setBeat(processAcousticBeat(
        Note.create(actives[0].note!, (isOctave0 ? 3 : 4)),
        Note.create(actives[1].note!, (isOctave1 ? 3 : 4)),
        freqA4,
        deviations
      ));
    }
  }, [actives, frequencies, freqA4, deviations]);

  return (
    <g id="CenterCercleInformation">
      <circle className="st29" fill={(Settings.darkTheme())?("#233C3A"):"#F7FBFC"} cx="178.5" cy="178.5" r="77.13" />
      <text transform="matrix(1 0 0 1 178.5 178.5)" className="st25 st30">
        <tspan 
          x="0" className="st30"
          textAnchor="middle" id="centerCircleNote">
        </tspan>
        <tspan 
          x="0" className="st31"
          textAnchor="middle" id="centerCircleFrequency"
          dy="30">
        </tspan>
      </text>
    </g>
  );
};

export default CenterCircle;
