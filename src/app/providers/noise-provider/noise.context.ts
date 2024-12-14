'use client';

import { createContext } from 'react';

type NoiseContextValue = {
  isNoise: boolean;
  setIsNoise: () => void;
};

const NoiseContext = createContext<NoiseContextValue | null>(null);

export { NoiseContext, type NoiseContextValue };
