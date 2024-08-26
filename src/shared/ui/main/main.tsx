import style from './main.module.scss';

import type { Properties } from './properties';

const Main = (properties: Properties) => {
  const { children } = properties;

  return <main className={style.main}>{children}</main>;
};

export { Main };
