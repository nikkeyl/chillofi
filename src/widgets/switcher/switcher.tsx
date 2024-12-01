'use client';

import { Howl } from 'howler';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { useScreenImagesContext, useScreenNoiseEffectContext } from '@/providers';
import { Button } from '@/ui';

import type { SwitcherProperties } from './switcher.properties';

const Switcher = (properties: SwitcherProperties) => {
  const { ariaLabelledBy, text, type } = properties;

  const { setIsNoiseEffect } = useScreenNoiseEffectContext();
  const { setNextImage } = useScreenImagesContext();

  const [soundsURLS, setSoundsURLS] = useState<string[]>([]);

  const translations = useTranslations('labels');
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
      setIsNoiseEffect();
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
      ariaLabel={translations('switcher_control')}
      ariaLabelledBy={ariaLabelledBy}
      onClick={handleClick}
      text={text}
    />
  );
};

export { Switcher };
