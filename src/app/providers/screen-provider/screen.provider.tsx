'use client';

import { images } from '@data';
import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { ScreenContext, type ScreenContextValue } from './screen-context';

const ScreenProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [currentImageIndex, setCurrentImageIndex] = useLocalStorage(
    'current-image-index',
    0,
    {
      initializeWithValue: false,
    },
  );
  const [isCRTEffect, setIsCRTEffect] = useLocalStorage('is-crt-effect', true, {
    initializeWithValue: false,
  });

  const currentImage = useMemo(
    () => images[currentImageIndex] ?? '',
    [currentImageIndex],
  );

  const setNextImage = useCallback(() => {
    setCurrentImageIndex(
      (previousImageIndex) => (previousImageIndex + 1) % images.length,
    );
  }, [setCurrentImageIndex]);

  const toggleCRTEffect = useCallback(() => {
    setIsCRTEffect((previousState) => !previousState);
  }, [setIsCRTEffect]);

  const contextValue = useMemo<ScreenContextValue>(
    () => ({
      isCRTEffect,
      currentImage,
      setIsCRTEffect: toggleCRTEffect,
      setNextImage,
    }),
    [isCRTEffect, currentImage, toggleCRTEffect, setNextImage],
  );

  return (
    <ScreenContext.Provider value={contextValue}>{children}</ScreenContext.Provider>
  );
};

export { ScreenProvider };
