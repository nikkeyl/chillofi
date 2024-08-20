import style from '@main/main.module.scss';

import type { Properties } from './properties';

const Main = ({ children }: Properties) => (
  <main className={style.main}>{children}</main>
);

export { Main };
