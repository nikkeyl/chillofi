import { useContext } from 'react';

import { ScreenContext } from './screen-context';

const useScreenContext = () => {
  const data = useContext(ScreenContext);

  if (!data) {
    throw new Error('useScreenContext should be used withing ScreenProvider');
  }

  return data;
};

export { useScreenContext };
