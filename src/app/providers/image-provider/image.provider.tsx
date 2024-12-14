'use client';

import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { ImageContext, type ImageContextValue } from './image.context';
import type { ImageProviderProperties } from './image.provider.properties';

const ImageProvider = (properties: PropsWithChildren<ImageProviderProperties>) => {
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

  const value = useMemo<ImageContextValue>(
    () => ({
      currentImage,
      setNextImage,
    }),
    [currentImage, setNextImage],
  );

  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>;
};

export { ImageProvider };
