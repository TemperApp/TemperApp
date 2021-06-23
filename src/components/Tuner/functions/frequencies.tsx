import { ActiveNote, StateList } from "../TunerTypes";
import { cpExp5thStrToNumber, csExp3rdStrToNumber} from '../../../model/Divergence';

export const frequenciesEqual4 = (A4:number) => {
    let frequenciesEqual4 : {[key: string]: number} = {
        A: A4,
        B: Math.floor(A4*(Math.pow(2,((1/12)*2))) * 10)/10,
        C: Math.floor(A4*(Math.pow(2,((-1/12)*9))) * 10)/10,
        D: Math.floor(A4*(Math.pow(2,((-1/12)*7))) * 10)/10,
        E: Math.floor(A4*(Math.pow(2,((-1/12)*5))) * 10)/10,
        F: Math.floor(A4*(Math.pow(2,((-1/12)*4))) * 10)/10,
        G: Math.floor(A4*(Math.pow(2,((-1/12)*2))) * 10)/10,
        B_flat : Math.floor(A4*(Math.pow(2,((1/12)*1))) * 10)/10,
        E_flat : Math.floor(A4*(Math.pow(2,((-1/12)*6))) * 10)/10,
        G_sharp : Math.floor(A4*(Math.pow(2,((-1/12)*1))) * 10)/10,
        C_sharp : Math.floor(A4*(Math.pow(2,((-1/12)*8))) * 10)/10,
        F_sharp : Math.floor(A4*(Math.pow(2,((-1/12)*3))) * 10)/10,
    }
    return frequenciesEqual4
}

export const frequencies4 = (A4:number, deviation: {[key: string]: number} ) => {
    let freqEqual4 = frequenciesEqual4(A4);

    let frequencies4 : {[key: string]: number} = {
        A: Math.floor(freqEqual4.A * Math.pow(2, (deviation.A / 1200) )*10)/10,
        B: Math.floor(freqEqual4.B * Math.pow(2, (deviation.B / 1200) )*10)/10,
        C: Math.floor(freqEqual4.C * Math.pow(2, (deviation.C / 1200) )*10)/10,
        D: Math.floor(freqEqual4.D * Math.pow(2, (deviation.D / 1200) )*10)/10,
        E: Math.floor(freqEqual4.E * Math.pow(2, (deviation.E / 1200) )*10)/10,
        F: Math.floor(freqEqual4.F * Math.pow(2, (deviation.F / 1200) )*10)/10,
        G: Math.floor(freqEqual4.G * Math.pow(2, (deviation.G / 1200) )*10)/10,
        B_flat : Math.floor(freqEqual4.B_flat * Math.pow(2, (deviation.B_flat / 1200) )*10)/10,
        E_flat : Math.floor(freqEqual4.E_flat * Math.pow(2, (deviation.E_flat / 1200) )*10)/10,
        G_sharp : Math.floor(freqEqual4.G_sharp * Math.pow(2, (deviation.G_sharp / 1200) )*10)/10,
        C_sharp : Math.floor(freqEqual4.C_sharp * Math.pow(2, (deviation.C_sharp / 1200) )*10)/10,
        F_sharp : Math.floor(freqEqual4.F_sharp * Math.pow(2, (deviation.F_sharp / 1200) )*10)/10
    }

    return frequencies4;
}

export const thirdQ = (third: {[key: string]: string } ) => {

    let thirdQ : {[key: string]: number | null} = {
        A: csExp3rdStrToNumber(third.A),
        B: csExp3rdStrToNumber(third.B),
        C: csExp3rdStrToNumber(third.C),
        D: csExp3rdStrToNumber(third.D),
        E: csExp3rdStrToNumber(third.E),
        F: csExp3rdStrToNumber(third.F),
        G: csExp3rdStrToNumber(third.G),
        B_flat : csExp3rdStrToNumber(third.B_flat),
        E_flat : csExp3rdStrToNumber(third.E_flat),
        G_sharp : csExp3rdStrToNumber(third.G_sharp),
        C_sharp : csExp3rdStrToNumber(third.C_sharp),
        F_sharp : csExp3rdStrToNumber(third.F_sharp)
    }
    return thirdQ;
}

export const fifthQ = (fifth: {[key: string]: string} ) => {

    let fifthQ : {[key: string]: number | null} = {
        A: cpExp5thStrToNumber(fifth.A),
        B: cpExp5thStrToNumber(fifth.B),
        C: cpExp5thStrToNumber(fifth.C),
        D: cpExp5thStrToNumber(fifth.D),
        E: cpExp5thStrToNumber(fifth.E),
        F: cpExp5thStrToNumber(fifth.F),
        G: cpExp5thStrToNumber(fifth.G),
        B_flat : cpExp5thStrToNumber(fifth.B_flat),
        E_flat : cpExp5thStrToNumber(fifth.E_flat),
        G_sharp : cpExp5thStrToNumber(fifth.G_sharp),
        C_sharp : cpExp5thStrToNumber(fifth.C_sharp),
        F_sharp : cpExp5thStrToNumber(fifth.F_sharp)
    }
    return fifthQ;
}

export const fifthEqualQ = () => {

    let fifthQ : {[key: string]: number | null} = {
        A: -1,
        B: -1,
        C: -1,
        D: -1,
        E: -1,
        F: -1,
        G: -1,
        B_flat : -1,
        E_flat : -1,
        G_sharp : -1,
        C_sharp : -1,
        F_sharp : -1,
    }
    return fifthQ;
}

export const thirdEqualQ = () => {

    let thirdQ : {[key: string]: number | null} = {
        A: 7,
        B: 7,
        C: 7,
        D: 7,
        E: 7,
        F: 7,
        G: 7,
        B_flat : 7,
        E_flat : 7,
        G_sharp : 7,
        C_sharp : 7,
        F_sharp : 7,
    }
    return thirdQ;
}

export const selectedNoteFrequency = (freqs: {[key: string]: number}, note: ActiveNote ) => {
    let freq;
    switch (note.name) {
        case "A":
            freq = freqs.A;
            break;
        case "B":
            freq = freqs.B;
            break;
        case "C":
            freq = freqs.C;
            break;
        case "D":
            freq = freqs.D;
            break;
        case "E":
            freq = freqs.E;
            break;
        case "F":
            freq = freqs.F;
            break;
        case "G":
            freq = freqs.G;
            break;
        case "B_flat":
            freq = freqs.B_flat;
            break;
        case "E_flat":
            freq = freqs.E_flat;
            break;
        case "G_sharp":
            freq = freqs.G_sharp;
            break;
        case "C_sharp":
            freq = freqs.C_sharp;
            break;
        case "F_sharp":
            freq = freqs.F_sharp;
            break;   
        default:
            freq = 440;
            break;
    }
    if(note.state === StateList.octave){
        freq = 2*freq;
    }
    return freq;
}

export const convertNoteToString = (note : string) => {
    switch (note) {
        case "B_flat":
            return "B♭"
            break;
        case "E_flat":
            return "E♭"
            break;
        case "G_sharp":
            return "G♯"
            break;
        case "C_sharp":
            return "C♯"
            break;
        case "F_sharp":
            return "F♯"
            break;   
        default:
            return note
            break;
    }
}