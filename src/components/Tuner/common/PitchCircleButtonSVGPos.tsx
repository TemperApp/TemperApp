import React from 'react';

export const PitchCircleButtonSVGPos = {
  A:       "M273,155.53a96.1,96.1,0,0,1-.06,49.88h0L321,218.3l6,1.61a152.49,152.49,0,0,0,.06-78.89Z",
  D:       "M287.53,72.8l.29.29A150.85,150.85,0,0,1,327.09,141L273,155.53a95.15,95.15,0,0,0-24.76-42.83l-.29-.29Z",
  G:       "M287.53,72.8l-39.61,39.61A95.19,95.19,0,0,0,204.7,87.76l14.5-54.12A150.79,150.79,0,0,1,287.53,72.8Z",
  C:       "M219.2,33.64,204.7,87.76a96,96,0,0,0-49.59.35L140.61,34A152.2,152.2,0,0,1,219.2,33.64Z",
  F:       "M140.61,34l14.5,54.11a95.2,95.2,0,0,0-42.2,24.59l-.41.42L72.89,73.5l.41-.41A150.72,150.72,0,0,1,140.61,34Z",
  B_flat:  "M72.89,73.5l39.61,39.62a95.11,95.11,0,0,0-24.43,42.75L34,141.38A150.83,150.83,0,0,1,72.89,73.5Z",
  E_flat:  "M88.07,155.87a95.9,95.9,0,0,0,.06,49.18L34,219.56a152.36,152.36,0,0,1,0-78.18Z",
  G_sharp: "M88.13,205.05a95.19,95.19,0,0,0,24.49,42.66L73,287.32a151,151,0,0,1-39-67.76Z",
  C_sharp: "M155.17,272.59l-14.5,54.13A151.1,151.1,0,0,1,73.3,287.61l-.29-.29,39.61-39.61.29.29A95.24,95.24,0,0,0,155.17,272.59Z",
  F_sharp: "M204.63,273l14.51,54.12a152.39,152.39,0,0,1-78.47-.35l14.5-54.13A95.9,95.9,0,0,0,204.63,273Z",
  B:       "M247.79,248.41,287.41,288a151,151,0,0,1-68.27,39.05L204.63,273A95.15,95.15,0,0,0,247.79,248.41Z",
  E:       "M327,219.91a150.94,150.94,0,0,1-39.21,67.7l-.41.41-39.62-39.61.42-.41a95.14,95.14,0,0,0,24.69-42.59L321,218.3Z",
}

export const PitchCircleSVGLabels: React.FC = () => (
  <>
    <text className="pc-labels" transform="translate(278.22 247.59)">E</text>
    <text className="pc-labels" transform="translate(231.53 293.77)">B</text>
    <text className="pc-labels" transform="translate(166.28 310.6)" >F<tspan x="13.12" y="0">♯</tspan></text>
    <text className="pc-labels" transform="translate(104.23 293.77)">C<tspan x="15.2" y="0" >♯</tspan></text>
    <text className="pc-labels" transform="translate(56.47 247.59)" >G<tspan x="16.25" y="0">♯</tspan></text>
    <text className="pc-labels" transform="translate(48.05 185.52)" >E<tspan x="14.08" y="0">♭</tspan></text>
    <text className="pc-labels" transform="translate(60.97 124.58)" >B<tspan x="15.55" y="0">♭</tspan></text>
    <text className="pc-labels" transform="translate(106.28 80.52)" >F</text>
    <text className="pc-labels" transform="translate(170.28 62.27)" >C</text>
    <text className="pc-labels" transform="translate(231.53 80.52)" >G</text>
    <text className="pc-labels" transform="translate(278.22 124.58)">D</text>
    <text className="pc-labels" transform="translate(294.3 185.52)" >A</text>
  </>
);
