import React from 'react';
const FifthCircleSVG: React.FC = () => {
  
  return (
    <>
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
    </>
  );



};
export default FifthCircleSVG;