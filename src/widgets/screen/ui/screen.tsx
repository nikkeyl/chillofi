'use client';

import { accessibilityLabels } from '@data';
import { useImageContext } from '@providers/use-image-context';
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
        height={1080}
        priority
        src={currentImage}
        width={1920}
      />
    </div>
  );
};

export { Screen };
