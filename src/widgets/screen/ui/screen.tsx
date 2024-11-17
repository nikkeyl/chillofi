'use client';

import classes from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useScreenCRTEffectContext, useScreenImagesContext } from '@/providers';

import style from './screen.module.scss';

const Screen = () => {
  const { isCRTEffect } = useScreenCRTEffectContext();
  const { currentImage } = useScreenImagesContext();

  const i18n = useTranslations('labels');

  return (
    <div
      aria-label={i18n('screen')}
      className={classes(style.screen, isCRTEffect && style.CRTEffect)}
    >
      <Image
        alt={i18n('image_alt')}
        fetchPriority='high'
        fill
        priority
        src={currentImage}
      />
    </div>
  );
};

export { Screen };
