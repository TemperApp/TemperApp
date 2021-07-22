import React, { useContext } from "react";
import { convertThirdQualityToColor } from "../../utils/colorCircle";
import { Temperament } from "../../model/Temperament/Temperament";
import SettingsContext from "../../store/settings-context";
import "../../components/Comparator/Comparator.css"
import { formatCsExp3rdStr } from "../../model/Divergence";

type ThirdComaCircleProps = {
  temperament: Temperament;
  qualityNote: { [key: string]: number | null };
};

const ThirdComaCircle: React.FC<ThirdComaCircleProps> = ({
  temperament,
  qualityNote,
}) => {
  const settings = useContext(SettingsContext);

  return (
    <>
      <g id="Note_1_Quinte" stroke="var(--color-hover)" strokeWidth="0.1px">
        <path data-name="C"       fill={convertThirdQualityToColor(qualityNote.C, settings.darkTheme)}       d="m10.136 3.87.373 1.426s1.188-.375 2.042-.39c.854-.016 2.155.283 2.155.283l.363-1.324s-1.087-.325-2.523-.31c-1.436.014-2.41.315-2.41.315z" transform="translate(-.073 .295)"/>
        <path data-name="G"       fill={convertThirdQualityToColor(qualityNote.G, settings.darkTheme)}       d="m15.19 3.896-.39 1.422s1.215.268 1.963.682c.747.413 1.724 1.323 1.724 1.323l.977-.965s-.779-.825-2.03-1.53c-1.251-.705-2.245-.932-2.245-.932z" transform="translate(-.073 .295)"/>
        <path data-name="D"       fill={convertThirdQualityToColor(qualityNote.D, settings.darkTheme)}       d="M19.552 6.445 18.504 7.48s.895.888 1.336 1.62c.44.731.855 1.96.855 1.96l1.328-.347s-.262-1.104-.993-2.34c-.73-1.236-1.478-1.93-1.478-1.93z" transform="translate(-.073 .295)"/>
        <path data-name="A"       fill={convertThirdQualityToColor(qualityNote.A, settings.darkTheme)}       d="m22.056 10.834-1.426.373s.317 1.188.333 2.042c.015.854-.226 2.155-.226 2.155l1.324.363s.326-1.087.31-2.523c-.014-1.436-.315-2.41-.315-2.41z" transform="translate(-.073 .295)"/>
        <path data-name="E"       fill={convertThirdQualityToColor(qualityNote.E, settings.darkTheme)}       d="m22.03 15.887-1.421-.39s-.328 1.193-.741 1.94c-.414.748-1.3 1.719-1.3 1.719l.913.888s.912-.661 1.618-1.913c.705-1.25.931-2.244.931-2.244z" transform="translate(-.073 .295)"/>
        <path data-name="B"       fill={convertThirdQualityToColor(qualityNote.B, settings.darkTheme)}       d="M19.481 20.25 18.445 19.2s-.852.837-1.584 1.278c-.732.44-1.995.831-1.995.831l.346 1.41s1.104-.261 2.34-.992c1.236-.731 1.93-1.478 1.93-1.478z" transform="translate(-.073 .295)"/>
        <path data-name="F_sharp" fill={convertThirdQualityToColor(qualityNote.F_sharp, settings.darkTheme)} d="m15.093 22.754-.374-1.426s-1.187.3-2.041.316c-.855.016-2.15-.338-2.15-.338l-.368 1.453s1.086.325 2.523.31c1.436-.015 2.41-.315 2.41-.315z" transform="translate(-.073 .295)"/>
        <path data-name="C_sharp" fill={convertThirdQualityToColor(qualityNote.C_sharp, settings.darkTheme)} d="m10.04 22.728.39-1.422s-1.16-.3-1.908-.714c-.747-.413-1.78-1.291-1.78-1.291l-.977.965s.779.825 2.03 1.53c1.251.705 2.245.932 2.245.932z" transform="translate(-.073 .295)"/>
        <path data-name="G_sharp" fill={convertThirdQualityToColor(qualityNote.G_sharp, settings.darkTheme)} d="m5.677 20.179 1.048-1.036s-.872-.853-1.313-1.585c-.44-.732-.878-1.996-.878-1.996l-1.329.348s.262 1.103.993 2.34c.731 1.236 1.479 1.929 1.479 1.929z" transform="translate(-.073 .295)"/>
        <path data-name="E_flat"  fill={convertThirdQualityToColor(qualityNote.E_flat, settings.darkTheme)}  d="m3.173 15.79 1.426-.373s-.376-1.188-.391-2.042c-.016-.854.283-2.155.283-2.155l-1.324-.363s-.325 1.087-.31 2.523c.015 1.436.315 2.41.315 2.41z" transform="translate(-.073 .295)"/>
        <path data-name="B_flat"  fill={convertThirdQualityToColor(qualityNote.B_flat, settings.darkTheme)}  d="m3.198 10.737 1.422.39s.269-1.216.682-1.964c.414-.747 1.323-1.724 1.323-1.724l-.965-.977s-.825.78-1.53 2.03c-.705 1.252-.932 2.245-.932 2.245z" transform="translate(-.073 .295)"/>
        <path data-name="F"       fill={convertThirdQualityToColor(qualityNote.F, settings.darkTheme)}       d="m5.747 6.374 1.036 1.049s.841-.92 1.573-1.36c.732-.44 2.008-.832 2.008-.832l-.347-1.328s-1.104.262-2.34.993c-1.237.73-1.93 1.478-1.93 1.478z" transform="translate(-.073 .295)"/>
      </g>
      <ellipse ry="9.698" rx="9.745" cy="13.574" cx="12.523" stroke="var(--color-theme)" strokeWidth="0.4px"/>
      <ellipse ry="8.3" rx="8.3" cy="13.574" cx="12.523" stroke="var(--color-theme)" strokeWidth="0.3px"/>
      <ellipse ry="9.573" rx="9.62" cy="13.574" cx="12.523" stroke="var(--color-hover)" strokeWidth="0.08px"/>
      <ellipse ry="8.45" rx="8.45" cy="13.574" cx="12.523" stroke="var(--color-hover)" strokeWidth="0.08px"/>
      <ellipse id="a" cx="12.523" cy="13.574" rx="6.375" ry="6.344"/>
      <g className="commas-font" fill="var(--color-contrast)">
        <text xmlSpace="preserve" transform="rotate(-100.643 12.302 13.24)"> <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.C      )} </tspan></textPath></text>
        <text transform="rotate(-69.005 12.362 13.061)" xmlSpace="preserve"> <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.G      )} </tspan></textPath></text>
        <text xmlSpace="preserve" transform="rotate(-39.366 12.496 12.66)">  <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.D      )} </tspan></textPath></text>
        <text transform="rotate(-10.238 13.4 10.193)" xmlSpace="preserve">   <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.A      )} </tspan></textPath></text>
        <text xmlSpace="preserve" transform="rotate(19.01 11.552 15.253)">   <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.E      )} </tspan></textPath></text>
        <text transform="rotate(51.115 11.977 14.098)" xmlSpace="preserve">  <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.B      )} </tspan></textPath></text>
        <text xmlSpace="preserve" transform="rotate(80.447 12.076 13.832)">  <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.F_sharp)} </tspan></textPath></text>
        <text transform="rotate(110.329 12.13 13.694)" xmlSpace="preserve">  <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.C_sharp)} </tspan></textPath></text>
        <text xmlSpace="preserve" transform="rotate(140.211 12.165 13.596)"> <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.G_sharp)} </tspan></textPath></text>
        <text transform="rotate(170.656 12.198 13.509)" xmlSpace="preserve"> <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.E_flat )} </tspan></textPath></text>
        <text xmlSpace="preserve" transform="rotate(-160.264 12.227 13.437)"><textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.B_flat )} </tspan></textPath></text>
        <text transform="rotate(-132.894 12.256 13.363)" xmlSpace="preserve"><textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament.csExp3rd.F      )} </tspan></textPath></text>
      </g>

      <g className="comas-note" fill="var(--color-contrast)">
        <text x="11.741" y="2.8440001">
          <tspan >C</tspan>
        </text>
        <text y="4.1127629" x="17.753832">
          <tspan>G</tspan>
        </text>
        <text x="22.111757" y="8.6913424">
          <tspan>D</tspan>
        </text>
        <text y="14.207703"x="23.325356">
          <tspan>A</tspan>
        </text>
        <text x="22.332413" y="19.724062">
          <tspan>E</tspan>
        </text>
        <text y="24.192314" x="17.974485">
          <tspan>B</tspan>
        </text>
        <text x="11.597335" y="25.418837">
          <tspan>F♯</tspan>
        </text>
        <text y="24.150074"x="5.474175">
          <tspan>C♯</tspan>
        </text>
        <text x="1.3920684" y="19.79215">
          <tspan> G♯</tspan>
        </text>
        <text y="14.330953"x="0.56461436">
          <tspan>E♭</tspan>
        </text>
        <text x="1.5575591" y="8.4284468">
          <tspan>B♭</tspan>
        </text>
        <text y="4.1679263"x="6.3349671">
          <tspan>F</tspan>
        </text>
      </g>
    </>
  );
};

export default ThirdComaCircle;
