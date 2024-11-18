'use client';

import { Howl } from 'howler';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Button } from '@/ui';

import style from './player.module.scss';
import type { PlayListProperties } from './player.properties';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useLocalStorage('current-volume', 50, {
    initializeWithValue: false,
  });
  const [musicURLS, setMusicURLS] = useState<PlayListProperties[]>([]);

  const i18n = useTranslations('labels');
  const precisionVolume = volume / 100;
  const audioReference = useRef<HTMLAudioElement>(null);
  const howlReference = useRef<Howl | null>(null);
  const playSound = () => howlReference.current?.play();

  const handleVolumeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newVolume = Number(event.target.value);

      setVolume(newVolume);

      if (audioReference.current) {
        audioReference.current.volume = newVolume / 100;
      }
    },
    [setVolume],
  );

  const handleClick = useCallback(() => {
    setIsActive((previousState) => !previousState);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const [musicResponse, soundsResponse] = await Promise.all([
        fetch('/api/get-music'),
        fetch('/api/get-sounds'),
      ]);
      const [music, sounds] = await Promise.all([
        musicResponse.json(),
        soundsResponse.json(),
      ]);

      const playList = music.map((file: string, index: number) => ({
        src: file,
        id: index + 1,
      }));

      setMusicURLS(playList);

      if (sounds.length > 0) {
        howlReference.current = new Howl({
          src: [sounds[0]],
          format: 'aac',
        });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Button
        ariaLabel={i18n('play_control')}
        isActive={isActive}
        onClick={handleClick}
        type='play'
      />
      <label aria-label={i18n('volume_control')} htmlFor='mixer'>
        <input
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={volume}
          className={style.input}
          id='mixer'
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
          onPause: () => {
            setIsActive(false);
            playSound();
          },
          onPlay: () => {
            setIsActive(true);
            playSound();
          },
        }}
        playList={musicURLS}
      />
    </>
  );
};

export { Player };
