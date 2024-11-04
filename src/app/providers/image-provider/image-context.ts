'use client';

import { createContext } from 'react';

type ImageContextValues = {
  currentImage: string;
  CRTEffect: boolean;
  setNextImage: () => void;
  setCRTEffect: () => void;
};

const ImageContext = createContext<ImageContextValues | null>(null);

export { ImageContext, type ImageContextValues };
