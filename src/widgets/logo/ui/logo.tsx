import { accessibilityLabels, cookieFont } from '@data';
import classes from 'classnames';
import Link from 'next/link';

import style from './logo.module.scss';

const Logo = () => {
  const { logoLabel } = accessibilityLabels;

  return (
    <Link
      aria-label={logoLabel}
      className={classes(style.logo, cookieFont.className)}
      href='/'
    >
      {logoLabel}
    </Link>
  );
};

export { Logo };
