'use client';

import { images } from '@data';
import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import {
  ScreenImagesContext,
  type ScreenImagesContextValue,
} from './screen-images-context';

const ScreenImagesProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [currentImageIndex, setCurrentImageIndex] = useLocalStorage(
    'current-image-index',
    0,
    {
      initializeWithValue: false,
    },
  );

  const currentImage = useMemo(
    () => images[currentImageIndex] ?? '',
    [currentImageIndex],
  );

  const setNextImage = useCallback(() => {
    setCurrentImageIndex(
      (previousImageIndex) => (previousImageIndex + 1) % images.length,
    );
  }, [setCurrentImageIndex]);

  const contextValue = useMemo<ScreenImagesContextValue>(
    () => ({
      currentImage,
      setNextImage,
    }),
    [currentImage, setNextImage],
  );

  return (
    <ScreenImagesContext.Provider value={contextValue}>
      {children}
    </ScreenImagesContext.Provider>
  );
};

export { ScreenImagesProvider };
