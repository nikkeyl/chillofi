'use client';

import { playList } from '@entities';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import useSound from 'use-sound';

import style from './player.module.scss';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [play] = useSound('audio/effects/switch.mp3');

  const [volume, setVolume] = useState(50);
  const audioRef = useRef<HTMLAudioElement>();

  const handleVolumeChange = (event: any) => {
    const newVolume = event.target.value;

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <>
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
          audioInitialState={{
            curPlayId: 1,
            isPlaying: isPlay,
            volume: volume / 100,
          }}
          playList={playList}
        />
      </button>
      <input
        className={style.input}
        max={100}
        min={0}
        onChange={handleVolumeChange}
        type='range'
        value={volume}
      />
    </>
  );
};

export { Player };
