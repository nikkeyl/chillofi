'use client';

import { images } from '@data';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { ScreenContext, type ScreenContextValues } from './screen-context';

const ScreenProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCRTEffect, setIsCRTEffect] = useState(true);

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
    setIsCRTEffect((previousState) => !previousState);
  }, []);

  const ScreenContextValues = useMemo<ScreenContextValues>(
    () => ({
      isCRTEffect,
      currentImage,
      setIsCRTEffect: setCRT,
      setNextImage,
    }),
    [isCRTEffect, currentImage, setIsCRTEffect, setNextImage],
  );

  return (
    <ScreenContext.Provider value={ScreenContextValues}>
      {children}
    </ScreenContext.Provider>
  );
};

export { ScreenProvider };
