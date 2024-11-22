'use client';

import { Howl } from 'howler';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Button } from '@/ui';

import style from './player.module.scss';
import type { PlayListProperties } from './player.properties';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [volume, setVolume] = useLocalStorage('current-volume', 0.5, {
    initializeWithValue: false,
  });
  const [soundsURLS, setSoundsURLS] = useState<string[]>([]);
  const [musicURLS, setMusicURLS] = useState<PlayListProperties[]>([]);

  const i18n = useTranslations('labels');
  const sound = new Howl({
    src: [soundsURLS[0] || ''],
    format: 'aac',
  });

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
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

    const fetchSounds = async () => {
      const response = await fetch('/api/get-sounds');
      const sounds = await response.json();
      setSoundsURLS(sounds);
    };

    fetchMusic();
    fetchSounds();
    setIsDisabled(false);
  }, []);

  return (
    <>
      <Button
        ariaLabel={i18n('play_control')}
        isActive={isActive}
        onClick={handleClick}
        type='play'
      />
      <label
        aria-label={i18n('volume_control')}
        htmlFor='mixer'
        style={{ position: 'relative' }}
      >
        <input
          aria-valuemax={1}
          aria-valuemin={0}
          aria-valuenow={volume}
          className={style.input}
          disabled={isDisabled}
          id='mixer'
          max={1}
          min={0}
          onChange={handleVolumeChange}
          step={0.02}
          type='range'
          value={volume}
        />
        <button
          aria-label='thumb'
          className={style.thumb}
          style={{
            position: 'absolute',
            top: '50%',
            left: `${volume * 111}px`,
            transition: 'left 0.2s ease',
          }}
          type='button'
        />
      </label>
      <AudioPlayer
        audioInitialState={{
          volume,
          curPlayId: 0,
          preload: 'auto',
          isPlaying: isActive,
          muted: !volume,
          onPause: () => {
            setIsActive(false);
            sound.play();
          },
          onPlay: () => {
            setIsActive(true);
            sound.play();
          },
        }}
        playList={musicURLS}
      />
    </>
  );
};

export { Player };
