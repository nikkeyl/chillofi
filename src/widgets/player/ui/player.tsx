'use client';

import { accessibilityLabels, localStorageItems, playList, sounds } from '@data';
import { Button } from '@ui';
import classes from 'classnames';
import dynamic from 'next/dynamic';
import { ChangeEvent, useRef, useState } from 'react';
import useSound from 'use-sound';
import { useLocalStorage } from 'usehooks-ts';

import style from './player.module.scss';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const { playControlLabel, volumeControlLabel } = accessibilityLabels;
  const { currentVolumeItem } = localStorageItems;
  const { switcherSound } = sounds;

  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useLocalStorage(currentVolumeItem, 50, {
    initializeWithValue: false,
  });
  const [playSound] = useSound(switcherSound);

  const audioReference = useRef<HTMLAudioElement>(null);
  const precisionVolume = volume / 100;

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioReference.current) {
      audioReference.current.volume = precisionVolume;
    }
  };

  const handleClick = () => {
    setIsActive((previousState) => !previousState);
    playSound();
  };

  return (
    <>
      <Button
        ariaLabel={playControlLabel}
        className={classes(style.button, isActive && style.active)}
        onClick={handleClick}
      />
      <label aria-label={volumeControlLabel} htmlFor='mixer'>
        <input
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={volume}
          className={style.input}
          id='mixer'
          inert
          max={100}
          min={0}
          onChange={handleVolumeChange}
          type='range'
          value={volume}
        />
      </label>
      <AudioPlayer
        audioInitialState={{
          curPlayId: 1,
          isPlaying: isActive,
          volume: precisionVolume,
          muted: !volume,
        }}
        playList={playList}
      />
    </>
  );
};

export { Player };
