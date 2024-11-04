'use client';

import { accessibilityLabels, sounds } from '@data';
import { useScreenContext } from '@providers';
import { Button } from '@ui';
import useSound from 'use-sound';

import style from './switcher.module.scss';
import { SwitcherProperties } from './switcher.properties';

const Switcher = (properties: SwitcherProperties) => {
  const { type } = properties;

  const { switcherControlLabel } = accessibilityLabels;
  const { switcherSound } = sounds;
  const { setIsCRTEffect, setNextImage } = useScreenContext();

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
