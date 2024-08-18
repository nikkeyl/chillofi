import styles from './fullscreen.module.scss';

import cn from 'classnames';

import type { Properties } from './properties';

const Fullscreen = ({ children }: Properties) => (
  <section className={cn(styles.fullscreen, styles.bgCover)}>{children}</section>
);

export { Fullscreen };
