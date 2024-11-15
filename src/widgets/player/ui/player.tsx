'use client';

import { Button } from '@ui';
import { Howl } from 'howler';
import dynamic from 'next/dynamic';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import style from './player.module.scss';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useLocalStorage('current-volume', 50, {
    initializeWithValue: false,
  });
  const [soundUrl, setSoundUrl] = useState([]);
  const [musicURL, setMusicURL] = useState([]);

  const playSound = new Howl({
    src: [soundUrl[0] || ''],
    format: 'aac',
  });
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
    playSound.play();
  };

  useEffect(() => {
    const fetchSounds = async () => {
      const response = await fetch('/api/get-sound');
      const sound = await response.json();

      setSoundUrl(sound);
    };

    fetchSounds();
  }, []);

  useEffect(() => {
    const fetchMusic = async () => {
      const response = await fetch('/api/get-music');
      const music = await response.json();

      const playList = music.map((file: string, index: number) => ({
        src: file,
        id: index + 1,
      }));

      setMusicURL(playList);
    };

    fetchMusic();
  }, []);

  return (
    <>
      <Button
        ariaLabel='Play Control'
        isActive={isActive}
        onClick={handleClick}
        type='rectangle'
      />
      <label aria-label='Volume Control' htmlFor='mixer'>
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
        }}
        playList={musicURL}
      />
    </>
  );
};

export { Player };
