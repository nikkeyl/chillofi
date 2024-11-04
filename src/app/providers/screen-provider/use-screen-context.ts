import { useContext } from 'react';

import { ScreenContext } from './screen-context';

const useScreenContext = () => {
  const data = useContext(ScreenContext);

  if (!data) {
    throw new Error('Screen Context not found');
  }

  return data;
};

export { useScreenContext };
