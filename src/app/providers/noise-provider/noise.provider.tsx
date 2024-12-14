'use client';

import { type PropsWithChildren, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { NoiseContext, type NoiseContextValue } from './noise.context';

const NoiseProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [isNoise, setIsNoise] = useLocalStorage('is-noise', true, {
    initializeWithValue: false,
  });

  const toggleNoise = () => {
    setIsNoise((previousState) => !previousState);
  };

  const value = useMemo<NoiseContextValue>(
    () => ({
      isNoise,
      setIsNoise: toggleNoise,
    }),
    [isNoise, toggleNoise],
  );

  return <NoiseContext.Provider value={value}>{children}</NoiseContext.Provider>;
};

export { NoiseProvider };
