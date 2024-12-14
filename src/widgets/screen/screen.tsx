'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { useImageContext } from '@/providers/image-provider/use-image.context';
import { useNoiseContext } from '@/providers/noise-provider/use-noise.context';

import style from './screen.module.scss';
import type { Properties } from './screen.properties';

const Screen = (properties: Properties) => {
  const { alt, label } = properties;

  const { isNoise } = useNoiseContext();
  const { currentImage } = useImageContext();

  const blurImage = 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

  return (
    <main aria-label={label} className={clsx(style.screen, isNoise && style.noise)}>
      <Image
        alt={alt}
        blurDataURL={`data:image/webp;base64,${blurImage}`}
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
