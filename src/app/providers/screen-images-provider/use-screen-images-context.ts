import { useContext } from 'react';

import { ScreenImagesContext } from './screen-images-context';

const useScreenImagesContext = () => {
  const data = useContext(ScreenImagesContext);

  if (!data) {
    throw new Error('useScreenContext should be used withing ScreenProvider');
  }

  return data;
};

export { useScreenImagesContext };
