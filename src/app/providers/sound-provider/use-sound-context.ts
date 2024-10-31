import { useContext } from 'react';

import { SoundContext } from './sound-context';

const useSoundContext = () => {
  const data = useContext(SoundContext);

  if (!data) {
    throw new Error('Sound Context not found');
  }

  return data;
};

export { useSoundContext };
