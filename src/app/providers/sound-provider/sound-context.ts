'use client';

import { createContext } from 'react';

type SoundContextValues = {
  precisionVolume: number;
  volume: number;
  setVolume: (newVolume: number) => void;
};

const SoundContext = createContext<SoundContextValues | null>(null);

export { SoundContext, type SoundContextValues };
