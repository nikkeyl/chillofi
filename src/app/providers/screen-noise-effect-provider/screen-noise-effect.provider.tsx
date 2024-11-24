'use client';

import { type PropsWithChildren, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import {
  ScreenNoiseEffectContext,
  type ScreenNoiseEffectContextValue,
} from './screen-noise-effect-context';

const ScreenNoiseEffectProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [isNoiseEffect, setIsNoiseEffect] = useLocalStorage(
    'is-noise-effect',
    true,
    {
      initializeWithValue: false,
    },
  );

  const toggleNoiseEffect = () => {
    setIsNoiseEffect((previousState) => !previousState);
  };

  const value = useMemo<ScreenNoiseEffectContextValue>(
    () => ({
      isNoiseEffect,
      setIsNoiseEffect: toggleNoiseEffect,
    }),
    [isNoiseEffect, toggleNoiseEffect],
  );

  return (
    <ScreenNoiseEffectContext.Provider value={value}>
      {children}
    </ScreenNoiseEffectContext.Provider>
  );
};

export { ScreenNoiseEffectProvider };
