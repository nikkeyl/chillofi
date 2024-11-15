'use client';

import { useScreenCRTEffectContext, useScreenImagesContext } from '@providers';
import { Button } from '@ui';
import { Howl } from 'howler';
import { useEffect, useState } from 'react';

import type { SwitcherProperties } from './switcher.properties';

const Switcher = (properties: SwitcherProperties) => {
  const { type } = properties;

  const { setIsCRTEffect } = useScreenCRTEffectContext();
  const { setNextImage } = useScreenImagesContext();

  const [soundsURLS, setSoundsURLS] = useState<string[]>([]);

  const playSound = new Howl({
    src: [soundsURLS[0] || ''],
    format: 'aac',
  });

  const handleClick = () => {
    if (soundsURLS[0]) {
      playSound.play();
    }

    if (type === 'image') {
      setNextImage();
    } else {
      setIsCRTEffect();
    }
  };

  useEffect(() => {
    const fetchSounds = async () => {
      const response = await fetch('/api/get-sounds');
      const sounds = await response.json();

      setSoundsURLS(sounds);
    };

    fetchSounds();
  }, []);

  return <Button ariaLabel='Switcher Control' onClick={handleClick} />;
};

export { Switcher };
