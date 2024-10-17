import { cookie } from '@data';
import cn from 'classnames';

import style from './logo.module.scss';

const Logo = () => <h1 className={cn(style.logo, cookie.className)}>Chillofi</h1>;

export { Logo };
