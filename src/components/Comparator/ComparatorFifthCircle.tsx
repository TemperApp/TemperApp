import React, { useContext } from 'react';
import './Comparator.css'
import { convertFifthQualityToColor } from '../../utils/colorCircle';
import SettingsContext from '../../store/settings-context';

type ComparatorFifthCircleProps = {
  qualityNote1: { [key: string]: number | null }
  qualityNote2: { [key: string]: number | null }
}

const ComparatorFifthCircle: React.FC<ComparatorFifthCircleProps> = ({ qualityNote1, qualityNote2 }) => {
  const settings = useContext(SettingsContext);

  return (
    <>
      <g id="Note_1_Quinte">
        <path data-name="C"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.C, settings.darkTheme)}       d="M245.82,28.99l-15.23,56.84c-10.36-3.02-21.31-4.63-32.63-4.63c-9.95,0-19.61,1.24-28.83,3.59l-14.95-55.8C168.79,25.08,184.15,23,200,23S231.21,25.08,245.82,28.99z"/>
        <path data-name="G"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.G, settings.darkTheme)}       d="M325.16,74.84l-42.62,42.62c-14.03-14.73-31.87-25.81-51.95-31.63l15.23-56.84C276.28,37.13,303.51,53.19,325.16,74.84z"/>
        <path data-name="D"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.D, settings.darkTheme)}       d="M371.01,154.18l-59.62,15.98c-4.9-20.11-15.03-38.18-28.85-52.7l42.62-42.62C346.81,96.49,362.87,123.72,371.01,154.18z"/>
        <path data-name="A"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.A, settings.darkTheme)}       d="M377,200c0,15.85-2.08,31.21-5.99,45.82l-60.62-16.24c2.83-10.06,4.34-20.66,4.34-31.62c0-9.58-1.15-18.89-3.34-27.8l59.62-15.98C374.92,168.79,377,184.15,377,200z"/>
        <path data-name="E"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.E, settings.darkTheme)}       d="M371.01,245.82c-8.14,30.46-24.2,57.69-45.85,79.34l-44.63-44.63c13.95-13.95,24.39-31.42,29.86-50.95L371.01,245.82z"/>
        <path data-name="B"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.B, settings.darkTheme)}       d="M325.16,325.16c-21.65,21.65-48.88,37.71-79.34,45.85l-16.24-60.62c19.53-5.47,37-15.91,50.95-29.86L325.16,325.16z"/>
        <path data-name="F_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.F_sharp, settings.darkTheme)} d="M245.82,371.01C231.21,374.92,215.85,377,200,377s-31.21-2.08-45.82-5.99l15.98-59.62c8.91,2.19,18.22,3.34,27.8,3.34c10.96,0,21.56-1.51,31.62-4.34L245.82,371.01z"/>
        <path data-name="C_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.C_sharp, settings.darkTheme)} d="M170.16,311.39l-15.98,59.62c-30.46-8.14-57.69-24.2-79.34-45.85l42.62-42.62C131.98,296.36,150.05,306.49,170.16,311.39z"/>
        <path data-name="G_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.G_sharp, settings.darkTheme)} d="M117.46,282.54l-42.62,42.62c-21.65-21.65-37.71-48.88-45.85-79.34l56.84-15.23C91.65,250.67,102.73,268.51,117.46,282.54z"/>
        <path data-name="E_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.E_flat, settings.darkTheme)}  d="M85.83,230.59l-56.84,15.23C25.08,231.21,23,215.85,23,200c0-15.85,2.08-31.21,5.99-45.82l55.8,14.95c-2.35,9.22-3.59,18.88-3.59,28.83C81.2,209.28,82.81,220.23,85.83,230.59z"/>
        <path data-name="B_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.B_flat, settings.darkTheme)}  d="M115.4,115.4c-14.61,14.61-25.37,33.07-30.61,53.73l-55.8-14.95c8.14-30.46,24.2-57.69,45.85-79.34L115.4,115.4z"/>
        <path data-name="F"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote1.F, settings.darkTheme)}       d="M169.13,84.79c-20.66,5.24-39.12,16-53.73,30.61L74.84,74.84c21.65-21.65,48.88-37.71,79.34-45.85L169.13,84.79z"/>
      </g>
      <g id="Note_2_Quinte">
        <path data-name="C"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.C, settings.darkTheme)}       d="M251.1,9.29l-5.28,19.7C231.21,25.08,215.85,23,200,23s-31.21,2.08-45.82,5.99l-5.28-19.7c15.41-4.13,30.24-6.45,45-6.95c0.98-0.03,1.97-0.05,2.95-0.07c1.05-0.02,2.1-0.03,3.15-0.03s2.1,0.01,3.15,0.03c0.98,0.02,1.97,0.04,2.95,0.07C220.86,2.84,235.69,5.16,251.1,9.29z"/>
        <path data-name="G"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.G, settings.darkTheme)}       d="M339.61,60.39l-14.45,14.45c-21.65-21.65-48.88-37.71-79.34-45.85l5.28-19.7C286.17,18.69,313.93,34.72,339.61,60.39z"/>
        <path data-name="D"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.D, settings.darkTheme)}       d="M390.71,148.9l-19.7,5.28c-8.14-30.46-24.2-57.69-45.85-79.34l14.45-14.45C365.28,86.07,381.31,113.83,390.71,148.9z"/>
        <path data-name="A"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.A, settings.darkTheme)}       d="M397.76,200c0,1.05-0.01,2.1-0.03,3.15c-0.02,0.98-0.04,1.97-0.07,2.95c-0.5,14.76-2.82,29.59-6.95,45l-19.7-5.28c3.91-14.61,5.99-29.97,5.99-45.82c0-15.85-2.08-31.21-5.99-45.82l19.7-5.28c4.13,15.41,6.45,30.24,6.95,45c0.03,0.98,0.05,1.97,0.07,2.95C397.75,197.9,397.76,198.95,397.76,200z"/>
        <path data-name="E"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.E, settings.darkTheme)}       d="M390.71,251.1c-9.4,35.07-25.43,62.83-51.1,88.51l-14.45-14.45c21.65-21.65,37.71-48.88,45.85-79.34L390.71,251.1z"/>
        <path data-name="B"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.B, settings.darkTheme)}       d="M339.61,339.61c-25.68,25.67-53.44,41.7-88.51,51.1l-5.28-19.7c30.46-8.14,57.69-24.2,79.34-45.85 L339.61,339.61z"/>
        <path data-name="F_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.F_sharp, settings.darkTheme)} d="M251.1,390.71c-15.41,4.13-30.24,6.45-45,6.95c-0.98,0.03-1.97,0.05-2.95,0.07c-1.05,0.02-2.1,0.03-3.15,0.03s-2.1-0.01-3.15-0.03c-0.98-0.02-1.97-0.04-2.95-0.07c-14.76-0.5-29.59-2.82-45-6.95l5.28-19.7c14.61,3.91,29.97,5.99,45.82,5.99s31.21-2.08,45.82-5.99L251.1,390.71z"/>
        <path data-name="C_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.C_sharp, settings.darkTheme)} d="M154.18,371.01l-5.28,19.7c-35.07-9.4-62.83-25.43-88.51-51.1l14.45-14.45C96.49,346.81,123.72,362.87,154.18,371.01z"/>
        <path data-name="G_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.G_sharp, settings.darkTheme)} d="M74.84,325.16l-14.45,14.45c-25.67-25.68-41.7-53.44-51.1-88.51l19.7-5.28C37.13,276.28,53.19,303.51,74.84,325.16z"/>
        <path data-name="E_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.E_flat, settings.darkTheme)}  d="M23,200c0,15.85,2.08,31.21,5.99,45.82l-19.7,5.28c-4.13-15.41-6.45-30.24-6.95-45c-0.03-0.98-0.05-1.97-0.07-2.95c-0.02-1.05-0.03-2.1-0.03-3.15s0.01-2.1,0.03-3.15c0.02-0.98,0.04-1.97,0.07-2.95c0.5-14.76,2.82-29.59,6.95-45l19.7,5.28C25.08,168.79,23,184.15,23,200z"/>
        <path data-name="B_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.B_flat, settings.darkTheme)}  d="M74.84,74.84c-21.65,21.65-37.71,48.88-45.85,79.34l-19.7-5.28 c9.4-35.07,25.43-62.83,51.1-88.51L74.84,74.84z"/>
        <path data-name="F"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualityNote2.F, settings.darkTheme)}       d="M154.18,28.99c-30.46,8.14-57.69,24.2-79.34,45.85L60.39,60.39c25.68-25.67,53.44-41.7,88.51-51.1 L154.18,28.99z"/>
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

export default ComparatorFifthCircle;
