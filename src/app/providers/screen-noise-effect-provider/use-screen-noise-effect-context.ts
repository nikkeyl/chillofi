import { useContext } from 'react';

import { ScreenNoiseEffectContext } from './screen-noise-effect-context';

const useScreenNoiseEffectContext = () => {
  const data = useContext(ScreenNoiseEffectContext);

  if (!data) {
    throw new Error(
      'useScreenNoiseEffectContext should be used withing ScreenNoiseEffectProvider',
    );
  }

  return data;
};

export { useScreenNoiseEffectContext };
