import styles from '@fullscreen/fullscreen.module.scss';
import CRTEffect from '@styles/crt-effect.module.scss';

import cn from 'classnames';

import type { Properties } from './properties';

const Fullscreen = ({ children }: Properties) => (
  <section className={cn(styles.fullscreen, styles.scanLines, CRTEffect.crtEffect)}>
    {children}
  </section>
);

export { Fullscreen };
