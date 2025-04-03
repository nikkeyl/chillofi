'use client';

import dynamic from 'next/dynamic';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import type { PlayList } from '@/types/playlist';
import { Button } from '@/ui/button/button';

import style from './player.module.scss';
import type { Properties } from './player.properties';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = (properties: Properties) => {
  const { label, labelledBy, text, volumeControlLabel, volumeLabel } = properties;

  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [volume, setVolume] = useLocalStorage('current-volume', 0.5, {
    initializeWithValue: false,
  });
  const [musicURLS, setMusicURLS] = useState<PlayList[]>([]);

  const handleVolumeUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);
  };

  const handleClick = () => {
    setIsActive((previousState) => !previousState);
  };

  useEffect(() => {
    const fetchMusic = async () => {
      const response = await fetch('/api/get-music');
      const music = await response.json();

      const playList = music.map((src: string, id: number) => ({
        src,
        id,
      }));

      setMusicURLS(playList);
    };

    setTimeout(() => {
      fetchMusic();
      setIsDisabled(false);
    }, 1000);
  }, []);

  return (
    <>
      <Button
        isActive={isActive}
        label={label}
        labelledBy={labelledBy}
        onClick={handleClick}
        text={text}
        type='play'
      />
      <label
        aria-disabled={isDisabled}
        aria-label={volumeControlLabel}
        className={style.slider}
        htmlFor={volumeLabel}
      >
        <input
          aria-disabled={isDisabled}
          aria-valuemax={1}
          aria-valuemin={0}
          aria-valuenow={volume}
          className={style.track}
          disabled={isDisabled}
          id={volumeLabel}
          max={1}
          min={0}
          onChange={handleVolumeUpdate}
          step={0.001}
          type='range'
          value={volume}
        />
        <span aria-labelledby={volumeLabel}>{volumeLabel}</span>
      </label>
      <AudioPlayer
        audioInitialState={{
          volume,
          curPlayId: 0,
          isPlaying: isActive,
          muted: !volume,
        }}
        playList={musicURLS}
      />
    </>
  );
};

export { Player };
