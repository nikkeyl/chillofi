'use client';

import { images, localStorageItems } from '@data';
import { type PropsWithChildren, useCallback, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { ScreenContext, type ScreenContextValue } from './screen-context';

const ScreenProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const { currentImageIndexItem, isCRTEffectItem } = localStorageItems;

  const [currentImageIndex, setCurrentImageIndex] = useLocalStorage(
    currentImageIndexItem,
    0,
    {
      initializeWithValue: false,
    },
  );
  const [isCRTEffect, setIsCRTEffect] = useLocalStorage(isCRTEffectItem, true, {
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
