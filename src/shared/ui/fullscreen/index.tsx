import styles from '@fullscreen/fullscreen.module.scss';
import CRTEffect from '@effects/crt.module.scss';

import cn from 'classnames';

import type { Properties } from './properties';

const Fullscreen = ({ children }: Properties) => (
  <section className={cn(styles.fullscreen, CRTEffect.crtEffect)}>
    {children}
  </section>
);

export { Fullscreen };
