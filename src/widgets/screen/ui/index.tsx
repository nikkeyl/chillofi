import type { PropsWithChildren } from 'react';

import style from './screen.module.scss';

const Screen = (properties: PropsWithChildren) => {
  const { children } = properties;

  return <div className={style.screen}>{children}</div>;
};

export { Screen };
