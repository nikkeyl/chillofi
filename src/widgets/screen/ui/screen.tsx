'use client';

import { accessibilityLabels } from '@data';
import { useSettingsContext } from '@providers/use-settings-context';
import classes from 'classnames';
import Image from 'next/image';

import style from './screen.module.scss';

const Screen = () => {
  const { imageAltLabel, screenLabel } = accessibilityLabels;
  const { image } = useSettingsContext();

  return (
    <div aria-label={screenLabel} className={classes(style.screen, style.CRTEffect)}>
      <Image
        alt={imageAltLabel}
        fetchPriority='high'
        height={1080}
        priority
        src={image}
        width={1920}
      />
    </div>
  );
};

export { Screen };
