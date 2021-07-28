import React, { useState } from 'react';

const GlobalStatesContext = React.createContext({
  tunerTemperamentId: 1,
  setTunerTemperamentId: (v: number) => {},
});

export const GlobalStatesContextProvider: React.FC = ({ children }) => {

  const [tunerTemperamentId, setTunerTemperamentId] = useState(1);

  return (
    <GlobalStatesContext.Provider value={{
      tunerTemperamentId,
      setTunerTemperamentId,
    }}>
      {children}
    </GlobalStatesContext.Provider>
  );
}

export default GlobalStatesContext;
