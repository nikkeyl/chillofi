'use client';

import { images } from '@data';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { ImageContext, type ImageContextValues } from './image-context';

const ImageProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [CRTEffect, setCRTEffect] = useState(true);

  const currentImage = useMemo(
    () => images[currentImageIndex] ?? '',
    [currentImageIndex],
  );

  const setNextImage = useCallback(() => {
    setCurrentImageIndex(
      (previousImageIndex) => (previousImageIndex + 1) % images.length,
    );
  }, []);

  const setCRT = useCallback(() => {
    setCRTEffect((previousState) => !previousState);
  }, []);

  const imageContextValues = useMemo<ImageContextValues>(
    () => ({
      currentImage,
      CRTEffect,
      setNextImage,
      setCRTEffect: setCRT,
    }),
    [currentImage, setNextImage, setCRTEffect, CRTEffect],
  );

  return (
    <ImageContext.Provider value={imageContextValues}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageProvider };
