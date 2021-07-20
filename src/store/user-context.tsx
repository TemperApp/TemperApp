import React, { useEffect, useState } from 'react';
import { useStorageSQLite } from 'react-data-storage-sqlite-hook/dist';

const UserContext = React.createContext({
  favorite: [''],
  setFavorite: (v: string[]) => {},
});

export const UserContextProvider: React.FC = ({ children }) => {
  const {openStore, isKey, getItem, setItem, clear, isAvailable} = useStorageSQLite();
  const store = {openStore, isKey, getItem, setItem, clear, isAvailable};

  const [favorite, _setFavorite] = useState<string[]>([]);

  const setFavorite = (value: string[]) => {
    store.setItem('favorite', JSON.stringify(value));
    _setFavorite(value);
  };
  
  useEffect(() => {
    if (store.isAvailable) {
      (async () => {
        await store.openStore({});
  
        (async () => {
          if (await store.isKey('favorite'))
            setFavorite( JSON.parse( (await store.getItem('favorite'))!) as string[]);
        })();
    
      })();
    }
  }, []);

  return (
    <UserContext.Provider value={{
      favorite,
      setFavorite,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;