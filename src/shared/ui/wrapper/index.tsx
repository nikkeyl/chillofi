import type { PropsWithChildren } from 'react';

import style from './wrapper.module.scss';

const Wrapper = (properties: PropsWithChildren) => {
  const { children } = properties;

  return <main className={style.wrapper}>{children}</main>;
};

export { Wrapper };
