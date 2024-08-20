'use client';

import style from '@switcher/switcher.module.scss';

import { useRef, useState } from 'react';

import cn from 'classnames';

import type { Nullable } from '@shared/types';

const Switcher = () => {
  const [isPlay, setPlay] = useState(true);
  const audioRef = useRef<Nullable<HTMLAudioElement>>(null);

  const toggleClass = () => {
    setPlay((previousState) => !previousState);
  };

  const playSound = () => {
    audioRef.current?.play();
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
      <span className={cn(style.inner, isPlay && 'play')} />
      <audio ref={audioRef}>
        <source src="audio/switcher.wav" type="audio/wav" />
      </audio>
    </button>
  );
};

export { Switcher };
