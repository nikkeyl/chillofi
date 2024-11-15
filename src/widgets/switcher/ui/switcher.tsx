'use client';

import { accessibilityLabels } from '@data';
import { useScreenCRTEffectContext, useScreenImagesContext } from '@providers';
import { Button } from '@ui';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

import type { SwitcherProperties } from './switcher.properties';

const Switcher = (properties: SwitcherProperties) => {
  const { type } = properties;

  const { switcherControlLabel } = accessibilityLabels;

  const { setIsCRTEffect } = useScreenCRTEffectContext();
  const { setNextImage } = useScreenImagesContext();

  const [soundUrls, setSoundUrls] = useState<string[]>([]);
  const [playSound] = useSound(soundUrls.length > 0 ? `${soundUrls[0]}` : '', {
    volume: 1,
  });

  useEffect(() => {
    const fetchSounds = async () => {
      const response = await fetch('/api/sounds');
      const sounds = await response.json();

      setSoundUrls(sounds);
    };

    fetchSounds();
  }, []);

  const handleClick = () => {
    if (soundUrls.length > 0) {
      playSound();
    }

    if (type === 'image') {
      setNextImage();
    } else {
      setIsCRTEffect();
    }
  };

  return <Button ariaLabel={switcherControlLabel} onClick={handleClick} />;
};

export { Switcher };
