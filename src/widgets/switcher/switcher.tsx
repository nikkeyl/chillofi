'use client';

import { useImageContext, useNoiseContext } from '@/providers';
import { Button } from '@/ui';

import type { Properties } from './switcher.properties';

const Switcher = (properties: Properties) => {
  const { label, labelledBy, text, isImage, isNoise } = properties;

  const { setIsNoise } = useNoiseContext();
  const { setNextImage } = useImageContext();

  const handleClick = () => {
    if (isImage) {
      setNextImage();
    }

    if (isNoise) {
      setIsNoise();
    }
  };

  return (
    <Button
      label={label}
      labelledBy={labelledBy}
      onClick={handleClick}
      text={text}
    />
  );
};

export { Switcher };
