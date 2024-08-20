import style from '@wrapper/wrapper.module.scss';

import type { Properties } from './properties';

const Wrapper = ({ children }: Properties) => (
  <div className={style.wrapper}>{children}</div>
);

export { Wrapper };
