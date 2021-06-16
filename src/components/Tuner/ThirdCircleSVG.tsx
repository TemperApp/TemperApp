import React from 'react';

const ThirdCircleSVG: React.FC = () => {

  return (
    <>
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
    </>
  );
};
export default ThirdCircleSVG;