import { equalsDeep, mergeDeep } from "../../utils/functions";

const updateSettings = (settings: any, settingsChanges: any) => {
  const nextSettings = mergeDeep(settings, settingsChanges);

  if (!equalsDeep(nextSettings, settings)) {
    for (const name in settings) {
      if (settings[name] !== nextSettings[name]) {
        const settingSetter = settings[`set${name.charAt(0).toUpperCase()}${name.slice(1)}`];
        settingSetter(nextSettings[name]);
      }
    }
  }
};

export default updateSettings;
