import React, { useContext } from 'react';
import './Comparator.css'
import { convertFifthQualityToColor, convertThirdQualityToColor } from '../../utils/colorCircle';
import SettingsContext from '../../store/settings-context';

type ComparatorTemp1CircleProps = {
  qualityNoteQ: { [key: string]: number | null }
  qualityNoteT: { [key: string]: number | null }
}

const ComparatorTemp1Circle: React.FC<ComparatorTemp1CircleProps> = ({ qualityNoteQ, qualityNoteT }) => {
  const settings = useContext(SettingsContext);

  return (
    <>
      {/* anneau intérieur interne*/}
      <g id="Note_1_Tierce">
        <path data-name="C"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.C, settings.darkTheme)}       d="M225.22,105.89l-5.38,20.06c-6.92-2.1-14.27-3.23-21.88-3.23c-6.24,0-12.29,0.76-18.08,2.19l-5.37-20.06c7.5-1.89,15.36-2.89,23.45-2.89C207.43,101.96,216.58,103.33,225.22,105.89z"/>
        <path data-name="G"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.G, settings.darkTheme)}       d="M267.85,132.15l-14.69,14.69c-8.94-9.66-20.39-16.97-33.32-20.89l5.38-20.06C241.72,110.76,256.36,119.95,267.85,132.15z"/>
        <path data-name="D"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.D, settings.darkTheme)}       d="M291.33,175.53l-20.07,5.38c-2.99-12.96-9.35-24.64-18.1-34.07l14.69-14.69C279.13,144.12,287.37,158.99,291.33,175.53z"/>
        <path data-name="A"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.A, settings.darkTheme)}       d="M293.97,197.96c0,9.1-1.27,17.91-3.63,26.25l-20.06-5.38c1.91-6.63,2.93-13.63,2.93-20.87c0-5.87-0.67-11.57-1.95-17.05l20.07-5.38C293.06,182.72,293.97,190.24,293.97,197.96z"/>
        <path data-name="E"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.E, settings.darkTheme)}       d="M290.34,224.21c-4.53,15.96-13.08,30.23-24.49,41.64l-14.68-14.68c8.87-8.87,15.54-19.95,19.11-32.34L290.34,224.21z"/>
        <path data-name="B"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.B, settings.darkTheme)}       d="M265.85,265.85c-11.41,11.41-25.68,19.96-41.64,24.49l-5.38-20.06c12.39-3.57,23.47-10.24,32.34-19.11L265.85,265.85z"/>
        <path data-name="F_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.F_sharp, settings.darkTheme)} d="M224.21,290.34c-8.34,2.36-17.15,3.63-26.25,3.63c-7.72,0-15.24-0.91-22.43-2.64l5.38-20.07c5.48,1.28,11.18,1.95,17.05,1.95c7.24,0,14.24-1.02,20.87-2.93L224.21,290.34z"/>
        <path data-name="C_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.C_sharp, settings.darkTheme)} d="M180.91,271.26l-5.38,20.07c-16.54-3.96-31.41-12.2-43.38-23.48l14.69-14.69C156.27,261.91,167.95,268.27,180.91,271.26z"/>
        <path data-name="G_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.G_sharp, settings.darkTheme)} d="M125.95,219.84l-20.06,5.38c4.87,16.5,14.06,31.14,26.26,42.63l14.69-14.69C137.18,244.22,129.87,232.77,125.95,219.84z"/>
        <path data-name="E_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.E_flat, settings.darkTheme)}  d="M125.95,219.84l-20.06,5.38c-2.56-8.64-3.93-17.79-3.93-27.26c0-8.09,1-15.95,2.89-23.45l20.06,5.37c-1.43,5.79-2.19,11.84-2.19,18.08C122.72,205.57,123.85,212.92,125.95,219.84z"/>
        <path data-name="B_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.B_flat, settings.darkTheme)}  d="M144.76,144.76c-9.53,9.53-16.52,21.6-19.85,35.12l-20.06-5.37c4.28-17.09,13.15-32.36,25.23-44.43L144.76,144.76z"/>
        <path data-name="F"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualityNoteT.F, settings.darkTheme)}       d="M179.88,124.91c-13.52,3.33-25.59,10.32-35.12,19.85l-14.68-14.68c12.07-12.08,27.34-20.95,44.43-25.23L179.88,124.91z"/>
      </g>
      {/* anneau intérieur externe*/}
      <g id="Note_1_Quinte">
        <path data-name="C"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.C, settings.darkTheme)}       d="M230.59,85.83l-5.37,20.06c-8.64-2.56-17.79-3.93-27.26-3.93c-8.09,0-15.95,1-23.45,2.89l-5.38-20.06c9.22-2.35,18.88-3.59,28.83-3.59C209.28,81.2,220.23,82.81,230.59,85.83z"/>
        <path data-name="G"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.G, settings.darkTheme)}       d="M282.54,117.46l-14.69,14.69c-11.49-12.2-26.13-21.39-42.63-26.26l5.37-20.06C250.67,91.65,268.51,102.73,282.54,117.46z"/>
        <path data-name="D"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.D, settings.darkTheme)}       d="M311.39,170.16l-20.06,5.37c-3.96-16.54-12.2-31.41-23.48-43.38l14.69-14.69C296.36,131.98,306.49,150.05,311.39,170.16z"/>
        <path data-name="A"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.A, settings.darkTheme)}       d="M314.73,197.96c0,10.96-1.51,21.56-4.34,31.62l-20.05-5.37c2.36-8.34,3.63-17.15,3.63-26.25c0-7.72-0.91-15.24-2.64-22.43l20.06-5.37C313.58,179.07,314.73,188.38,314.73,197.96z"/>
        <path data-name="E"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.E, settings.darkTheme)}       d="M310.39,229.58c-5.47,19.53-15.91,37-29.86,50.95l-14.68-14.68c11.41-11.41,19.96-25.68,24.49-41.64L310.39,229.58z"/>
        <path data-name="B"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.B, settings.darkTheme)}       d="M280.53,280.53c-13.95,13.95-31.42,24.39-50.95,29.86l-5.37-20.05c15.96-4.53,30.23-13.08,41.64-24.49L280.53,280.53z"/>
        <path data-name="F_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.F_sharp, settings.darkTheme)} d="M229.58,310.39c-10.06,2.83-20.66,4.34-31.62,4.34c-9.58,0-18.89-1.15-27.8-3.34l5.37-20.06c7.19,1.73,14.71,2.64,22.43,2.64c9.1,0,17.91-1.27,26.25-3.63L229.58,310.39z"/>
        <path data-name="C_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.C_sharp, settings.darkTheme)} d="M175.53,291.33l-5.37,20.06c-20.11-4.9-38.18-15.03-52.7-28.85l14.69-14.69C144.12,279.13,158.99,287.37,175.53,291.33z"/>
        <path data-name="G_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.G_sharp, settings.darkTheme)} d="M132.2,267.8l-14.7,14.7c-14.7-14-25.8-31.9-31.6-52l20.1-5.4 C110.8,241.7,120,256.4,132.2,267.8z"/>
        <path data-name="E_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.E_flat, settings.darkTheme)}  d="M105.89,225.22l-20.06,5.37c-3.02-10.36-4.63-21.31-4.63-32.63c0-9.95,1.24-19.61,3.59-28.83l20.06,5.38c-1.89,7.5-2.89,15.36-2.89,23.45C101.96,207.43,103.33,216.58,105.89,225.22z"/>
        <path data-name="B_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.B_flat, settings.darkTheme)}  d="M130.08,130.08c-12.08,12.07-20.95,27.34-25.23,44.43l-20.06-5.38c5.24-20.66,16-39.12,30.61-53.73L130.08,130.08z"/>
        <path data-name="F"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNoteQ.F, settings.darkTheme)}       d="M174.51,104.85c-17.09,4.28-32.36,13.15-44.43,25.23L115.4,115.4c14.61-14.61,33.07-25.37,53.73-30.61L174.51,104.85z"/>
      </g>
      <g id="ComparatorNotes">
        <path
          fill="none"
          d="M200,43.76c-86.29,0-156.24,69.95-156.24,156.24S113.71,356.24,200,356.24S356.24,286.29,356.24,200
          S286.29,43.76,200,43.76z M197.96,273.21c-41.55,0-75.24-33.69-75.24-75.25c0-41.55,33.69-75.24,75.24-75.24
          c41.56,0,75.25,33.69,75.25,75.24C273.21,239.52,239.52,273.21,197.96,273.21z"
        />
      </g>
    </>
  );
};

export default ComparatorTemp1Circle;
