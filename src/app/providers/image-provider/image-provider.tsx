'use client';

import { images } from '@data';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

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

  const imageContextValues = useMemo<ImageContextValues>(
    () => ({
      currentImage,
      setNextImage,
    }),
    [currentImage],
  );

  return (
    <ImageContext.Provider value={imageContextValues}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageProvider };
