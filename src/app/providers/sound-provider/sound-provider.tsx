'use client';

import { PropsWithChildren, useMemo, useState } from 'react';

import { SoundContext, type SoundContextValues } from './sound-context';

const SoundProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [volume, setVolume] = useState(50);

  const precisionVolume = volume / 100;

  const soundContextValues = useMemo<SoundContextValues>(
    () => ({
      precisionVolume,
      volume,
      setVolume,
    }),
    [volume, precisionVolume],
  );

  return (
    <SoundContext.Provider value={soundContextValues}>
      {children}
    </SoundContext.Provider>
  );
};

export { SoundProvider };
