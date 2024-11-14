'use client';

import { createContext } from 'react';

type ScreenCRTEffectContextValue = {
  isCRTEffect: boolean;
  setIsCRTEffect: () => void;
};

const ScreenCRTEffectContext = createContext<ScreenCRTEffectContextValue | null>(
  null,
);

export { ScreenCRTEffectContext, type ScreenCRTEffectContextValue };
