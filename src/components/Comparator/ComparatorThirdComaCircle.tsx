import React, { useContext } from 'react';

//Style
import './Comparator.css'
import { convertThirdQualityToColor } from '../../utils/colorCircle';
import { Temperament } from '../../model/Temperament/Temperament';
import SettingsContext from '../../store/settings-context';

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
    <g id="Note_2_Tierce" stroke="var(--color-hover)" strokeWidth="0.1px">
      <path data-name="C"       fill={convertThirdQualityToColor(qualityNote2.C, settings.darkTheme)}       d="M11.04 10.471l-1.586-2.75s.613-.363 1.522-.61c.908-.248 1.566-.219 1.566-.219l-.005 3.175s-.28-.01-.772.12-.724.284-.724.284z" transform="rotate(15 11.458 13.139)" />
      <path data-name="G"       fill={convertThirdQualityToColor(qualityNote2.G, settings.darkTheme)}       d="m12.639 10.074-.002-3.197s.712-.008 1.622.232c.91.24 1.478.607 1.478.607l-1.591 2.751s-.248-.168-.75-.293c-.5-.125-.757-.1-.757-.1z" transform="rotate(15 11.458 13.139)" />
      <path data-name="D"       fill={convertThirdQualityToColor(qualityNote2.D, settings.darkTheme)}       d="M15.824 7.766s.611.321 1.28.984c.668.664.996 1.273.996 1.273l-2.753 1.586s-.154-.276-.512-.637c-.36-.361-.605-.46-.605-.46z" transform="rotate(15 11.458 13.139)" />
      <path data-name="A"       fill={convertThirdQualityToColor(qualityNote2.A, settings.darkTheme)}       d="M18.142 10.12s.375.553.622 1.462c.247.909.224 1.645.224 1.645l-3.172-.022s-.007-.318-.125-.775a2.833 2.833 0 0 0-.295-.737z" transform="rotate(15 11.458 13.139)" />
      <path data-name="E"       fill={convertThirdQualityToColor(qualityNote2.E, settings.darkTheme)}       d="M18.99 13.306s.033.667-.207 1.577a6.476 6.476 0 0 1-.616 1.535l-2.75-1.592s.155-.212.289-.704c.133-.49.11-.819.11-.819z" transform="rotate(15 11.458 13.139)" />
      <path data-name="B"       fill={convertThirdQualityToColor(qualityNote2.B, settings.darkTheme)}       d="M18.113 16.5s-.256.55-.92 1.218a7.006 7.006 0 0 1-1.354 1.06l-1.584-2.753s.316-.164.65-.508c.335-.344.465-.604.465-.604z" transform="rotate(15 11.458 13.139)" />
      <path data-name="F_sharp" fill={convertThirdQualityToColor(qualityNote2.F_sharp, settings.darkTheme)} d="M15.751 18.825s-.556.35-1.464.598c-.909.247-1.64.236-1.64.236v-3.181s.399 0 .827-.125c.428-.124.695-.277.695-.277z" transform="rotate(15 11.458 13.139)" />
      <path data-name="C_sharp" fill={convertThirdQualityToColor(qualityNote2.C_sharp, settings.darkTheme)} d="M12.546 19.642s-.653.034-1.564-.206c-.91-.24-1.532-.627-1.532-.627l1.587-2.745s.3.183.735.299c.436.116.776.112.776.112z" transform="rotate(15 11.458 13.139)" />
      <path data-name="G_sharp" fill={convertThirdQualityToColor(qualityNote2.G_sharp, settings.darkTheme)} d="M9.36 18.76s-.605-.323-1.273-.986c-.669-.664-.983-1.288-.983-1.288l2.753-1.584s.168.32.503.652c.336.332.597.455.597.455z" transform="rotate(15 11.458 13.139)" />
      <path data-name="E_flat"  fill={convertThirdQualityToColor(qualityNote2.E_flat, settings.darkTheme)}  d="M7.056 16.4s-.357-.604-.605-1.513c-.247-.908-.206-1.58-.206-1.58l3.169-.006s-.017.303.113.795c.13.492.28.72.28.72z" transform="rotate(15 11.458 13.139)" />
      <path data-name="B_flat"  fill={convertThirdQualityToColor(qualityNote2.B_flat, settings.darkTheme)}  d="M6.239 13.211s-.011-.703.229-1.613c.24-.91.602-1.47.602-1.47l2.748 1.59s-.17.254-.304.746c-.133.49-.101.748-.101.748z" transform="rotate(15 11.458 13.139)" />
      <path data-name="F"       fill={convertThirdQualityToColor(qualityNote2.F, settings.darkTheme)}       d="m9.87 11.631-2.75-1.589s.349-.62 1.012-1.289c.663-.668 1.248-.972 1.248-.972l1.583 2.752s-.248.13-.61.49c-.36.358-.484.608-.484.608z" transform="rotate(15 11.458 13.139)" />
    </g>
    <g id="Note_1_Tierce" stroke="var(--color-hover)" strokeWidth="0.1px">
      <path data-name="C"       fill={convertThirdQualityToColor(qualityNote1.C, settings.darkTheme)}       d="m10.136 3.87.853 3.196s.658-.194 1.513-.21c.854-.015 1.708.201 1.708.201l.86-3.192s-1.088-.325-2.524-.31c-1.436.014-2.41.315-2.41.315z" transform="translate(-.073 .295)" />
      <path data-name="G"       fill={convertThirdQualityToColor(qualityNote1.G, settings.darkTheme)}       d="m15.173 3.907-.866 3.176a7 7 0 0 0 1.421.593 7.732 7.732 0 0 1 1.376 1.008l2.344-2.315s-.779-.825-2.03-1.53c-1.251-.706-2.245-.932-2.245-.932z" transform="translate(-.073 .295)" />
      <path data-name="D"       fill={convertThirdQualityToColor(qualityNote1.D, settings.darkTheme)}       d="M17.175 8.754s.53.521.97 1.253c.44.732.657 1.54.657 1.54l3.206-.812s-.262-1.124-.993-2.36c-.73-1.237-1.507-1.95-1.507-1.95z" transform="translate(-.073 .295)" />
      <path data-name="A"       fill={convertThirdQualityToColor(qualityNote1.A, settings.darkTheme)}       d="M18.828 11.64s.205.717.221 1.571a6.645 6.645 0 0 1-.212 1.672l3.196.854s.325-1.086.31-2.523c-.015-1.436-.322-2.423-.322-2.423z" transform="translate(-.073 .295)" />
      <path data-name="E"       fill={convertThirdQualityToColor(qualityNote1.E, settings.darkTheme)}       d="M18.812 14.977s-.2.705-.614 1.453c-.413.747-.999 1.357-.999 1.357l2.33 2.341s.856-.803 1.561-2.054.911-2.236.911-2.236z" transform="translate(-.073 .295)" />
      <path data-name="B"       fill={convertThirdQualityToColor(qualityNote1.B, settings.darkTheme)}       d="M17.127 17.856s-.51.514-1.241.955c-.732.44-1.569.668-1.569.668l.846 3.193s1.135-.256 2.371-.987c1.237-.73 1.95-1.51 1.95-1.51z" transform="translate(-.073 .295)" />
      <path data-name="F_sharp" fill={convertThirdQualityToColor(qualityNote1.F_sharp, settings.darkTheme)} d="M15.07 22.687l-.852-3.195s-.659.193-1.513.209a7.415 7.415 0 0 1-1.708-.201l-.86 3.193s1.087.325 2.524.31c1.436-.015 2.41-.316 2.41-.316z" transform="translate(-.073 .295)" />
      <path data-name="C_sharp" fill={convertThirdQualityToColor(qualityNote1.C_sharp, settings.darkTheme)} d="M10 22.647l.867-3.177s-.674-.179-1.421-.592c-.748-.414-1.376-1.008-1.376-1.008l-2.344 2.315s.779.825 2.03 1.53c1.251.705 2.245.932 2.245.932z" transform="translate(-.073 .295)" />
      <path data-name="G_sharp" fill={convertThirdQualityToColor(qualityNote1.G_sharp, settings.darkTheme)} d="M8.017 17.771s-.53-.52-.97-1.252c-.44-.732-.657-1.54-.657-1.54l-3.206.812s.262 1.124.993 2.36c.73 1.236 1.507 1.949 1.507 1.949z" transform="translate(-.073 .295)" />
      <path data-name="E_flat"  fill={convertThirdQualityToColor(qualityNote1.E_flat, settings.darkTheme)}  d="M6.365 14.885s-.206-.716-.222-1.57c-.016-.855.212-1.673.212-1.673l-3.196-.854s-.325 1.087-.31 2.523c.015 1.436.322 2.424.322 2.424z" transform="translate(-.073 .295)" />
      <path data-name="B_flat"  fill={convertThirdQualityToColor(qualityNote1.B_flat, settings.darkTheme)}  d="M6.38 11.549s.2-.705.614-1.453c.414-.747.999-1.357.999-1.357l-2.33-2.342s-.856.804-1.561 2.055c-.705 1.25-.91 2.236-.91 2.236z" transform="translate(-.073 .295)" />
      <path data-name="F"       fill={convertThirdQualityToColor(qualityNote1.F, settings.darkTheme)}       d="M8.065 8.67s.51-.515 1.241-.955c.732-.44 1.569-.668 1.569-.668l-.846-3.193s-1.135.255-2.371.986-1.95 1.51-1.95 1.51z" transform="translate(-.073 .295)" />
    </g>
    <ellipse cx="12.523" cy="13.574" rx="9.745" ry="9.698"/>
    <ellipse ry="6.344" rx="6.375" cy="13.574" cx="12.523" id="a" />
    <ellipse id="b" cx="12.523" cy="13.574" rx="3.161" ry="3.146" />
    <g className="comas-text" fill="var(--color-contrast)">
      <text xmlSpace="preserve" transform="rotate(-100.643 12.302 13.24)"> <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.C      } </tspan></textPath></text>
      <text transform="rotate(-69.005 12.362 13.061)" xmlSpace="preserve"> <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.G      } </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-39.366 12.496 12.66)">  <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.D      } </tspan></textPath></text>
      <text transform="rotate(-10.238 13.4 10.193)" xmlSpace="preserve">   <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.A      } </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(19.01 11.552 15.253)">   <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.E      } </tspan></textPath></text>
      <text transform="rotate(51.115 11.977 14.098)" xmlSpace="preserve">  <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.B      } </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(80.447 12.076 13.832)">  <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.F_sharp} </tspan></textPath></text>
      <text transform="rotate(110.329 12.13 13.694)" xmlSpace="preserve">  <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.C_sharp} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(140.211 12.165 13.596)"> <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.G_sharp} </tspan></textPath></text>
      <text transform="rotate(170.656 12.198 13.509)" xmlSpace="preserve"> <textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.E_flat } </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-160.264 12.227 13.437)"><textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.B_flat } </tspan></textPath></text>
      <text transform="rotate(-132.894 12.256 13.363)" xmlSpace="preserve"><textPath xlinkHref="#a"><tspan>{temperament1.csExp3rd.F      } </tspan></textPath></text>
    </g>
    <g className="comas-text" fill="var(--color-contrast)">
      <text transform="rotate(-106.725 11.991 12.788)" xmlSpace="preserve"><textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.C      } </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-76.725 12.119 12.382)"> <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.G      } </tspan></textPath></text>
      <text transform="rotate(-46.725 12.377 11.56)" xmlSpace="preserve">  <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.D      } </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-16.725 13.48 8.053)">   <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.A      } </tspan></textPath></text>
      <text transform="rotate(13.275 9.698 20.084)" xmlSpace="preserve">   <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.E      } </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(43.275 11.19 15.339)">   <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.B      } </tspan></textPath></text>
      <text transform="rotate(73.275 11.478 14.42)" xmlSpace="preserve">   <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.F_sharp} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(103.275 11.614 13.988)"> <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.C_sharp} </tspan></textPath></text>
      <text transform="rotate(133.275 11.702 13.707)" xmlSpace="preserve"> <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.G_sharp} </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(163.275 11.772 13.484)"> <textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.E_flat } </tspan></textPath></text>
      <text transform="rotate(-166.725 11.837 13.278)" xmlSpace="preserve"><textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.B_flat } </tspan></textPath></text>
      <text xmlSpace="preserve" transform="rotate(-136.725 11.906 13.059)"><textPath xlinkHref="#b"><tspan>{temperament2.csExp3rd.F      } </tspan></textPath></text>
    </g>
    <g className="comas-note" fill="var(--color-contrast)">
      <text x="11.741" y="2.8440001">
        <tspan x="11.741" y="2.8440001">C</tspan>
      </text>
      <text y="4.1127629" x="17.753832">
        <tspan y="4.1127629"x="17.753832">G</tspan>
      </text>
      <text x="22.111757" y="8.6913424">
        <tspan x="22.111757" y="8.6913424">D</tspan>
      </text>
      <text y="14.207703"x="23.325356">
        <tspan y="14.207703"x="23.325356">A</tspan>
      </text>
      <text x="22.332413" y="19.724062">
        <tspan x="22.332413" y="19.724062">E</tspan>
      </text>
      <text y="24.192314" x="17.974485">
        <tspan y="24.192314"x="17.974485">B</tspan>
      </text>
      <text x="11.597335" y="25.418837">
        <tspan x="11.597335" y="25.418837">F♯</tspan>
      </text>
      <text y="24.150074"x="5.474175">
        <tspan y="24.150074"x="5.474175">C♯</tspan>
      </text>
      <text id="text1087"x="1.3920684" y="19.79215">
        <tspan x="1.3920684" y="19.79215"> G♯</tspan>
      </text>
      <text y="14.330953"x="0.56461436">
        <tspan y="14.330953"x="0.56461436">E♭</tspan>
      </text>
      <text x="1.5575591" y="8.4284468">
        <tspan x="1.5575591" y="8.4284468">B♭</tspan>
      </text>
      <text y="4.1679263"x="6.3349671">
        <tspan y="4.1679263"x="6.3349671">F</tspan>
      </text>
    </g>
  </>
);
};

export default ComparatorThirdComaCircle;