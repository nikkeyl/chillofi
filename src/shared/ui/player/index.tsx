'use client';

import { ariaLabels, localStorageItems, playList } from '@entities';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { ChangeEvent, useRef, useState } from 'react';
import useSound from 'use-sound';

import style from './player.module.scss';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const { playControl, volumeControl } = ariaLabels;
  const { volumeItem } = localStorageItems;

  const [isPlay, setIsPlay] = useState(false);
  const [playSound] = useSound('audio/effects/switch.mp3');
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem(volumeItem);

    return parseInt(savedVolume ?? '50', 10);
  });

  const audioReference = useRef<HTMLAudioElement>();
  const parseVolume = volume / 100;
  const saveVolumeState = localStorage.setItem(volumeItem, volume.toString());

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioReference.current) {
      audioReference.current.volume = parseVolume;
    }
  };

  return (
    <>
      <button
        aria-label={playControl}
        className={cn(style.player, isPlay && style.play)}
        onClick={() => {
          setIsPlay(!isPlay);
          playSound();
        }}
        type='button'
      >
        <AudioPlayer
          audioInitialState={{
            curPlayId: 1,
            isPlaying: isPlay,
            volume: parseVolume,
          }}
          playList={playList}
        />
      </button>
      <input
        aria-label={volumeControl}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={volume}
        className={style.input}
        max={100}
        min={0}
        onBlur={() => saveVolumeState}
        onChange={handleVolumeChange}
        type='range'
        value={volume}
      />
    </>
  );
};

export { Player };
