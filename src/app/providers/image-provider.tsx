'use client';

import { images } from '@data';
import { PropsWithChildren, useCallback, useState } from 'react';

import { ImageContext, type ImageContextValues } from './image-context';

const ImageProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex] ?? '';

  const setNextImage = useCallback(() => {
    setCurrentImageIndex(
      (previousImageIndex) => (previousImageIndex + 1) % images.length,
    );
  }, []);

  const imageContextValues: ImageContextValues = {
    currentImage,
    setNextImage,
  };

  return (
    <ImageContext.Provider value={imageContextValues}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageProvider };
