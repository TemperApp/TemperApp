import React, { useState } from 'react';

const SettingsContext = React.createContext({
  darkTheme: false,
  setDarkTheme: (v: boolean) => {},
});

export const SettingsContextProvider: React.FC = ({ children }) => {
  const [darkTheme, _setDarkTheme] = useState(false);

  const setDarkTheme = (value: boolean) => {
    _setDarkTheme(value);
    document.body.classList.toggle("dark", value);
  };

  return (
    <SettingsContext.Provider value={{
      darkTheme,
      setDarkTheme,
    }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContext;
