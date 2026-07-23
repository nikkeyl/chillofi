'use client';

import { type PropsWithChildren, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { NoiseContext, type NoiseContextValue } from './noise.context';

const NoiseProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [isNoise, setIsNoise] = useLocalStorage('is-noise', true, {
    initializeWithValue: false,
  });

  const value = useMemo<NoiseContextValue>(
    () => ({
      isNoise,
      setIsNoise: () => {
        setIsNoise((previousState) => !previousState);
      },
    }),
    [isNoise, setIsNoise],
  );

  return <NoiseContext.Provider value={value}>{children}</NoiseContext.Provider>;
};

export { NoiseProvider };
