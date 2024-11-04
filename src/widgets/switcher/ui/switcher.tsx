'use client';

import { accessibilityLabels, sounds } from '@data';
import { useScreenContext } from '@providers';
import { Button } from '@ui';
import classes from 'classnames';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

import style from './switcher.module.scss';
import { SwitcherProperties } from './switcher.properties';

const Switcher = (properties: SwitcherProperties) => {
  const { type } = properties;

  const { switcherControlLabel } = accessibilityLabels;
  const { switcherSound } = sounds;
  const { setCRTEffect, setNextImage } = useScreenContext();

  const [isActive, setIsActive] = useState(false);
  const [playSound] = useSound(switcherSound);

  const handleClick = () => {
    setIsActive(!isActive);
    playSound();
  };

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <Button
      ariaLabel={switcherControlLabel}
      className={classes(style.switcher, isActive && style.active)}
      onClick={() => {
        handleClick();
        type === 'image' ? setNextImage() : setCRTEffect();
      }}
    />
  );
};

export { Switcher };
