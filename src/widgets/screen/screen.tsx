'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { useImageContext } from '@/providers/image-provider/use-image.context';
import { useNoiseContext } from '@/providers/noise-provider/use-noise.context';

import style from './screen.module.scss';
import type { Properties } from './screen.properties';

const Screen = (properties: Properties) => {
  const { ariaLabel, alt } = properties;

  const { isNoise } = useNoiseContext();
  const { currentImage } = useImageContext();

  return (
    <main
      aria-label={ariaLabel}
      className={clsx(style.screen, isNoise && style.noiseEffect)}
    >
      <Image
        alt={alt}
        blurDataURL='data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'
        fetchPriority='high'
        fill
        placeholder='blur'
        priority
        src={currentImage}
      />
    </main>
  );
};

export { Screen };
