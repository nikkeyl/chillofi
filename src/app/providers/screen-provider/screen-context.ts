'use client';

import { createContext } from 'react';

type ScreenContextValues = {
  isCRTEffect: boolean;
  currentImage: string;
  setIsCRTEffect: () => void;
  setNextImage: () => void;
};

const ScreenContext = createContext<ScreenContextValues | null>(null);

export { ScreenContext, type ScreenContextValues };
