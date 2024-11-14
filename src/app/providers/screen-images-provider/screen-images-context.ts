'use client';

import type { StaticImageData } from 'next/image';
import { createContext } from 'react';

type ScreenImagesContextValue = {
  currentImage: StaticImageData | string;
  setNextImage: () => void;
};

const ScreenImagesContext = createContext<ScreenImagesContextValue | null>(null);

export { ScreenImagesContext, type ScreenImagesContextValue };
