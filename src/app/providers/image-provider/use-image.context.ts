import { useContext } from 'react';

import { ImageContext } from './image.context';

const useImageContext = () => {
  const data = useContext(ImageContext);

  if (!data) {
    throw new Error('useImageContext should be used withing ImageProvider');
  }

  return data;
};

export { useImageContext };
