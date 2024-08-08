import styles from './wrapper.module.scss';

import type { Props } from './props.d.ts';

const Wrapper = ({ children }: Props) => (
  <div className={styles.wrapper}>{children}</div>
);

export { Wrapper };
