import { useTranslations } from 'next-intl';
import type { PropsWithChildren } from 'react';

import style from './panel.module.scss';

const Panel = (properties: PropsWithChildren) => {
  const { children } = properties;

  const i18n = useTranslations('labels');

  return (
    <div aria-label={i18n('controls_panel')} className={style.panel}>
      {children}
    </div>
  );
};

export { Panel };
