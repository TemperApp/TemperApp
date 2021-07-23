import React, { useContext } from 'react';

//Style
import './Comparator.css'
import { convertThirdQualityToColor } from '../../utils/colorCircle';
import { Temperament } from '../../model/Temperament/Temperament';
import SettingsContext from '../../store/settings-context';
import { formatCsExp3rdStr } from '../../model/Divergence';

type ComparatorThirdComaCircleProps = {
  temperament1: Temperament,
  temperament2: Temperament,
  qualityNote1: { [key: string]: number | null }
  qualityNote2: { [key: string]: number | null }
}

const ComparatorThirdComaCircle: React.FC<ComparatorThirdComaCircleProps> = ({ temperament1, temperament2, qualityNote1, qualityNote2 }) => {
  const settings = useContext(SettingsContext);

  return (
    <>
    <g id="Note_1_Tierce" stroke="var(--color-hover)" strokeWidth="0.1px" transform="matrix(0.24271985,0,0,0.24271985,0.44515871,1.3132924)" >
      <path data-name="C"       fill={convertThirdQualityToColor(qualityNote2.C, settings.darkTheme)}       d="M49.556641 10.451172C43.644755 10.51142 39.63902 11.744932 39.628906 11.748047L41.828125 19.994141A31.477272 31.477272 0 0 1 49.761719 18.976562A31.477272 31.477272 0 0 1 57.722656 20.001953L59.951172 11.724609C59.951172 11.724609 55.472018 10.389782 49.556641 10.451172z"  />
      <path data-name="G"       fill={convertThirdQualityToColor(qualityNote2.G, settings.darkTheme)}       d="M60.378906 11.900391L58.140625 20.113281A31.477272 31.477272 0 0 1 71.892578 28.070312L77.992188 22.044922C77.992188 22.044922 74.783839 18.642258 69.628906 15.738281C64.473974 12.834304 60.378906 11.900391 60.378906 11.900391z" />
      <path data-name="D"       fill={convertThirdQualityToColor(qualityNote2.D, settings.darkTheme)}       d="M78.242188 22.277344L72.164062 28.34375A31.477272 31.477272 0 0 1 80.126953 42.162109L88.541016 40.033203C88.541016 40.033203 87.46062 35.402136 84.449219 30.308594C81.437818 25.215052 78.242187 22.277344 78.242188 22.277344z" />
      <path data-name="A"       fill={convertThirdQualityToColor(qualityNote2.A, settings.darkTheme)}       d="M88.59375 40.261719L80.214844 42.492188A31.477272 31.477272 0 0 1 81.238281 50.455078A31.477272 31.477272 0 0 1 80.220703 58.392578L88.640625 60.640625C88.640625 60.640625 89.981312 56.163425 89.919922 50.248047C89.858532 44.332669 88.59375 40.261719 88.59375 40.261719z" />
      <path data-name="E"       fill={convertThirdQualityToColor(qualityNote2.E, settings.darkTheme)}       d="M80.113281 58.791016A31.477272 31.477272 0 0 1 72.177734 72.552734L78.324219 78.730469C78.324219 78.730469 81.855789 75.424464 84.759766 70.269531C87.662676 65.118578 88.507812 61.056641 88.507812 61.056641L80.113281 58.791016z" />
      <path data-name="B"       fill={convertThirdQualityToColor(qualityNote2.B, settings.darkTheme)}       d="M71.921875 72.806641A31.477272 31.477272 0 0 1 58.111328 80.804688L60.335938 89.210938C60.335938 89.210938 65.011853 88.158772 70.109375 85.148438C75.198938 82.13597 78.140625 78.927734 78.140625 78.927734L71.921875 72.806641z" />
      <path data-name="F_sharp" fill={convertThirdQualityToColor(qualityNote2.F_sharp, settings.darkTheme)} d="M57.726562 80.908203A31.477272 31.477272 0 0 1 49.761719 81.931641A31.477272 31.477272 0 0 1 41.882812 80.929688L39.630859 89.296875C39.630859 89.296875 44.107987 90.636496 50.027344 90.576172C55.942721 90.514782 59.957031 89.275391 59.957031 89.275391L57.726562 80.908203z" />
      <path data-name="C_sharp" fill={convertThirdQualityToColor(qualityNote2.C_sharp, settings.darkTheme)} d="M27.646484 72.853516L21.457031 78.966797C21.457031 78.966797 24.66538 82.365554 29.820312 85.269531C34.974179 88.177488 39.070312 89.111328 39.070312 89.111328L39.072266 89.107422L41.339844 80.783203A31.477272 31.477272 0 0 1 27.646484 72.853516z" />
      <path data-name="G_sharp" fill={convertThirdQualityToColor(qualityNote2.G_sharp, settings.darkTheme)} d="M19.392578 58.734375L10.982422 60.861328C10.982422 60.861328 12.060865 65.492395 15.072266 70.585938C18.083666 75.67948 21.28125 78.617187 21.28125 78.617188L27.351562 72.558594A31.477272 31.477272 0 0 1 19.392578 58.734375z" />
      <path data-name="E_flat"  fill={convertThirdQualityToColor(qualityNote2.E_flat, settings.darkTheme)}  d="M10.882812 40.25C10.882812 40.25 9.5421254 44.731107 9.6035156 50.646484C9.6649059 56.561862 10.929688 60.628906 10.929688 60.628906L19.304688 58.400391A31.477272 31.477272 0 0 1 18.283203 50.455078A31.477272 31.477272 0 0 1 19.306641 42.501953L10.882812 40.25z" />
      <path data-name="B_flat"  fill={convertThirdQualityToColor(qualityNote2.B_flat, settings.darkTheme)}  d="M21.199219 22.160156C21.199219 22.160156 17.671555 25.472021 14.767578 30.626953C11.860688 35.77684 11.015625 39.837891 11.015625 39.837891L19.410156 42.105469A31.477272 31.477272 0 0 1 27.355469 28.347656L21.199219 22.160156z" />
      <path data-name="F"       fill={convertThirdQualityToColor(qualityNote2.F, settings.darkTheme)}       d="M39.1875 11.681641C39.1875 11.681641 34.511511 12.734693 29.417969 15.746094C24.324427 18.757495 21.382812 21.966797 21.382812 21.966797L27.607422 28.09375A31.477272 31.477272 0 0 1 41.416016 20.103516L39.1875 11.681641z" />
    </g>
    <g id="Note_2_Tierce" stroke="var(--color-hover)" strokeWidth="0.1px" transform="matrix(0.24271985,0,0,0.24271985,0.44515871,1.3132924) scale(.8) translate(12.5 12.5)" >
      <path data-name="C"       fill={convertThirdQualityToColor(qualityNote1.C, settings.darkTheme)}       d="M49.557 10.451c-5.912.06-9.918 1.294-9.928 1.297l2.2 8.246a31.477 31.477 0 0 1 7.933-1.017 31.477 31.477 0 0 1 7.96 1.025l2.23-8.277s-4.48-1.335-10.395-1.274z"/>
      <path data-name="G"       fill={convertThirdQualityToColor(qualityNote1.G, settings.darkTheme)}       d="M60.378906 11.900391L58.140625 20.113281A31.477272 31.477272 0 0 1 71.892578 28.070312L77.992188 22.044922C77.992188 22.044922 74.783839 18.642258 69.628906 15.738281C64.473974 12.834304 60.378906 11.900391 60.378906 11.900391z" />
      <path data-name="D"       fill={convertThirdQualityToColor(qualityNote1.D, settings.darkTheme)}       d="M78.242188 22.277344L72.164062 28.34375A31.477272 31.477272 0 0 1 80.126953 42.162109L88.541016 40.033203C88.541016 40.033203 87.46062 35.402136 84.449219 30.308594C81.437818 25.215052 78.242187 22.277344 78.242188 22.277344z" />
      <path data-name="A"       fill={convertThirdQualityToColor(qualityNote1.A, settings.darkTheme)}       d="M88.59375 40.261719L80.214844 42.492188A31.477272 31.477272 0 0 1 81.238281 50.455078A31.477272 31.477272 0 0 1 80.220703 58.392578L88.640625 60.640625C88.640625 60.640625 89.981312 56.163425 89.919922 50.248047C89.858532 44.332669 88.59375 40.261719 88.59375 40.261719z" />
      <path data-name="E"       fill={convertThirdQualityToColor(qualityNote1.E, settings.darkTheme)}       d="M80.113281 58.791016A31.477272 31.477272 0 0 1 72.177734 72.552734L78.324219 78.730469C78.324219 78.730469 81.855789 75.424464 84.759766 70.269531C87.662676 65.118578 88.507812 61.056641 88.507812 61.056641L80.113281 58.791016z" />
      <path data-name="B"       fill={convertThirdQualityToColor(qualityNote1.B, settings.darkTheme)}       d="M71.921875 72.806641A31.477272 31.477272 0 0 1 58.111328 80.804688L60.335938 89.210938C60.335938 89.210938 65.011853 88.158772 70.109375 85.148438C75.198938 82.13597 78.140625 78.927734 78.140625 78.927734L71.921875 72.806641z" />
      <path data-name="F_sharp" fill={convertThirdQualityToColor(qualityNote1.F_sharp, settings.darkTheme)} d="M57.726562 80.908203A31.477272 31.477272 0 0 1 49.761719 81.931641A31.477272 31.477272 0 0 1 41.882812 80.929688L39.630859 89.296875C39.630859 89.296875 44.107987 90.636496 50.027344 90.576172C55.942721 90.514782 59.957031 89.275391 59.957031 89.275391L57.726562 80.908203z" />
      <path data-name="C_sharp" fill={convertThirdQualityToColor(qualityNote1.C_sharp, settings.darkTheme)} d="M27.646484 72.853516L21.457031 78.966797C21.457031 78.966797 24.66538 82.365554 29.820312 85.269531C34.974179 88.177488 39.070312 89.111328 39.070312 89.111328L39.072266 89.107422L41.339844 80.783203A31.477272 31.477272 0 0 1 27.646484 72.853516z" />
      <path data-name="G_sharp" fill={convertThirdQualityToColor(qualityNote1.G_sharp, settings.darkTheme)} d="M19.392578 58.734375L10.982422 60.861328C10.982422 60.861328 12.060865 65.492395 15.072266 70.585938C18.083666 75.67948 21.28125 78.617187 21.28125 78.617188L27.351562 72.558594A31.477272 31.477272 0 0 1 19.392578 58.734375z" />
      <path data-name="E_flat"  fill={convertThirdQualityToColor(qualityNote1.E_flat, settings.darkTheme)}  d="M10.882812 40.25C10.882812 40.25 9.5421254 44.731107 9.6035156 50.646484C9.6649059 56.561862 10.929688 60.628906 10.929688 60.628906L19.304688 58.400391A31.477272 31.477272 0 0 1 18.283203 50.455078A31.477272 31.477272 0 0 1 19.306641 42.501953L10.882812 40.25z" />
      <path data-name="B_flat"  fill={convertThirdQualityToColor(qualityNote1.B_flat, settings.darkTheme)}  d="M21.199219 22.160156C21.199219 22.160156 17.671555 25.472021 14.767578 30.626953C11.860688 35.77684 11.015625 39.837891 11.015625 39.837891L19.410156 42.105469A31.477272 31.477272 0 0 1 27.355469 28.347656L21.199219 22.160156z" />
      <path data-name="F"       fill={convertThirdQualityToColor(qualityNote1.F, settings.darkTheme)}       d="M39.1875 11.681641C39.1875 11.681641 34.511511 12.734693 29.417969 15.746094C24.324427 18.757495 21.382812 21.966797 21.382812 21.966797L27.607422 28.09375A31.477272 31.477272 0 0 1 41.416016 20.103516L39.1875 11.681641z" />
    </g>
      <ellipse cx="12.523" cy="13.574" rx="7.8" ry="7.8" stroke-width="0.1px" stroke="var(--color-hover)"/>
      <ellipse ry="6" rx="6" cy="13.574" cx="12.523" id="a" />
      <ellipse id="b" cx="12.523" cy="13.574" rx="7" ry="7" />
    <g className="comas-text" fill="var(--color-dark)">
      <text xmlSpace="preserve" transform="rotate(-100.643 12.302 13.24)"> <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.C      )} </tspan></textPath></text>
      <text transform="rotate(-69.005 12.362 13.061)" xmlSpace="preserve"> <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.G      )} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-39.366 12.496 12.66)">  <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.D      )} </tspan></textPath></text>
      <text transform="rotate(-10.238 13.4 10.193)" xmlSpace="preserve">   <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.A      )} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(19.01 11.552 15.253)">   <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.E      )} </tspan></textPath></text>
      <text transform="rotate(51.115 11.977 14.098)" xmlSpace="preserve">  <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.B      )} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(80.447 12.076 13.832)">  <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.F_sharp)} </tspan></textPath></text>
      <text transform="rotate(110.329 12.13 13.694)" xmlSpace="preserve">  <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.C_sharp)} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(140.211 12.165 13.596)"> <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.G_sharp)} </tspan></textPath></text>
      <text transform="rotate(170.656 12.198 13.509)" xmlSpace="preserve"> <textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.E_flat )} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-160.264 12.227 13.437)"><textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.B_flat )} </tspan></textPath></text>
      <text transform="rotate(-132.894 12.256 13.363)" xmlSpace="preserve"><textPath xlinkHref="#a"><tspan>{formatCsExp3rdStr(temperament1.csExp3rd.F      )} </tspan></textPath></text>
    </g>
    <g className="comas-text" fill="var(--color-dark)" transform="rotate(6 12.523 13.574)">
      <text transform="rotate(-106.725 11.991 12.788)" xmlSpace="preserve"><textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.C      )} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-76.725 12.119 12.382)"> <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.G      )} </tspan></textPath></text>
      <text transform="rotate(-46.725 12.377 11.56)" xmlSpace="preserve">  <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.D      )} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-16.725 13.48 8.053)">   <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.A      )} </tspan></textPath></text>
      <text transform="rotate(13.275 9.698 20.084)" xmlSpace="preserve">   <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.E      )} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(43.275 11.19 15.339)">   <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.B      )} </tspan></textPath></text>
      <text transform="rotate(73.275 11.478 14.42)" xmlSpace="preserve">   <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.F_sharp)} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(103.275 11.614 13.988)"> <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.C_sharp)} </tspan></textPath></text>
      <text transform="rotate(133.275 11.702 13.707)" xmlSpace="preserve"> <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.G_sharp)} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(163.275 11.772 13.484)"> <textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.E_flat )} </tspan></textPath></text>
      <text transform="rotate(-166.725 11.837 13.278)" xmlSpace="preserve"><textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.B_flat )} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-136.725 11.906 13.059)"><textPath xlinkHref="#b"><tspan>{formatCsExp3rdStr(temperament2.csExp3rd.F      )} </tspan></textPath></text>
    </g>
    <g className="comas-note" fill="var(--color-contrast)" transform="scale(.45) translate(15.5 16)">
      <text x="11.741" y="2.8440001">
        <tspan>C</tspan>
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
      <text id="text1087"x="1.3920684" y="19.79215">
        <tspan>G♯</tspan>
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

export default ComparatorThirdComaCircle;