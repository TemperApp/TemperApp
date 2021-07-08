import React, { useEffect, useState } from 'react';
import { useStorageSQLite } from 'react-data-storage-sqlite-hook/dist';

const SettingsContext = React.createContext({
  darkTheme: false,
  setDarkTheme: (v: boolean) => {},
  freqA4: 440,
  setFreqA4: (v: number) => {},
});

export const SettingsContextProvider: React.FC = ({ children }) => {
  const {openStore, isKey, getItem, setItem, clear, isAvailable} = useStorageSQLite();
  const store = {openStore, isKey, getItem, setItem, clear, isAvailable};

  const [darkTheme, _setDarkTheme] = useState(false);
  const [freqA4, _setFreqA4] = useState(440);

  const setDarkTheme = (value: boolean) => {
    store.setItem('darkTheme', String(value));
    _setDarkTheme(value);
    document.body.classList.toggle("dark", value);
  };

  const setFreqA4 = (value: number) => {
    store.setItem('freqA4', String(value));
    _setFreqA4(value);
  }
  
  useEffect(() => {
    if (store.isAvailable) {
      (async () => {
        await store.openStore({});
  
        (async () => {
          if (await store.isKey('darkTheme'))
            setDarkTheme((await store.getItem('darkTheme')) === 'true');
        })();
  
        (async () => {
          if (await store.isKey('freqA4'))
            setFreqA4(Number(await store.getItem('freqA4')));
        })();
  
      })();
    }
  }, []);

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
