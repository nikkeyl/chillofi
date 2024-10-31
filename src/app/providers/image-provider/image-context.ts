import { createContext } from 'react';

type ImageContextValues = {
  currentImage: string;
  setNextImage: () => void;
};

const ImageContext = createContext<ImageContextValues | null>(null);

export { ImageContext, type ImageContextValues };
