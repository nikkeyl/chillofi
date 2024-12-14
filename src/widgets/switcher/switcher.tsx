'use client';

import { Howl } from 'howler';
import { useEffect, useState } from 'react';

import { useImageContext } from '@/providers/image-provider/use-image.context';
import { useNoiseContext } from '@/providers/noise-provider/use-noise.context';
import { Button } from '@/ui/button/button';

import type { SwitcherProperties } from './switcher.properties';

const Switcher = (properties: SwitcherProperties) => {
  const { ariaLabel, ariaLabelledBy, text, type } = properties;

  const { setIsNoise } = useNoiseContext();
  const { setNextImage } = useImageContext();

  const [soundsURLS, setSoundsURLS] = useState<string[]>([]);

  const sound = new Howl({
    src: [soundsURLS[0] || ''],
    format: 'aac',
  });

  const handleClick = () => {
    if (soundsURLS[0]) {
      sound.play();
    }

    if (type === 'image') {
      setNextImage();
    } else {
      setIsNoise();
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

  return (
    <Button
      ariaLabel={ariaLabel}
      ariaLabelledBy={ariaLabelledBy}
      onClick={handleClick}
      text={text}
    />
  );
};

export { Switcher };
