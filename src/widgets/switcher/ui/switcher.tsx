'use client';

import { accessibilityLabels, sounds } from '@data';
import { useImageContext } from '@providers';
import { Button } from '@ui';
import classes from 'classnames';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

import style from './switcher.module.scss';

const Switcher = () => {
  const { switcherControlLabel } = accessibilityLabels;
  const { switcherSound } = sounds;
  const { setNextImage } = useImageContext();

  const [isActive, setIsActive] = useState(false);
  const [playSound] = useSound(switcherSound);

  const handleClick = () => {
    setIsActive(!isActive);
    setNextImage();
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
      onClick={handleClick}
    />
  );
};

export { Switcher };
