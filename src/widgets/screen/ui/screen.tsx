import classes from 'classnames';
import Image from 'next/image';

import style from './screen.module.scss';

const Screen = () => (
  <div className={classes(style.screen, style.flicker)}>
    <Image
      alt='No Signal'
      fetchPriority='high'
      height={1080}
      priority
      src='/images/background-1.jpg'
      width={1920}
    />
  </div>
);

export { Screen };
