import style from './wrapper.module.scss';

import type { Properties } from './properties';

const Wrapper = (properties: Properties) => {
  const { children } = properties;

  return <div className={style.wrapper}>{children}</div>;
};

export { Wrapper };
