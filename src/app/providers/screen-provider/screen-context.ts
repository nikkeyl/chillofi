'use client';

import { createContext } from 'react';

type ScreenContextValues = {
  CRTEffect: boolean;
  currentImage: string;
  setCRTEffect: () => void;
  setNextImage: () => void;
};

const ScreenContext = createContext<ScreenContextValues | null>(null);

export { ScreenContext, type ScreenContextValues };
