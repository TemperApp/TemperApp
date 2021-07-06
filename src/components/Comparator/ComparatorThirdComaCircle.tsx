import React from 'react';

//Style
import './Comparator.css'
import { convertThirdQualityToColor } from '../../utils/colorCircle';
import { Temperament } from '../../model/Temperament/Temperament';

type ComparatorThirdComaCircleProps = {
  temperament1: Temperament,
  temperament2: Temperament,
  qualityNote1: { [key: string]: number | null }
  qualityNote2: { [key: string]: number | null }
}

const ComparatorThirdComaCircle: React.FC<ComparatorThirdComaCircleProps> = ({ temperament1, temperament2, qualityNote1, qualityNote2 }) => {

  return (
    <>
      <g id="Note_2_Tierce">
        <path data-name="F"       fill={convertThirdQualityToColor(qualityNote2.F)}       d="M310.683 135.505C316.543 155.893 316.933 177.463 311.815 198.049L280.804 190.354C284.572 175.2 284.284 159.323 279.971 144.316L310.683 135.505Z"/>
        <path data-name="B_flat"  fill={convertThirdQualityToColor(qualityNote2.B_flat)}  d="M312.097 196.891C307.182 217.527 296.923 236.509 282.347 251.932L258.988 229.898C269.696 218.566 277.233 204.621 280.844 189.461L312.097 196.891Z"/>
        <path data-name="E_flat"  fill={convertThirdQualityToColor(qualityNote2.E_flat)}  d="M282.257 252.028C267.286 267.836 248.323 279.316 227.368 285.258L218.595 254.372C233.988 250.007 247.918 241.574 258.915 229.962L282.257 252.028Z"/>
        <path data-name="G_sharp" fill={convertThirdQualityToColor(qualityNote2.G_sharp)} d="M227.382 285.254C206.825 291.085 185.09 291.377 164.384 286.099L172.378 254.792C187.554 258.66 203.483 258.446 218.549 254.172L227.382 285.254Z"/>
        <path data-name="C_sharp" fill={convertThirdQualityToColor(qualityNote2.C_sharp)} d="M164.462 286.119C143.586 280.813 124.504 270.038 109.186 254.905L131.79 232.065C143.041 243.179 157.055 251.093 172.388 254.991L164.462 286.119Z"/>
        <path data-name="F_sharp" fill={convertThirdQualityToColor(qualityNote2.F_sharp)} d="M109.291 255.008C94.1753 240.112 83.2463 221.507 77.6001 201.059L108.868 192.44C113.002 207.41 121.003 221.031 132.069 231.936L109.291 255.008Z"/>
        <path data-name="B"       fill={convertThirdQualityToColor(qualityNote2.B)}       d="M77.8437 201.929C72.0448 181.523 71.7186 159.953 76.8978 139.381L108.68 147.369C104.902 162.372 105.14 178.103 109.369 192.986L77.8437 201.929Z"/>
        <path data-name="E"       fill={convertThirdQualityToColor(qualityNote2.E)}       d="M107.318 84.7601C122.16 69.4407 140.79 58.3127 161.322 52.5032L170.224 83.9071C155.232 88.149 141.628 96.2745 130.792 107.46L107.318 84.7601Z"/>
        <path data-name="A"       fill={convertThirdQualityToColor(qualityNote2.A)}       d="M76.9162 139.308C82.1083 118.74 92.6225 99.8979 107.404 84.6714L131.128 107.661C120.382 118.731 112.737 132.43 108.963 147.383L76.9162 139.308Z"/>
        <path data-name="D"       fill={convertThirdQualityToColor(qualityNote2.D)}       d="M161.244 52.5254C181.972 46.6456 203.894 46.3988 224.749 51.8105L216.663 82.9158C201.349 78.9418 185.25 79.123 170.03 83.4407L161.244 52.5254Z"/>
        <path data-name="G"       fill={convertThirdQualityToColor(qualityNote2.G)}       d="M224.575 51.7654C245.132 57.0673 263.932 67.677 279.09 82.5301L256.528 105.513C245.404 94.613 231.607 86.8269 216.521 82.936L224.575 51.7654Z"/>
        <path data-name="C"       fill={convertThirdQualityToColor(qualityNote2.C)}       d="M278.515 81.9703C293.771 96.7226 304.876 115.224 310.715 135.618L279.874 144.433C275.581 129.443 267.419 115.844 256.205 105L278.515 81.9703Z"/>    
      </g>
      <g id="Note_1_Tierce">
        <path data-name="C_sharp" fill={convertThirdQualityToColor(qualityNote1.C_sharp)} d="M278.327 144.787C282.557 159.507 282.839 175.079 279.144 189.941L247.934 182.196C250.27 172.802 250.092 162.959 247.418 153.655L278.327 144.787Z"/>
        <path data-name="F_sharp" fill={convertThirdQualityToColor(qualityNote1.F_sharp)} d="M279.348 189.105C275.8 204.003 268.393 217.707 257.87 228.843L234.431 206.733C241.073 199.704 245.748 191.054 247.988 181.65L279.348 189.105Z"/>
        <path data-name="B"       fill={convertThirdQualityToColor(qualityNote1.B)}       d="M257.804 228.912C246.996 240.324 233.306 248.612 218.177 252.902L209.596 222.691C219.284 219.944 228.051 214.636 234.973 207.327L257.804 228.912Z"/>
        <path data-name="E"       fill={convertThirdQualityToColor(qualityNote1.E)}       d="M218.187 252.899C203.346 257.109 187.655 257.32 172.706 253.51L180.559 222.753C190.075 225.178 200.063 225.044 209.509 222.364L218.187 252.899Z"/>
        <path data-name="A"       fill={convertThirdQualityToColor(qualityNote1.A)}       d="M172.762 253.524C157.69 249.693 143.914 241.914 132.855 230.989L155.063 208.549C162.126 215.526 170.924 220.494 180.549 222.941L172.762 253.524Z"/>
        <path data-name="D"       fill={convertThirdQualityToColor(qualityNote1.D)}       d="M132.931 231.063C122.018 220.309 114.128 206.877 110.051 192.114L140.221 183.799C142.838 193.276 147.903 201.898 154.908 208.802L132.931 231.063Z"/>
        <path data-name="G"       fill={convertThirdQualityToColor(qualityNote1.G)}       d="M110.227 192.742C106.041 178.01 105.805 162.437 109.544 147.586L141.176 155.535C138.832 164.845 138.979 174.607 141.604 183.841L110.227 192.742Z"/>
        <path data-name="C"       fill={convertThirdQualityToColor(qualityNote1.C)}       d="M131.507 108.152C142.222 97.0918 155.672 89.0578 170.495 84.8637L180.157 118.949C171.347 121.442 163.353 126.217 156.984 132.79L131.507 108.152Z"/>
        <path data-name="F"       fill={convertThirdQualityToColor(qualityNote1.F)}       d="M109.558 147.533C113.306 132.684 120.897 119.081 131.569 108.088L156.039 131.8C149.529 138.506 144.899 146.804 142.612 155.862L109.558 147.533Z"/>
        <path data-name="B_flat"  fill={convertThirdQualityToColor(qualityNote1.B_flat)}  d="M170.439 84.8797C185.403 80.6347 201.23 80.4566 216.286 84.3636L207.39 118.587C198.429 116.261 189.01 116.367 180.105 118.894L170.439 84.8797Z"/>
        <path data-name="E_flat"  fill={convertThirdQualityToColor(qualityNote1.E_flat)}  d="M216.161 84.331C231.002 88.1588 244.575 95.8185 255.518 106.542L233.101 129.377C226.166 122.581 217.564 117.727 208.159 115.301L216.161 84.331Z"/>
        <path data-name="G_sharp" fill={convertThirdQualityToColor(qualityNote1.G_sharp)} d="M255.103 106.138C266.117 116.788 274.134 130.145 278.35 144.869L246.352 154.015C243.742 144.897 238.777 136.626 231.957 130.031L255.103 106.138Z"/>
      </g>
      <g id="Texte" fill="var(--color-contrast)">
        <text
          transform="matrix(1 0 0 1 194.88 40)"
          className="st22 st23"
        >C</text>
        <text
          transform="matrix(1 0 0 1 257.29 57.8)"
          className="st22 st23"
        >G</text>
        <text
          transform="matrix(1 0 0 1 303.84 92.54)"
          className="st22 st23"
        >D</text>
        <text
          transform="matrix(1 0 0 1 325.586 169.836)"
          className="st22 st23"
        >A</text>
        <text
          transform="matrix(1 0 0 1 309.477 239.581)"
          className="st22 st23"
        >E</text>
        <text
          transform="matrix(1 0 0 1 263.764 290.8)"
          className="st22 st23"
        >B</text>
        <text
          transform="matrix(1 0 0 1 187.301 311.505)"
          className="st22 st23"
        >F#</text>
        <text
          transform="matrix(1 0 0 1 121.472 291.01)"
          className="st22 st23"
        >C#</text>
        <text
          transform="matrix(1 0 0 1 70.4448 239.791)"
          className="st22 st23"
        >G#</text>
        <text
          transform="matrix(1 0 0 1 50.5513 170.926)"
          className="st22 st23"
        >Eb</text>
        <text
          transform="matrix(1 0 0 1 68.1022 105.54)"
          className="st22 st23"
        >Bb</text>
        <text
          transform="matrix(1 0 0 1 122.729 57.5903)"
          className="st22 st23"
        >F</text>
      </g>
      <g>
        <line y1="-0.5" x2="245.215" y2="-0.5" transform="matrix(0.267961 0.963234 -0.963722 0.267614 162.311 51.3848)" stroke="var(--color-light-grey)"/>
        <line y1="-0.5" x2="244.441" y2="-0.5" transform="matrix(-0.237541 0.970976 -0.971832 -0.237322 223.322 50.1675)" stroke="var(--color-light-grey)"/>
        <line y1="-0.5" x2="245.354" y2="-0.5" transform="matrix(-0.691565 0.722024 -0.72295 -0.691204 279.874 80.4639)" stroke="var(--color-light-grey)"/>
        <line y1="-0.5" x2="244.554" y2="-0.5" transform="matrix(-0.962032 0.273613 -0.273969 -0.961547 312.995 135.601)" stroke="var(--color-light-grey)"/>
        <line y1="-0.5" x2="244.104" y2="-0.5" transform="matrix(-0.725332 -0.688708 0.689068 -0.724404 284.834 252.513)" stroke="var(--color-light-grey)"/>
        <line y1="-0.5" x2="245.176" y2="-0.5" transform="matrix(0.969311 0.24742 -0.247646 0.968448 76.6538 138.545)" stroke="var(--color-light-grey)"/>
        <ellipse cx="194.698" cy="169.458" rx="56.1734" ry="56.1228" fill="var(--color-theme)"/>
      </g>
      <g className="comas-text" fill="var(--color-contrast)">
        <text
          transform="matrix(1 0 0 1 184.981 62.501)"
        >{temperament1.cpExp5th.C}</text>
        <text
          transform="matrix(1 0 0 1 238.428 75.578)"
        >{temperament1.cpExp5th.G}</text>
        <text
          transform="matrix(1 0 0 1 277.149 112.63)"
        >{temperament1.cpExp5th.A}</text>
        <text
          transform="matrix(1 0 0 1 290.783 164.939)"
        >{temperament1.cpExp5th.A}</text>
        <text
          transform="matrix(1 0 0 1 276.604 215.068)"
        >{temperament1.cpExp5th.E}</text>
        <text
          transform="matrix(1 0 0 1 240.146 257.569)"
        >{temperament1.cpExp5th.B}</text>
        <text
          transform="matrix(1 0 0 1 188.126 270.645)"
        >{temperament1.cpExp5th.F_sharp}</text>
        <text
          transform="matrix(1 0 0 1 135.968 257.567)"
        >{temperament1.cpExp5th.C_sharp}</text>
        <text
          transform="matrix(1 0 0 1 97.7099 219.426)"
        >{temperament1.cpExp5th.G_sharp}</text>
        <text
          transform="matrix(1 0 0 1 79.9238 168.207)"
        >{temperament1.cpExp5th.E_flat}</text>
        <text
          transform="matrix(1 0 0 1 93.9039 112.63)"
        >{temperament1.cpExp5th.B_flat}</text>
        <text
          transform="matrix(1 0 0 1 131.535 75.5785)"
        >{temperament1.cpExp5th.F}</text>
      </g>
      <g className="comas-text" fill="var(--color-contrast)">
        <text
          transform="matrix(1 0 0 1 225.368 102.823)"
        >{temperament2.cpExp5th.G}</text>
        <text
          transform="matrix(1 0 0 1 251.283 130.066)"
        >{temperament2.cpExp5th.D}</text>
        <text
          transform="matrix(1 0 0 1 261.513 164.939)"
        >{temperament2.cpExp5th.A}</text>
        <text
          transform="matrix(1 0 0 1 256.023 199.811)"
        >{temperament2.cpExp5th.E}</text>
        <text
          transform="matrix(1 0 0 1 230.558 227.056)"
        >{temperament2.cpExp5th.B}</text>
        <text
          transform="matrix(1 0 0 1 196.634 243.663)"
        >{temperament2.cpExp5th.F_sharp}</text>
        <text
          transform="matrix(1 0 0 1 160.526 234.945)"
        >{temperament2.cpExp5th.C_sharp}</text>
        <text
          transform="matrix(1 0 0 1 132.958 207.7)"
        >{temperament2.cpExp5th.G_sharp}</text>
        <text
          transform="matrix(1 0 0 1 122.35 171.739)"
        >{temperament2.cpExp5th.E_flat}</text>
        <text
          transform="matrix(1 0 0 1 133.635 135.776)"
        >{temperament2.cpExp5th.B_flat}</text>
        <text
          transform="matrix(1 0 0 1 158.458 109.622)"
        >{temperament2.cpExp5th.F}</text>
        <text
          transform="matrix(1 0 0 1 190.878 94.1044)"
        >{temperament2.cpExp5th.C}</text>
      </g>
    </>
  );
};

export default ComparatorThirdComaCircle;