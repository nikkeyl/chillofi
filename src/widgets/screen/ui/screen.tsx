import { accessibilityLabels } from '@data';
import classes from 'classnames';
import Image from 'next/image';

import style from './screen.module.scss';

const Screen = () => {
  const { imageAltLabel, screenLabel } = accessibilityLabels;

  return (
    <div aria-label={screenLabel} className={classes(style.screen, style.crtEffect)}>
      <Image
        alt={imageAltLabel}
        fetchPriority='high'
        height={1080}
        priority
        src='/images/background-1.jpg'
        width={1920}
      />
    </div>
  );
};

export { Screen };
