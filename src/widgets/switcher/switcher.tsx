'use client';

import { useImageContext } from '@/providers/image-provider/use-image.context';
import { useNoiseContext } from '@/providers/noise-provider/use-noise.context';
import { Button } from '@/ui/button/button';

import type { Props } from './switcher.props';

const Switcher = (props: Props) => {
  const { isImage, isNoise, label, labelledBy, text } = props;

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
