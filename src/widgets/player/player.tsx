'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import type { PlayListTypes } from '@/types/playlist';
import { Button } from '@/ui/button/button';

import { Range } from '../range/range';
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
  const [musicURLS, setMusicURLS] = useState<PlayListTypes[]>([]);

  const handleVolumeUpdate = (newVolume: number) => {
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
      <Range
        isDisabled={isDisabled}
        onChange={handleVolumeUpdate}
        volume={volume}
        volumeControlLabel={volumeControlLabel}
        volumeLabel={volumeLabel}
      />
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
