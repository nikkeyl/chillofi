'use client';

import style from '@switcher/switcher.module.scss';

import { useState } from 'react';

import cn from 'classnames';

import type { Sound } from './sound';

const Switcher = () => {
  const [isActive, setActive] = useState(true);
  const [sound, setSound] = useState<Sound>(null);

  const toggleClass = () => {
    setActive((previousState) => !previousState);
  };

  const playSound = () => {
    sound?.play();
  };

  return (
    <button
      className={style.switcher}
      type="button"
      onClick={() => {
        toggleClass();
        playSound();
      }}
      aria-label="Switcher"
    >
      <span className={cn(style.inner, isActive && 'active')}></span>
      <audio ref={(sound) => setSound(sound)}>
        <source src="audio/switcher.wav" type="audio/wav" />
      </audio>
    </button>
  );
};

export { Switcher };
