'use client';

import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocalStorage } from 'usehooks-ts';

import {
  ScreenImagesContext,
  type ScreenImagesContextValue,
} from './screen-images-context';

const ScreenImagesProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [imagesURL, setImagesURL] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useLocalStorage(
    'current-image-index',
    0,
    {
      initializeWithValue: false,
    },
  );

  const currentImage = useMemo(
    () => imagesURL[currentImageIndex] ?? '',
    [currentImageIndex],
  );

  const setNextImage = useCallback(() => {
    setCurrentImageIndex(
      (previousImageIndex) => (previousImageIndex + 1) % imagesURL.length,
    );
  }, [setCurrentImageIndex]);

  const contextValue = useMemo<ScreenImagesContextValue>(
    () => ({
      currentImage,
      setNextImage,
    }),
    [currentImage, setNextImage],
  );

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/get-images');
      const images = await response.json();

      setImagesURL(images);
    };

    fetchImages();
  }, []);

  return (
    <ScreenImagesContext.Provider value={contextValue}>
      {children}
    </ScreenImagesContext.Provider>
  );
};

export { ScreenImagesProvider };
