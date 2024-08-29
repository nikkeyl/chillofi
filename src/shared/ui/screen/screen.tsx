import type { PropsWithChildren } from 'react';

import style from './screen.module.scss';

const Screen = (properties: PropsWithChildren) => {
  const { children } = properties;

  return <main className={style.screen}>{children}</main>;
};

export { Screen };
