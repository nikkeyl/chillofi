'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

type SoundContextValues = {
  precisionVolume: number;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
};

const SoundContext = createContext<SoundContextValues | null>(null);

export { SoundContext, type SoundContextValues };
