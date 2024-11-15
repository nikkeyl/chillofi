import type { PropsWithChildren } from 'react';

import style from './panel.module.scss';

const Panel = (properties: PropsWithChildren) => {
  const { children } = properties;

  return (
    <div aria-label='Controls Panel' className={style.panel}>
      {children}
    </div>
  );
};

export { Panel };
