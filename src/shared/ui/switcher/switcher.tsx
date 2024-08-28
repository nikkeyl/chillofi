'use client';

import { useRef, useState } from 'react';

import cn from 'classnames';

import type { Nullable } from '@types';

import style from './switcher.module.scss';

const Switcher = () => {
  const [isPlay, setIsPlay] = useState(true);

  const audioReference = useRef<Nullable<HTMLAudioElement>>(null);

  const toggleClass = () => {
    setIsPlay((previousState) => !previousState);
  };

  const playSound = () => {
    audioReference.current?.play();
  };

  return (
    <button
      className={style.switcher}
      type='button'
      aria-label='Switcher'
      onClick={() => {
        toggleClass();
        playSound();
      }}
    >
      <span className={cn(style.inner, isPlay && style.play)} />
      <audio ref={audioReference}>
        <source src='audio/switcher.wav' type='audio/wav' />
      </audio>
    </button>
  );
};

export { Switcher };
