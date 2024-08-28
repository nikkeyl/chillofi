import type { Properties } from './properties';

import style from './wrapper.module.scss';

const Wrapper = (properties: Properties) => {
  const { children } = properties;

  return <div className={style.wrapper}>{children}</div>;
};

export { Wrapper };
