import { useContext } from 'react';

import { ImageContext } from './image-context';

const useImageContext = () => {
  const data = useContext(ImageContext);

  if (!data) {
    throw new Error('Image Context not found');
  }

  return data;
};

export { useImageContext };
