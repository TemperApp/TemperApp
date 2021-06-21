import React from 'react';
const FifthCircleSVG: React.FC = () => {
  
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
    

    <g id="Fifth">
        <path id="E-2" data-name="E" fill="#DBA7D8" d="M272.9,205.41A95.14,95.14,0,0,1,248.21,248l-.42.41-13.28-13.28.42-.41a76.63,76.63,0,0,0,19.84-34.17Z" transform="translate(-2.04 -1.82)"/>
        <path id="B-2" data-name="B" fill="#DBA7D8" d="M234.51,235.13l13.28,13.28A95.15,95.15,0,0,1,204.63,273l-4.85-18.14A76.49,76.49,0,0,0,234.51,235.13Z" transform="translate(-2.04 -1.82)"/>
        <path id="F_sharp-2" data-name="F_sharp" fill="#DBA7D8" d="M199.78,254.81,204.63,273a95.9,95.9,0,0,1-49.46-.36L160,254.46A77.27,77.27,0,0,0,199.78,254.81Z" transform="translate(-2.04 -1.82)"/>
        <path id="C_sharp-2" data-name="C_sharp" fill="#DBA7D8" d="M160,254.46l-4.87,18.13A95.24,95.24,0,0,1,112.91,248l-.29-.29,13.29-13.29.28.3A76.62,76.62,0,0,0,160,254.46Z" transform="translate(-2.04 -1.82)"/>
        <path id="G_sharp-2" data-name="G_sharp" fill="#DBA7D8" d="M106.27,200.19a76.39,76.39,0,0,0,19.64,34.23l-13.29,13.29a95.19,95.19,0,0,1-24.49-42.66Z" transform="translate(-2.04 -1.82)"/>
        <path id="E_flat-2" data-name="E_flat" fill="#DBA7D8" d="M106.2,160.74a77.13,77.13,0,0,0,.07,39.45l-18.14,4.86a95.9,95.9,0,0,1-.06-49.18Z" transform="translate(-2.04 -1.82)"/>
        <path id="B_flat-2" data-name="B_flat" fill="#DBA7D8" d="M112.5,113.12l13.28,13.28a76.46,76.46,0,0,0-19.58,34.33h0l-18.13-4.87A95.11,95.11,0,0,1,112.5,113.12Z" transform="translate(-2.04 -1.82)"/>
        <path id="F-2" data-name="F" fill="#DBA7D8" d="M155.11,88.11,160,106.25A76.58,76.58,0,0,0,126.19,126l-.41.42L112.5,113.12l.41-.42A95.2,95.2,0,0,1,155.11,88.11Z" transform="translate(-2.04 -1.82)"/>
        <path id="C-2" data-name="C" fill="#DBA7D8" d="M204.7,87.76l-4.86,18.14a77.12,77.12,0,0,0-39.87.35l-4.86-18.14A96,96,0,0,1,204.7,87.76Z" transform="translate(-2.04 -1.82)"/>
        <path id="G-2" data-name="G" fill="#DBA7D8" d="M247.92,112.41l-13.28,13.28a76.37,76.37,0,0,0-34.8-19.79l4.86-18.14A95.19,95.19,0,0,1,247.92,112.41Z" transform="translate(-2.04 -1.82)"/>
        <path id="D-2" data-name="D" fill="#DBA7D8" d="M247.92,112.41l.29.29A95.15,95.15,0,0,1,273,155.53l-18.14,4.85a76.44,76.44,0,0,0-19.9-34.4l-.29-.29Z" transform="translate(-2.04 -1.82)"/>
        <path id="A-2" data-name="A" fill="#DBA7D8" d="M254.83,160.38a77.3,77.3,0,0,1-.06,40.17l18.13,4.86h0a96.1,96.1,0,0,0,.06-49.88Z" transform="translate(-2.04 -1.82)"/>
    </g>
{/*
      <path fill="url(#fifth_color)" d="M261.567 181c0 44.735-36.265 81-81 81s-81-36.265-81-81 36.265-81 81-81 81 36.265 81 81zm-142.56 0c0 33.999 27.562 61.56 61.56 61.56 33.999 0 61.56-27.561 61.56-61.56s-27.561-61.56-61.56-61.56c-33.998 0-61.56 27.561-61.56 61.56z"/>
      <defs>
        <radialGradient id="fifth_color" cx="0" cy="0" r="1" gradientTransform="matrix(0 81 -81 0 180.567 181)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#45CBC7"/>
          <stop offset=".248" stopColor="#45CBC7"/>
          <stop offset=".482" stopColor="#FFE9C6"/>
          <stop offset=".795" stopColor="#FF8654"/>
          <stop offset=".878" stopColor="#FF0604"/>
          <stop offset=".951" stopColor="#FF0604"/>
        </radialGradient>
      </defs>
*/}
    </>
  );



};
export default FifthCircleSVG;