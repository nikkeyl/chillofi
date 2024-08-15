import styles from './wrapper.module.scss';

import type { Properties } from './properties.d.ts';

const Wrapper = ({ children }: Properties) => (
  <div className={styles.wrapper}>{children}</div>
);

export { Wrapper };
