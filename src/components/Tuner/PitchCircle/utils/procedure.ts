import Note from "../../../../model/Note/Note";
import { Temperament } from "../../../../model/Temperament/Temperament";
import { ProcStep } from "../../../../model/Procedure";
import { hasAcousticBeat } from "../../../../model/AcousticBeat";

/**
 * Defines if and when the 'btnStates' should be
 * reset to 'idle' during the QueuedStep processing
 */
export enum ProcSubStepClear {
  NONE,
  BEFORE = 1 << 0,
  AFTER = 1 << 1,
};

export type ProcSubStep = {
  duration: number,
  notes?: [] | [Note] | [Note, Note],
  clear?: ProcSubStepClear,
};

/**
 * 
 * @param step ProcStep to decompose
 * @param temperament 
 * @returns an array of 'ProcSubStep' for
 * the given 'step'.
 */
export const decomposeStep = (
  step: ProcStep,
  temperament: Temperament,
): ProcSubStep[] => {
  if (step.action === 'tune unique')
    return [
      { duration: 0.4 },
      { duration: 3.0, notes: [step.noteX] },
    ];
  if (step.action === 'tune octave')
    return [
      { duration: 0.4 },
      { duration: 1.0, notes: [step.noteX] },
      { duration: 0.2, clear: ProcSubStepClear.NONE },
      { duration: 1.0, notes: [step.noteY] },
    ];
  if (step.action === 'tune pair') {
    const hasABeat = hasAcousticBeat(step.noteX, step.noteY, temperament.deviation);
    return [
      { duration: 0.4 },
      { duration: 1.0, notes: [step.noteX] },
      { duration: 0.2, clear: ProcSubStepClear.NONE },
      { duration: 1.0, notes: [step.noteY] },
      { duration: 0.2, clear: ProcSubStepClear.NONE },
      { duration: hasABeat ? 5.0 : 1.5, notes: [step.noteX, step.noteY] },
    ];
  } if (step.action === 'check') {
    const hasABeat = hasAcousticBeat(step.noteX, step.noteY, temperament.deviation);
    return [
      { duration: 0.4 },
      { duration: hasABeat ? 5.0 : 1.5, notes: [step.noteX, step.noteY] },
    ];
  }
  return [];
};
