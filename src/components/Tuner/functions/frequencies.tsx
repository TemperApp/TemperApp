import { ActiveNote, StateList } from "../TunerTypes";

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
            freq = freqs.A;
            break;
        case "E_flat":
            freq = freqs.A;
            break;
        case "G_sharp":
            freq = freqs.A;
            break;
        case "C_sharp":
            freq = freqs.A;
            break;
        case "F_sharp":
            freq = freqs.A;
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
