'use client';

import { useImageContext } from '@/providers/image-provider/use-image.context';
import { useNoiseContext } from '@/providers/noise-provider/use-noise.context';
import { Button } from '@/ui/button/button';

import type { Properties } from './switcher.properties';

const Switcher = (properties: Properties) => {
  const { isImage, isNoise, label, labelledBy, text } = properties;

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
