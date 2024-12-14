'use client';

import type { StaticImageData } from 'next/image';
import { createContext } from 'react';

type ImageContextValue = {
  currentImage: StaticImageData | string;
  setNextImage: () => void;
};

const ImageContext = createContext<ImageContextValue | null>(null);

export { ImageContext, type ImageContextValue };
