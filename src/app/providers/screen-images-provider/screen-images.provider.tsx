'use client';

import { type PropsWithChildren, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import type { ScreenImagesProviderProperties } from './screen-images.provider.properties';
import {
  ScreenImagesContext,
  type ScreenImagesContextValue,
} from './screen-images-context';

const ScreenImagesProvider = (
  properties: PropsWithChildren<ScreenImagesProviderProperties>,
) => {
  const { children, images } = properties;

  const [currentImageIndex, setCurrentImageIndex] = useLocalStorage(
    'current-image-index',
    0,
    {
      initializeWithValue: false,
    },
  );

  const currentImage = images[currentImageIndex] ?? '';

  const setNextImage = () => {
    setCurrentImageIndex(
      (previousImageIndex) => (previousImageIndex + 1) % images.length,
    );
  };

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
