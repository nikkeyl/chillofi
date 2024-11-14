'use client';

import type { StaticImageData } from 'next/image';
import { createContext } from 'react';

type ScreenContextValue = {
  isCRTEffect: boolean;
  currentImage: StaticImageData | string;
  setIsCRTEffect: () => void;
  setNextImage: () => void;
};

const ScreenContext = createContext<ScreenContextValue | null>(null);

export { ScreenContext, type ScreenContextValue };
