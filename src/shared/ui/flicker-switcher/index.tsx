'use client';

import { ariaLabels } from '@entities';
import { CircleSwitcherIcon } from '@icons';
import cn from 'classnames';
import { useState } from 'react';
import useSound from 'use-sound';

import style from './flicker-switcher.module.scss';

const FlickerSwitcher = () => {
  const { flickerControl } = ariaLabels;

  const [isSwitch, setIsSwitch] = useState(false);
  const [playSound] = useSound('audio/effects/crackle.mp3');

  return (
    <button
      aria-label={flickerControl}
      className={cn(style.button, isSwitch && style.rotate)}
      onClick={() => {
        setIsSwitch((previousState) => !previousState);
        playSound();
      }}
      type='button'
    >
      <CircleSwitcherIcon />
    </button>
  );
};

export { FlickerSwitcher };
