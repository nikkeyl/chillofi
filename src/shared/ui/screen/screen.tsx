import type { PropsWithChildren } from 'react';

import style from './screen.module.scss';

const Screen = (properties: PropsWithChildren) => {
  const { children } = properties;

  return <section className={style.screen}>{children}</section>;
};

export { Screen };
