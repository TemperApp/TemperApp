import React, { useContext } from "react";
import { Notes } from "../../../model/Note/enums";
import NotesMap from "../../../model/Note/NotesMap";
import SettingsContext from "../../../store/settings-context";
import { convertThirdQualityToColor } from "../../../utils/colorCircle";

type ThirdCircleSVGProps = {
  qualities: NotesMap<number | null>
};

const ThirdCircleSVG: React.FC<ThirdCircleSVGProps> = ({
  qualities
}) => {
  const settings = useContext(SettingsContext);

  console.info('🔹 [ThirdCircleSVG]: Render')
  return (
    <>
      <g id="pc-thirdcircle">
        <path data-name="C"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.C, settings.darkTheme)}       d="M204.7,87.76l-4.86,18.14a77.12,77.12,0,0,0-39.87.35l-4.86-18.14A96,96,0,0,1,204.7,87.76Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="G"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.G, settings.darkTheme)}       d="M247.92,112.41l-13.28,13.28a76.37,76.37,0,0,0-34.8-19.79l4.86-18.14A95.19,95.19,0,0,1,247.92,112.41Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="D"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.D, settings.darkTheme)}       d="M247.92,112.41l.29.29A95.15,95.15,0,0,1,273,155.53l-18.14,4.85a76.44,76.44,0,0,0-19.9-34.4l-.29-.29Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="A"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.A, settings.darkTheme)}       d="M254.83,160.38a77.3,77.3,0,0,1-.06,40.17l18.13,4.86h0a96.1,96.1,0,0,0,.06-49.88Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="E"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.E, settings.darkTheme)}       d="M272.9,205.41A95.14,95.14,0,0,1,248.21,248l-.42.41-13.28-13.28.42-.41a76.63,76.63,0,0,0,19.84-34.17Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="B"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.B, settings.darkTheme)}       d="M234.51,235.13l13.28,13.28A95.15,95.15,0,0,1,204.63,273l-4.85-18.14A76.49,76.49,0,0,0,234.51,235.13Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="F_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.F_sharp, settings.darkTheme)} d="M199.78,254.81,204.63,273a95.9,95.9,0,0,1-49.46-.36L160,254.46A77.27,77.27,0,0,0,199.78,254.81Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="C_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.C_sharp, settings.darkTheme)} d="M160,254.46l-4.87,18.13A95.24,95.24,0,0,1,112.91,248l-.29-.29,13.29-13.29.28.3A76.62,76.62,0,0,0,160,254.46Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="G_sharp" stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.G_sharp, settings.darkTheme)} d="M106.27,200.19a76.39,76.39,0,0,0,19.64,34.23l-13.29,13.29a95.19,95.19,0,0,1-24.49-42.66Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="E_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.E_flat, settings.darkTheme)}  d="M106.2,160.74a77.13,77.13,0,0,0,.07,39.45l-18.14,4.86a95.9,95.9,0,0,1-.06-49.18Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="B_flat"  stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.B_flat, settings.darkTheme)}  d="M112.5,113.12l13.28,13.28a76.46,76.46,0,0,0-19.58,34.33h0l-18.13-4.87A95.11,95.11,0,0,1,112.5,113.12Z" transform="translate(-2.04 -1.82)"/>
        <path data-name="F"       stroke="var(--color-hover)" strokeWidth="1" fill={convertThirdQualityToColor(qualities.F, settings.darkTheme)}       d="M155.11,88.11,160,106.25A76.58,76.58,0,0,0,126.19,126l-.41.42L112.5,113.12l.41-.42A95.2,95.2,0,0,1,155.11,88.11Z" transform="translate(-2.04 -1.82)"/>
      </g>
    </>
  );
};

export default React.memo(
  ThirdCircleSVG,
  (prevProps, nextProps) => {
    for (const note in prevProps.qualities) {
      const n = note as Notes;
      if (prevProps.qualities[n] !== nextProps.qualities[n])
        return false;
    }
    return true;
  }
);
