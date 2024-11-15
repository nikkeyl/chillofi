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

  const [soundURL, setSoundURL] = useState([]);

  const playSound = new Howl({
    src: [soundURL[0] || ''],
    format: 'aac',
  });

  const handleClick = () => {
    if (soundURL[0]) {
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
      const response = await fetch('/api/get-sound');
      const sound = await response.json();

      setSoundURL(sound);
    };

    fetchSounds();
  }, []);

  return <Button ariaLabel='Switcher Control' onClick={handleClick} />;
};

export { Switcher };
