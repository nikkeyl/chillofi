'use client';

import { ariaLabels, localStorageItems } from '@data';
import { ChangeEvent, useRef, useState } from 'react';

import style from './volume-mixer.module.scss';

const VolumeMixer = () => {
  const { volumeControlLabel } = ariaLabels;
  const { volumeItem } = localStorageItems;

  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem(volumeItem);

    return parseInt(savedVolume ?? '50', 10);
  });

  const audioReference = useRef<HTMLAudioElement>();
  const precisionVolume = volume / 100;
  const saveVolume = localStorage.setItem(volumeItem, volume.toString());

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioReference.current) {
      audioReference.current.volume = precisionVolume;
    }
  };

  return (
    <input
      aria-label={volumeControlLabel}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={volume}
      className={style.mixer}
      max={100}
      min={0}
      onBlur={() => saveVolume}
      onChange={handleVolumeChange}
      type='range'
      value={volume}
    />
  );
};

export { VolumeMixer };
