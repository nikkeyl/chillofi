'use client';

import type { StaticImageData } from 'next/image';
import { createContext } from 'react';

type ScreenContextValues = {
  isCRTEffect: boolean;
  currentImage: StaticImageData | string;
  setIsCRTEffect: () => void;
  setNextImage: () => void;
};

const ScreenContext = createContext<ScreenContextValues | null>(null);

export { ScreenContext, type ScreenContextValues };
