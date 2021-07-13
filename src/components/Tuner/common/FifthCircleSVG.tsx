import React, { useContext } from 'react';
import SettingsContext from '../../../store/settings-context';
import { convertFifthQualityToColor } from '../../../utils/colorCircle';

const FifthCircleSVG: React.FC<{ qualities: { [key: string]: number | null } }> = ({ qualities }) => {
  const settings = useContext(SettingsContext);
  
  console.info('🔹 [FifthCircleSVG]: Render')
  return (
    <>
      <g id="Fifth">
        
        <path data-name="C"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.C, settings.darkTheme)}       d="M226.15,7.71l-7,25.93a152.2,152.2,0,0,0-78.59.36l-7-25.94A179.38,179.38,0,0,1,226.15,7.71Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="G"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.G, settings.darkTheme)}       d="M306.39,53.94,287.53,72.8A150.79,150.79,0,0,0,219.2,33.64l7-25.93A177.29,177.29,0,0,1,289.41,38.8l.27.21,1.11.88A196.43,196.43,0,0,1,306.39,53.94Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="D"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.D, settings.darkTheme)}       d="M306.39,53.94c23.27,23.27,37.79,48.43,46.31,80.22L327.09,141a150.85,150.85,0,0,0-39.27-67.93l-.29-.29Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="A"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.A, settings.darkTheme)}       d="M352.7,134.16a178,178,0,0,1,6.39,46.19v.19c0,.93,0,1.86,0,2.79s-.05,1.9-.08,2.85-.08,1.9-.12,2.85a182.76,182.76,0,0,1-6.17,37.76L327,219.91a152.49,152.49,0,0,0,.06-78.89Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="E"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.E, settings.darkTheme)}       d="M352.7,226.79a187.23,187.23,0,0,1-9.83,28c-.21.48-.43,1-.65,1.43h0a178.11,178.11,0,0,1-27.51,41.94l-2.16,2.41-1.9,2c-.63.67-1.26,1.33-1.9,2-.44.45-.87.9-1.32,1.34-.2.22-.41.43-.63.65l-.41.41-19-19,.41-.41A150.94,150.94,0,0,0,327,219.91Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="B"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.B, settings.darkTheme)}       d="M287.41,288l19,19c-.43.43-.86.84-1.28,1.27l-.35.35a1.9,1.9,0,0,1-.21.19A177.57,177.57,0,0,1,226.09,353l-7-25.94A151,151,0,0,0,287.41,288Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="F_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.F_sharp, settings.darkTheme)} d="M219.14,327.07l7,25.94a179.24,179.24,0,0,1-92.37-.36l6.95-25.93A152.39,152.39,0,0,0,219.14,327.07Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="C_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.C_sharp, settings.darkTheme)} d="M140.67,326.72l-6.95,25.93a177.67,177.67,0,0,1-79.4-46.06L54,306.3l19-19,.29.29A151.1,151.1,0,0,0,140.67,326.72Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="G_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.G_sharp, settings.darkTheme)} d="M34,219.56a151,151,0,0,0,39,67.76l-19,19a177.77,177.77,0,0,1-46-79.79Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="E_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.E_flat, settings.darkTheme)}  d="M34,141.38a152.36,152.36,0,0,0,0,78.18L8.07,226.51A179.42,179.42,0,0,1,8,134.43Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="B_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.B_flat, settings.darkTheme)}  d="M53.91,54.52l19,19A150.83,150.83,0,0,0,34,141.38L8,134.43A177.73,177.73,0,0,1,53.91,54.52Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="F"       stroke="var(--color-hover)" strokeWidth="1" fill={convertFifthQualityToColor(qualities.F, settings.darkTheme)}       d="M133.66,8.06l7,25.94A150.72,150.72,0,0,0,73.3,73.09l-.41.41-19-19,.41-.41A177.7,177.7,0,0,1,133.66,8.06Z" transform="translate(-2.04 -1.82)"/>
      </g>
    </>
  );
};

export default FifthCircleSVG;
