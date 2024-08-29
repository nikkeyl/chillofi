'use client';

import { useState } from 'react';

import useSound from 'use-sound';

import cn from 'classnames';

import style from './switcher.module.scss';

const Switcher = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [play] = useSound('audio/Switcher.mp3');

  return (
    <button
      className={style.switcher}
      type='button'
      aria-label='Switcher'
      onClick={() => {
        setIsPlay(!isPlay);
        play();
      }}
    >
      <span className={cn(style.inner, isPlay && style.play)} />
    </button>
  );
};

export { Switcher };
