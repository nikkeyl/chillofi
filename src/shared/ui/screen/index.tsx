import background from '@images/background.jpg';
import Image from 'next/image';

import style from './screen.module.scss';

const Screen = () => (
  <div className={style.screen}>
    <Image alt='background' fetchPriority='high' priority src={background} />
  </div>
);

export { Screen };
