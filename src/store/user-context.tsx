import React, { useEffect, useState } from 'react';
import { useStorageSQLite } from 'react-data-storage-sqlite-hook/dist';

const user = [{
    name: 'favorite',
    defaultValue: Array,
  },
];


const UserContext = React.createContext({
  favorite: [""],
  setFavorite: (v: Array<String>) => {},
});


export const UserContextProvider: React.FC = ({ children }) => {
  const {openStore, isStoreOpen, isKey, getItem, setItem, clear, isAvailable} = useStorageSQLite();
  const store = {openStore, isStoreOpen, isKey, getItem, setItem, clear, isAvailable};
  
  /**
   * @param name setting name
   * @param defaultValue default value for the setting. It may
   *                     be overriden by the value in the store
   *                     or the user input
   * @param callback1 function to call after updating the state
   * @returns an object with 3 props. Their name depend on the
   * 'name' parameter.
   * (e.g.: 'favorite' gives { favorite, setFavorite, syncFavorite }).
   * 'favorite' is the getter, 'setFavorite' is the setter, and
   * 'syncFavorite' will fetch and set the state in the store
   */
  const useSetting = <T,>(
    name: string,
    defaultValue: T,
    callback1 = (state: T) => {},
  ): any => {
    const [_state, _setState] = useState(defaultValue);
    
    // Execute 'setState hook', update the store value and callbacks
    const setState = (
      state: T,
      callback2 = (state: T) => {}
    ) => {
      store.setItem(name, String(state));
      _setState(state);
      callback1(state);
      callback2(state);
    };

    // Synchronize setting state with the value in the store
    const syncState = () => {
      (async () => {
        if (await store.isKey(name))
          setState(JSON.parse((await store.getItem(name))!));
      })();
    }

    return {
      name: name,
      get: _state,
      set: setState,
      sync: syncState,
    };
  };

  // Settings list
  const settingsList: any = user.map((curr: any) => ({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ...useSetting(curr.name, curr.defaultValue, curr.callback)
  }));

  // Provider value
  const ctxValue: any = settingsList.reduce((acc: any, curr: any) => {
    const nameCapitalized = `${curr.name.charAt(0).toUpperCase()}${curr.name.slice(1)}`;
    return {
      ...acc,
      [curr.name]: curr.get,
      [`set${nameCapitalized}`]: curr.set,
      [`sync${nameCapitalized}`]: curr.sync,
    };
  }, {});


  // Synchronize settings with values in the store
  useEffect(() => {
    if (store.isAvailable) {
      (async () => {
        await store.openStore({});
        
        for(const s of settingsList)
          s.sync();
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={ctxValue}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
