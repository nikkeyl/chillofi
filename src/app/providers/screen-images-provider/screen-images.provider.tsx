'use client';

import { type PropsWithChildren, useCallback, useMemo } from 'react';
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

  const setNextImage = useCallback(() => {
    setCurrentImageIndex(
      (previousImageIndex: number) => (previousImageIndex + 1) % images.length,
    );
  }, [setCurrentImageIndex, images.length]);

  const value = useMemo<ScreenImagesContextValue>(
    () => ({
      currentImage,
      setNextImage,
    }),
    [currentImage, setNextImage],
  );

  return (
    <ScreenImagesContext.Provider value={value}>
      {children}
    </ScreenImagesContext.Provider>
  );
};

export { ScreenImagesProvider };
