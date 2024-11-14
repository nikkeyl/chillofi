import { useContext } from 'react';

import { ScreenCRTEffectContext } from './screen-crt-effect-context';

const useScreenCRTEffectContext = () => {
  const data = useContext(ScreenCRTEffectContext);

  if (!data) {
    throw new Error(
      'useScreenCRTEffectContext should be used withing ScreenCRTEffectProvider',
    );
  }

  return data;
};

export { useScreenCRTEffectContext };
