'use client';

import { Howl } from 'howler';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import type { PlayList } from '@/types';
import { Button } from '@/ui';

import style from './player.module.scss';
import type { PlayerProperties } from './player.properties';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = (properties: PlayerProperties) => {
  const { ariaLabelledBy, text } = properties;

  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [volume, setVolume] = useLocalStorage('current-volume', 0.5, {
    initializeWithValue: false,
  });
  const [soundsURLS, setSoundsURLS] = useState<string[]>([]);
  const [musicURLS, setMusicURLS] = useState<PlayList[]>([]);

  const translations = useTranslations('labels');
  const volumeTranslation = translations('volume_control_label');
  const sound = new Howl({
    src: [soundsURLS[0] || ''],
    format: 'aac',
  });

  const handleVolumeUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);
  };

  const handleClick = () => {
    setIsActive((previousState) => !previousState);

    if (soundsURLS[0]) {
      sound.play();
    }
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

    const fetchSounds = async () => {
      const response = await fetch('/api/get-sounds');
      const sounds = await response.json();

      setSoundsURLS(sounds);
    };

    fetchMusic();
    fetchSounds();

    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }, []);

  return (
    <>
      <Button
        ariaLabel={translations('play_control')}
        ariaLabelledBy={ariaLabelledBy}
        isActive={isActive}
        onClick={handleClick}
        text={text}
        type='play'
      />
      <label
        aria-disabled={isDisabled}
        aria-label={translations('volume_control')}
        className={style.slider}
        htmlFor={volumeTranslation}
      >
        <input
          aria-disabled={isDisabled}
          aria-valuemax={1}
          aria-valuemin={0}
          aria-valuenow={volume}
          className={style.track}
          disabled={isDisabled}
          id={volumeTranslation}
          max={1}
          min={0}
          onChange={handleVolumeUpdate}
          step={0.001}
          type='range'
          value={volume}
        />
        <span aria-labelledby={volumeTranslation}>{volumeTranslation}</span>
      </label>
      <AudioPlayer
        audioInitialState={{
          volume,
          curPlayId: 0,
          isPlaying: isActive,
          muted: !volume,
          // onPause: () => {
          //   setIsActive(false);
          //   sound.play();
          // },
          // onPlay: () => {
          //   setIsActive(true);
          //   sound.play();
          // },
        }}
        playList={musicURLS}
      />
    </>
  );
};

export { Player };
