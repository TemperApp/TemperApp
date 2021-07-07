import { useState } from "react";

type Setting<T> = {
  name: string,
  value: T,
};

type SettingSelectable<T> = {
  name: string,
  value: T,
  options: T[],
};

const fetchSettings = async (): Promise<number> => {
  return await 500;
};

const createSetting = <T,>(
  [setting, setSetting]: [Setting<T>, (s: Setting<T>) => void]
): [
  T,
  (s: T) => void,
  Setting<T>,
  (s: Setting<T>) => void,
] => ([
  setting.value,
  (value: any) => setSetting({...setting, value}),
  setting,
  setSetting,
]);

const createSettingSelectable = <T,>(
  [setting, setSetting]: [SettingSelectable<T>, (s: SettingSelectable<T>) => void]
): [
  T,
  (s: T) => void,
  SettingSelectable<T>,
  (s: SettingSelectable<T>) => void,
] => ([
  setting.value,
  (value: any) => setSetting({...setting, value}),
  setting,
  setSetting,
]);


const useSettings = () => {

  console.log("useSettings")

  const [darkTheme, setDarkTheme, darkThemeSetting, setDarkThemeSetting] = createSetting(
    useState<Setting<boolean>>({
      name: "Thème clair/sombre",
      value: false,
    })
  );

  const [language, setLanguage, languageSetting, setLanguageSetting] = createSettingSelectable(
    useState<SettingSelectable<string>>({
      name: "Langue",
      value: "Français",
      options: [ "Français" ],
    })
  );

  const [pitchRef, setPitchRef, pitchRefSetting, setPitchRefSetting] = createSetting(
    useState<Setting<number>>({
      name: "A4 (Hz)",
      value: 440,
    })
  );

  return {
    darkTheme, setDarkTheme, darkThemeSetting, setDarkThemeSetting,
    language, setLanguage, languageSetting, setLanguageSetting,
    pitchRef, setPitchRef, pitchRefSetting, setPitchRefSetting,
  };
};

export default useSettings;
