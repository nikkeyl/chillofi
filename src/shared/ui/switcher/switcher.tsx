'use client';

import { useState } from 'react';

import useSound from 'use-sound';

import cn from 'classnames';

import style from './switcher.module.scss';

const Switcher = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [play] = useSound('audio/switcher.mp3');

  return (
    <button
      className={cn(style.switcher, isPlay && style.play)}
      type='button'
      aria-label='Switcher'
      onClick={() => {
        setIsPlay(!isPlay);
        play();
      }}
    />
  );
};

export { Switcher };
