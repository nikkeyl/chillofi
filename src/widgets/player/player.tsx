'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { useClickSound } from '@/hooks/use-click-sound';
import { Button } from '@/ui/button/button';

import style from './player.module.scss';
import type { Props } from './player.props';

const Player = (props: Props) => {
  const { label, labelledBy, text, volumeControlLabel, volumeLabel } = props;

  const audioElementReference = useRef<HTMLAudioElement>(null);
  const audioContextReference = useRef<AudioContext | null>(null);
  const gainNodeReference = useRef<GainNode | null>(null);
  const isInternalToggleReference = useRef(false);

  const { playSound } = useClickSound();

  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [volume, setVolume] = useLocalStorage('current-volume', 0.5, {
    initializeWithValue: false,
  });
  const [musicURLS, setMusicURLS] = useState<string[]>([]);
  const [trackIndex, setTrackIndex] = useState(0);

  const handleVolumeUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);
  };

  const ensureAudioGraph = () => {
    if (!audioElementReference.current || gainNodeReference.current) return;

    const AudioContextConstructor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const audioContext = new AudioContextConstructor();
    const sourceNode = audioContext.createMediaElementSource(
      audioElementReference.current,
    );
    const gainNode = audioContext.createGain();

    sourceNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = volume;

    audioContextReference.current = audioContext;
    gainNodeReference.current = gainNode;
  };

  const handleClick = () => {
    ensureAudioGraph();

    if (audioContextReference.current?.state === 'suspended') {
      audioContextReference.current.resume();
    }

    isInternalToggleReference.current = true;
    setIsActive((previousState) => !previousState);
  };

  const handleTrackEnded = () => {
    isInternalToggleReference.current = true;
    setTrackIndex((previousIndex) => (previousIndex + 1) % musicURLS.length);
  };

  const handleAudioPause = () => {
    if (!isInternalToggleReference.current) {
      playSound();
    }

    isInternalToggleReference.current = false;
    setIsActive(false);
  };

  const handleAudioPlay = () => {
    if (audioContextReference.current?.state === 'suspended') {
      audioContextReference.current.resume();
    }

    if (!isInternalToggleReference.current) {
      playSound();
    }

    isInternalToggleReference.current = false;
    setIsActive(true);
  };

  useEffect(() => {
    const fetchMusic = async () => {
      const response = await fetch('/api/get-music');
      const music = await response.json();

      setMusicURLS(music);
      setIsDisabled(false);
    };

    fetchMusic();
  }, []);

  useEffect(() => {
    if (gainNodeReference.current) {
      gainNodeReference.current.gain.value = volume;
      return;
    }

    if (!audioElementReference.current) return;

    audioElementReference.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!audioElementReference.current || musicURLS.length === 0) return;

    if (isActive) {
      audioElementReference.current.play();
    } else {
      audioElementReference.current.pause();
    }
  }, [isActive, musicURLS, trackIndex]);

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
      <audio
        onEnded={handleTrackEnded}
        onPause={handleAudioPause}
        onPlay={handleAudioPlay}
        ref={audioElementReference}
        src={musicURLS[trackIndex]}
      >
        <track kind='captions' label='No captions' />
      </audio>
    </>
  );
};

export { Player };
