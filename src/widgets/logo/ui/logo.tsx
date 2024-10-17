import { cookie } from '@data';
import classes from 'classnames';

import style from './logo.module.scss';

const Logo = () => (
  <h1 className={classes(style.logo, cookie.className)}>Chillofi</h1>
);

export { Logo };
