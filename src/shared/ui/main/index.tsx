import styles from './main.module.scss';

import type { Properties } from './properties';

const Main = ({ children }: Properties) => (
  <main className={styles.main}>{children}</main>
);

export { Main };
