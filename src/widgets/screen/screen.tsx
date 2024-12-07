'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useScreenImagesContext, useScreenNoiseEffectContext } from '@/providers';

import style from './screen.module.scss';

const Screen = () => {
  const { isNoiseEffect } = useScreenNoiseEffectContext();
  const { currentImage } = useScreenImagesContext();

  const translations = useTranslations('labels');

  return (
    <div
      aria-label={translations('screen')}
      className={clsx(style.screen, isNoiseEffect && style.noiseEffect)}
    >
      <Image
        alt={translations('alt')}
        blurDataURL='data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'
        fetchPriority='high'
        fill
        placeholder='blur'
        priority
        src={currentImage}
      />
    </div>
  );
};

export { Screen };
