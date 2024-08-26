import style from './screen.module.scss';

import type { Properties } from './properties';

const Screen = (properties: Properties) => {
  const { children } = properties;

  return <section className={style.screen}>{children}</section>;
};

export { Screen };
