import { useContext } from 'react';

import { NoiseContext } from './noise.context';

const useNoiseContext = () => {
  const data = useContext(NoiseContext);

  if (!data) {
    throw new Error('useNoiseContext should be used withing NoiseProvider');
  }

  return data;
};

export { useNoiseContext };
