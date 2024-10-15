import { cookie } from '@entities';
import cn from 'classnames';

import style from './logo.module.scss';
import type { Properties } from './logo.props';

const Logo = (properties: Properties) => {
  const { text } = properties;

  return <h1 className={cn(style.logo, cookie.className)}>{text}</h1>;
};

export { Logo };
