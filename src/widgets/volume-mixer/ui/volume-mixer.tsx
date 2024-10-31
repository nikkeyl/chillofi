'use client';

import { accessibilityLabels } from '@data';
import { useSoundContext } from '@providers';
import { ChangeEvent, useRef } from 'react';

import style from './volume-mixer.module.scss';

const VolumeMixer = () => {
  const { volumeControlLabel } = accessibilityLabels;
  const { precisionVolume, volume, setVolume } = useSoundContext();

  const audioReference = useRef<HTMLAudioElement>();

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioReference.current) {
      audioReference.current.volume = precisionVolume;
    }
  };

  return (
    <label aria-label={volumeControlLabel} htmlFor='mixer'>
      <input
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={volume}
        className={style.mixer}
        id='mixer'
        max={100}
        min={0}
        onChange={handleVolumeChange}
        type='range'
        value={volume}
      />
    </label>
  );
};

export { VolumeMixer };
