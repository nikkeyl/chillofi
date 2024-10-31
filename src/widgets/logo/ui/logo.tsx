import { accessibilityLabels, cookieFont } from '@data';
import classes from 'classnames';

import style from './logo.module.scss';

const Logo = () => {
  const { logoLabel } = accessibilityLabels;

  return (
    <h1 aria-label={logoLabel} className={classes(style.logo, cookieFont.className)}>
      {logoLabel}
    </h1>
  );
};

export { Logo };
