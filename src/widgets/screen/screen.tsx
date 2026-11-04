'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { useImageContext } from '@/providers/image-provider/use-image.context';
import { useNoiseContext } from '@/providers/noise-provider/use-noise.context';

import style from './screen.module.scss';
import type { Props } from './screen.props';

const Screen = (props: Props) => {
  const { alt, label } = props;

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
      <small className={style.credits}>
        Music: <a href='https://purrplecat.com/'>Purrple Cat</a>
        {' · '}
        <a href='https://creativecommons.org/licenses/by-sa/4.0/'>CC BY-SA 4.0</a>
        {' · '}
        <a href='/audio/CREDITS.txt'>Track credits</a>
      </small>
    </main>
  );
};

export { Screen };
