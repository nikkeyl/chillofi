'use client';

import { playList } from '@entities';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import useSound from 'use-sound';

import style from './player.module.scss';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [play] = useSound('audio/effects/switcher.mp3');

  return (
    <>
      <button
        aria-label='Switcher'
        className={cn(style.switcher, isPlay && style.play)}
        onClick={() => {
          setIsPlay(!isPlay);
          play();
        }}
        type='button'
      />
      <AudioPlayer
        audioInitialState={{ curPlayId: 1, isPlaying: isPlay }}
        playList={playList}
      />
    </>
  );
};

export { Player };
