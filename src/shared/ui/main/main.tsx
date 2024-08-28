import type { Properties } from './properties';

import style from './main.module.scss';

const Main = (properties: Properties) => {
  const { children } = properties;

  return <main className={style.main}>{children}</main>;
};

export { Main };
