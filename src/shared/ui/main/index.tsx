import styles from './main.module.scss';

import type { Props } from './props.d.ts';

const Main = ({ children }: Props) => (
  <main className={styles.main}>{children}</main>
);

export { Main };
