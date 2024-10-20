import type { PropsWithChildren } from 'react';

import style from './controls.module.scss';

const Controls = (properties: PropsWithChildren) => {
  const { children } = properties;

  return <div className={style.controls}>{children}</div>;
};

export { Controls };
