import { useContext } from 'react';

import { ScreenImagesContext } from './screen-images-context';

const useScreenImagesContext = () => {
  const data = useContext(ScreenImagesContext);

  if (!data) {
    throw new Error(
      'useScreenImagesContext should be used withing ScreenImagesProvider',
    );
  }

  return data;
};

export { useScreenImagesContext };
