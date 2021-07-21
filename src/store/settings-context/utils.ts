import { equalsDeep, mergeDeep } from "../../utils/functions";

export const updateSettings = (settings: any, nextSettings: any) => {
  const _nextSettings = mergeDeep(settings, nextSettings);

  if (!equalsDeep(_nextSettings, settings)) {
    for (const name in settings) {
      if (typeof settings[name] !== 'function'
        && settings[name] !== _nextSettings[name])
      {
        const settingSetterName = `set${name.charAt(0).toUpperCase()}${name.slice(1)}`; // e.g.: settings.setDarkTheme
        const settingSetter = settings[settingSetterName];
        
        if (settingSetter) {
          settingSetter(_nextSettings[name]);
        } else
          console.warn('[updateSettings]: unknown settings setter:', settingSetterName);
      }
    }
  }
};
