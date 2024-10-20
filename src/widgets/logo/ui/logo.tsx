import { accessibilityLabels, cookieFont } from '@data';
import classes from 'classnames';

import style from './logo.module.scss';
import type { Properties } from './logo.properties';

const Logo = (properties: Properties) => {
  const { type } = properties;

  const { logoLabel } = accessibilityLabels;

  return (
    <a
      aria-label={logoLabel}
      className={classes(
        style.logo,
        cookieFont.className,
        type === '404' && style.notFound,
      )}
      href='/'
    >
      {type === '404' ? '404' : logoLabel}
    </a>
  );
};

export { Logo };
