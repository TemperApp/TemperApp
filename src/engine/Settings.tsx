const Settings = {

  darkTheme: (
    value: boolean | undefined = undefined
  ): boolean => {
    if (value !== undefined)
      document.body.classList.toggle("dark", value);
    return Settings.setOrGetAsBoolean('darkTheme', value);
  },


  setOrGetAsBoolean: (
    key: string,
    value: boolean | undefined,
  ): boolean => {
    if (value !== undefined)
      Settings.set(key, value);
    const res = Settings.getAsBoolOrNull(key);
    if (res === null)
      throw Error(`[Settings]: localStorage does not have a value for key: ${key}`)
    return res;
  },


  setOrGetAsNumberOrNull: (
    key: string,
    value: number | undefined,
  ): number => {
    if (value !== undefined)
      Settings.set(key, value);
    const res = Settings.getAsNumberOrNull(key);
    if (res === null)
      throw Error(`[Settings]: localStorage does not have a value for key: ${key}`)
    return res;
  },


  set: (key: string, value: any): void => {
    localStorage.setItem(key, String(value));
  },


  get: (key: string): string | null => {
    return localStorage.getItem(key);
  },


  getAsBoolOrNull: (key: string): boolean | null => {
    const res = localStorage.getItem(key);
    return (res === 'true') ? true : false;
  },


  getAsNumberOrNull: (key: string): number | null => {
    const res = localStorage.getItem(key);
    return (res === null) ? null : Number(res);
  },
}

export default Settings;
