'use client';

import { useState } from 'react';

import AudioPlayer from 'react-modern-audio-player';
import cn from 'classnames';
import useSound from 'use-sound';

import { playList } from '@entities';

import style from './player.module.scss';

const Player = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [play] = useSound('audio/switcher.mp3');

  return (
    <>
      <button
        className={cn(style.switcher, isPlay && style.play)}
        type='button'
        aria-label='Switcher'
        onClick={() => {
          setIsPlay(!isPlay);
          play();
        }}
      />
      <AudioPlayer
        playList={playList}
        audioInitialState={{ curPlayId: 1, isPlaying: isPlay }}
      />
    </>
  );
};

export { Player };
