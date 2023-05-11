import React, { useEffect, useState } from 'react';
import useTemperTone from '../hooks/useTemperTone';

const GlobalStatesContext = React.createContext({
  isTemperToneMute: true,
  setIsTemperToneMute: (v: boolean) => {},
  tunerTemperamentId: 'Equal',
  setTunerTemperamentId: (v: string) => {},
});

export const GlobalStatesContextProvider: React.FC = ({ children }) => {

  const TemperTone = useTemperTone();

  const [tunerTemperamentId, setTunerTemperamentId] = useState('Equal');
  const [isTemperToneMute, setIsTemperToneMute] = useState(true);

  useEffect(() => {
    TemperTone.setVolume(isTemperToneMute ? -192 : -0.1);
  })

  return (
    <GlobalStatesContext.Provider value={{
      tunerTemperamentId,
      setTunerTemperamentId,
      isTemperToneMute,
      setIsTemperToneMute,
    }}>
      {children}
    </GlobalStatesContext.Provider>
  );
}

export default GlobalStatesContext;
