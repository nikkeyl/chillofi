import { accessibilityLabels } from '@data';
import classes from 'classnames';
import Image from 'next/image';

import style from './screen.module.scss';

const Screen = () => {
  const { imageAltLabel, screenLabel } = accessibilityLabels;

  return (
    <div aria-label={screenLabel} className={classes(style.screen, style.CRTEffect)}>
      <Image
        alt={imageAltLabel}
        fetchPriority='high'
        height={1080}
        priority
        src='/images/screen-1.jpg'
        width={1920}
      />
    </div>
  );
};

export { Screen };
