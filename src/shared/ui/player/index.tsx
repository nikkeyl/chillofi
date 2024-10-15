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
  const [play] = useSound('audio/effects/switch.mp3');

  return (
    <button
      aria-label='Player'
      className={cn(style.player, isPlay && style.play)}
      onClick={() => {
        setIsPlay(!isPlay);
        play();
      }}
      type='button'
    >
      <AudioPlayer
        audioInitialState={{ curPlayId: 1, isPlaying: isPlay }}
        playList={playList}
      />
    </button>
  );
};

export { Player };
