import { relative } from 'path';
import React from 'react';

const ThirdCircleSVG: React.FC = () => {

  const test = [-1.24, 2.52, 1.41, 18.95, 4.25, 28, 14.59, 8.75, 2.25, 45.26, 9, 7.99];
  
  const convertQualityToColor = ( quality : number) => {

    switch (Math.max(Math.min(Math.floor(quality),20),-1)) {
      case -1:
        return "#B9B9B9";
      case 0 :
        return "#45CBC7";
      case 1 :
        return "#FFEDD0";
      case 2 : 
        return "#FFE9C6";
      case 3 : 
        return "#FFE5BC";
      case 4 : 
        return "#FFE1B1";
      case 5 : 
        return "#FFDDA7";
      case 6 : 
        return "#FFDA9E";
      case 7 : 
        return "#FFD694";
      case 8 : 
        return "#FFD289";
      case 9 : 
        return "#FFC77D";
      case 10 : 
        return "#FFA669";
      case 11 : 
        return "#FF8654";
      case 12 : 
        return "#FF6741";
      case 13 : 
        return "#FF472D";
      case 14 : 
        return "#FF2416";
      case 15 : 
        return "#FF0604";
      case 16 : 
        return "#EB0000";
      case 17 : 
        return "#D40000";
      case 18 : 
        return "#BC0000";
      case 19 : 
        return "#A60000";
      case 20 : 
        return "#8A0000";
      default:
        return "#B9B9B9";
    }
  }


  return (
    <>
      <g id="Third">
        <path id="G_sharp" fill={convertQualityToColor(test[0])} d="M34,219.56a151,151,0,0,0,39,67.76l-19,19a177.77,177.77,0,0,1-46-79.79Z" transform="translate(-2.04 -1.82)"/>
        <path id="C_sharp" fill={convertQualityToColor(test[1])} d="M140.67,326.72l-6.95,25.93a177.67,177.67,0,0,1-79.4-46.06L54,306.3l19-19,.29.29A151.1,151.1,0,0,0,140.67,326.72Z" transform="translate(-2.04 -1.82)"/>
        <path id="F_sharp" fill={convertQualityToColor(test[2])} d="M219.14,327.07l7,25.94a179.24,179.24,0,0,1-92.37-.36l6.95-25.93A152.39,152.39,0,0,0,219.14,327.07Z" transform="translate(-2.04 -1.82)"/>
        <path id="B" fill={convertQualityToColor(test[3])} d="M287.41,288l19,19c-.43.43-.86.84-1.28,1.27l-.35.35a1.9,1.9,0,0,1-.21.19A177.57,177.57,0,0,1,226.09,353l-7-25.94A151,151,0,0,0,287.41,288Z" transform="translate(-2.04 -1.82)"/>
        <path id="E" fill={convertQualityToColor(test[4])} d="M352.7,226.79a187.23,187.23,0,0,1-9.83,28c-.21.48-.43,1-.65,1.43h0a178.11,178.11,0,0,1-27.51,41.94l-2.16,2.41-1.9,2c-.63.67-1.26,1.33-1.9,2-.44.45-.87.9-1.32,1.34-.2.22-.41.43-.63.65l-.41.41-19-19,.41-.41A150.94,150.94,0,0,0,327,219.91Z" transform="translate(-2.04 -1.82)"/>
        <path id="A" fill={convertQualityToColor(test[5])} d="M352.7,134.16a178,178,0,0,1,6.39,46.19v.19c0,.93,0,1.86,0,2.79s-.05,1.9-.08,2.85-.08,1.9-.12,2.85a182.76,182.76,0,0,1-6.17,37.76L327,219.91a152.49,152.49,0,0,0,.06-78.89Z" transform="translate(-2.04 -1.82)"/>
        <path id="D" fill={convertQualityToColor(test[6])} d="M306.39,53.94c23.27,23.27,37.79,48.43,46.31,80.22L327.09,141a150.85,150.85,0,0,0-39.27-67.93l-.29-.29Z" transform="translate(-2.04 -1.82)"/>
        <path id="G" fill={convertQualityToColor(test[7])} d="M306.39,53.94,287.53,72.8A150.79,150.79,0,0,0,219.2,33.64l7-25.93A177.29,177.29,0,0,1,289.41,38.8l.27.21,1.11.88A196.43,196.43,0,0,1,306.39,53.94Z" transform="translate(-2.04 -1.82)"/>
        <path id="C" fill={convertQualityToColor(test[8])} d="M226.15,7.71l-7,25.93a152.2,152.2,0,0,0-78.59.36l-7-25.94A179.38,179.38,0,0,1,226.15,7.71Z" transform="translate(-2.04 -1.82)"/>
        <path id="F" fill={convertQualityToColor(test[9])} d="M133.66,8.06l7,25.94A150.72,150.72,0,0,0,73.3,73.09l-.41.41-19-19,.41-.41A177.7,177.7,0,0,1,133.66,8.06Z" transform="translate(-2.04 -1.82)"/>
        <path id="B_flat" fill={convertQualityToColor(test[10])} d="M53.91,54.52l19,19A150.83,150.83,0,0,0,34,141.38L8,134.43A177.73,177.73,0,0,1,53.91,54.52Z" transform="translate(-2.04 -1.82)"/>
        <path id="E_flat" fill={convertQualityToColor(test[11])} d="M34,141.38a152.36,152.36,0,0,0,0,78.18L8.07,226.51A179.42,179.42,0,0,1,8,134.43Z" transform="translate(-2.04 -1.82)"/>
      </g>
{/* 
      <path fill="url(#third_color)" d="M331.567 181.5c0 83.671-67.828 151.5-151.5 151.5-83.67 0-151.5-67.829-151.5-151.5S96.397 30 180.067 30c83.672 0 151.5 67.829 151.5 151.5zm-280.275 0c0 71.12 57.655 128.775 128.775 128.775 71.121 0 128.775-57.655 128.775-128.775 0-71.121-57.654-128.775-128.775-128.775-71.12 0-128.775 57.654-128.775 128.775z"/>
      <defs>
        <radialGradient id="third_color" cx="0" cy="0" r="1" gradientTransform="matrix(-151.5 0 0 -6342.09 180.067 180.205)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#45CBC7"/>
          <stop offset=".316" stopColor="#FFD592"/>
          <stop offset=".691" stopColor="#FF764A"/>
          <stop offset="1" stopColor="#FF321F"/>
          <stop offset="1" stopColor="#A22418"/>
          <stop offset="1" stopColor="#4F0000"/>
        </radialGradient>
      </defs>
*/}
    </>
  );
};
export default ThirdCircleSVG;