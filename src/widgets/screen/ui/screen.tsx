'use client';

import { useScreenCRTEffectContext, useScreenImagesContext } from '@providers';
import classes from 'classnames';
import Image from 'next/image';

import style from './screen.module.scss';

const Screen = () => {
  const { isCRTEffect } = useScreenCRTEffectContext();
  const { currentImage } = useScreenImagesContext();

  return (
    <div
      aria-label='Screen'
      className={classes(style.screen, isCRTEffect && style.CRTEffect)}
    >
      <Image alt='No Signal' fetchPriority='high' fill priority src={currentImage} />
    </div>
  );
};

export { Screen };
