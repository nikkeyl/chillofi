'use client';

import classes from 'classnames';
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
      className={classes(style.screen, isNoiseEffect && style.NoiseEffect)}
    >
      <Image
        alt={translations('alt')}
        blurDataURL='data:image/webp;base64,UklGRuYBAABXRUJQVlA4INoBAABQNgCdASpYApABPpFIoU0lpCMiIAgAsBIJaW7hd2EbQAnsA99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJx/AAD+/8DYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='
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
