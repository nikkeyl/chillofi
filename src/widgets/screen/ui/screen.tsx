'use client';

import { accessibilityLabels } from '@data';
import { useImageContext } from '@providers';
import classes from 'classnames';
import Image from 'next/image';

import style from './screen.module.scss';

const Screen = () => {
  const { imageAltLabel, screenLabel } = accessibilityLabels;
  const { currentImage } = useImageContext();

  return (
    <div aria-label={screenLabel} className={classes(style.screen, style.CRTEffect)}>
      <Image
        alt={imageAltLabel}
        fetchPriority='high'
        fill
        priority
        src={currentImage}
      />
    </div>
  );
};

export { Screen };
