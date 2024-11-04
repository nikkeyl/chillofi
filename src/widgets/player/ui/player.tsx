'use client';

import { accessibilityLabels, playList, sounds } from '@data';
import { useSoundContext } from '@providers';
import { Button } from '@ui';
import classes from 'classnames';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import useSound from 'use-sound';

import style from './player.module.scss';

const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = () => {
  const { playControlLabel } = accessibilityLabels;
  const { switcherSound } = sounds;
  const { volume, precisionVolume } = useSoundContext();

  const [isActive, setIsActive] = useState(false);
  const [playSound] = useSound(switcherSound);

  const handleClick = () => {
    setIsActive((previousState) => !previousState);
    playSound();
  };

  return (
    <>
      <Button
        ariaLabel={playControlLabel}
        className={classes(style.player, isActive && style.active)}
        onClick={handleClick}
      />
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
