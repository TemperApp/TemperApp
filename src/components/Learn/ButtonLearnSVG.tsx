import React from "react";

const ButtonLearnSVG: React.FC = () => {
  return (
    <>
      <g id="ButtonLearn">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="0"
              x2="80.8333"
              y2="112.083"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE0B1" />
              <stop offset="0.443904" stop-color="#FFC09F" />
              <stop offset="1" stop-color="#F88F8F" stop-opacity="0.87" />
            </linearGradient>
          </defs>
        </svg>
      </g>
    </>
  );
};

export default ButtonLearnSVG;
