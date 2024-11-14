'use client';

import { accessibilityLabels, sounds } from '@data';
import { useScreenCRTEffectContext, useScreenImagesContext } from '@providers';
import { Button } from '@ui';
import useSound from 'use-sound';

import style from './switcher.module.scss';
import type { SwitcherProperties } from './switcher.properties';

const Switcher = (properties: SwitcherProperties) => {
  const { type } = properties;

  const { switcherControlLabel } = accessibilityLabels;
  const { switcherSound } = sounds;

  const { setIsCRTEffect } = useScreenCRTEffectContext();
  const { setNextImage } = useScreenImagesContext();

  const [playSound] = useSound(switcherSound);

  const handleClick = () => {
    playSound();

    if (type === 'image') {
      setNextImage();
    } else {
      setIsCRTEffect();
    }
  };

  return (
    <Button
      ariaLabel={switcherControlLabel}
      className={style.button ?? ''}
      onClick={handleClick}
    />
  );
};

export { Switcher };
