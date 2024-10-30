'use client';

import { images } from '@data';
import { ReactNode, useCallback, useState } from 'react';

import { SettingsContext, type SettingsContextValues } from './settings-context';

type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [currentImage, setCurrentImage] = useState(images[0] ?? '');

  const setRandomImage = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * images.length);

    setCurrentImage(images[randomIndex] ?? '');
  }, []);

  const settingsContextValue: SettingsContextValues = {
    image: currentImage,
    randomImage: setRandomImage,
  };

  return (
    <SettingsContext.Provider value={settingsContextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider };
