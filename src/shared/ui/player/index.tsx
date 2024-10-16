'use client';

import { ariaLabels, playList } from '@entities';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import useSound from 'use-sound';

import style from './player.module.scss';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const { playControl } = ariaLabels;

  const [isPlay, setIsPlay] = useState(false);
  const [playSound] = useSound('audio/effects/switch.mp3');

  return (
    <button
      aria-label={playControl}
      className={cn(style.player, isPlay && style.play)}
      onClick={() => {
        setIsPlay((previousState) => !previousState);
        playSound();
      }}
      type='button'
    >
      <AudioPlayer
        audioInitialState={{
          curPlayId: 1,
          isPlaying: isPlay,
          volume: 1/* precisionVolume */,
          muted: false/* !volume */,
        }}
        playList={playList}
      />
    </button>
  );
};

export { Player };
