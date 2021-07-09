import React, { useState } from 'react';

const SettingsContext = React.createContext({
  darkTheme: false,
  setDarkTheme: (v: boolean) => {},
  freqA4: 440,
  setFreqA4: (v: number) => {},
});

export const SettingsContextProvider: React.FC = ({ children }) => {
  const [darkTheme, _setDarkTheme] = useState(false);
  const [freqA4, setFreqA4] = useState(440);

  const setDarkTheme = (value: boolean) => {
    _setDarkTheme(value);
    document.body.classList.toggle("dark", value);
  };

  return (
    <SettingsContext.Provider value={{
      darkTheme,
      setDarkTheme,
      freqA4,
      setFreqA4,
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContext;
