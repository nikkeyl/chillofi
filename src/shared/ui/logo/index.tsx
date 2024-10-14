import { cookie } from '@entities';
import cn from 'classnames';
import type { PropsWithChildren } from 'react';

import style from './logo.module.scss';

const Logo = (properties: PropsWithChildren) => {
  const { children } = properties;

  return <h1 className={cn(style.logo, cookie.className)}>{children}</h1>;
};

export { Logo };
