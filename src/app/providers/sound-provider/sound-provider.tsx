'use client';

import { PropsWithChildren, useState } from 'react';

import { SoundContext, type SoundContextValues } from './sound-context';

const SoundProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [volume, setVolume] = useState(50);

  const precisionVolume = volume / 100;

  const soundContextValues: SoundContextValues = {
    volume,
    setVolume,
    precisionVolume,
  };

  return (
    <SoundContext.Provider value={soundContextValues}>
      {children}
    </SoundContext.Provider>
  );
};

export { SoundProvider };
