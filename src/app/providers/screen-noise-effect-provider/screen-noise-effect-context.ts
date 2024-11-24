'use client';

import { createContext } from 'react';

type ScreenNoiseEffectContextValue = {
  isNoiseEffect: boolean;
  setIsNoiseEffect: () => void;
};

const ScreenNoiseEffectContext = createContext<ScreenNoiseEffectContextValue | null>(
  null,
);

export { ScreenNoiseEffectContext, type ScreenNoiseEffectContextValue };
