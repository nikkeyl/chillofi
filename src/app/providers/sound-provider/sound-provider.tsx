'use client';

import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { SoundContext, type SoundContextValues } from './sound-context';

const SoundProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [volume, setVolume] = useState(50);

  const precisionVolume = volume / 100;

  const setVolumeState = useCallback((newVolume: number) => {
    setVolume((previousVolume) =>
      previousVolume !== newVolume ? newVolume : previousVolume,
    );
  }, []);

  const soundContextValues = useMemo<SoundContextValues>(
    () => ({
      precisionVolume,
      volume,
      setVolume: setVolumeState,
    }),
    [volume, precisionVolume, setVolume],
  );

  return (
    <SoundContext.Provider value={soundContextValues}>
      {children}
    </SoundContext.Provider>
  );
};

export { SoundProvider };
