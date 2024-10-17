'use client';

import { ariaLabels, sounds } from '@data';
import { CircleSwitcherIcon } from '@icons';
import classes from 'classnames';
import { useState } from 'react';
import useSound from 'use-sound';

import style from './flicker-switcher.module.scss';

const FlickerSwitcher = () => {
  const { flickerControlLabel } = ariaLabels;
  const { crackleSound } = sounds;

  const [isActive, setIsActive] = useState(false);
  const [playSound] = useSound(crackleSound);

  return (
    <button
      aria-label={flickerControlLabel}
      className={classes(style.switcher, isActive && style.active)}
      onClick={() => {
        setIsActive((previousState) => !previousState);
        playSound();
      }}
      type='button'
    >
      <CircleSwitcherIcon />
    </button>
  );
};

export { FlickerSwitcher };
