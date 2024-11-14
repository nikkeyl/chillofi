import { accessibilityLabels } from '@data';
import type { PropsWithChildren } from 'react';

import style from './panel.module.scss';

const Panel = (properties: PropsWithChildren) => {
  const { children } = properties;

  const { controlsPanelLabel } = accessibilityLabels;

  return (
    <div aria-label={controlsPanelLabel} className={style.panel}>
      {children}
    </div>
  );
};

export { Panel };
