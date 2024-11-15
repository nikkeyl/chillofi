'use client';

import { type PropsWithChildren, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import {
  ScreenCRTEffectContext,
  type ScreenCRTEffectContextValue,
} from './screen-crt-effect-context';

const ScreenCRTEffectProvider = (properties: PropsWithChildren) => {
  const { children } = properties;

  const [isCRTEffect, setIsCRTEffect] = useLocalStorage('is-crt-effect', true, {
    initializeWithValue: false,
  });

  const toggleCRTEffect = () => {
    setIsCRTEffect((previousState) => !previousState);
  };

  const contextValue = useMemo<ScreenCRTEffectContextValue>(
    () => ({
      isCRTEffect,
      setIsCRTEffect: toggleCRTEffect,
    }),
    [isCRTEffect, toggleCRTEffect],
  );

  return (
    <ScreenCRTEffectContext.Provider value={contextValue}>
      {children}
    </ScreenCRTEffectContext.Provider>
  );
};

export { ScreenCRTEffectProvider };
