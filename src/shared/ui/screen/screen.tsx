import type { Properties } from '@types';

import style from './screen.module.scss';

const Screen = (properties: Properties) => {
  const { children } = properties;

  return <section className={style.screen}>{children}</section>;
};

export { Screen };
