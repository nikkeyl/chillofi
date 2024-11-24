import { useTranslations } from 'next-intl';
import type { PropsWithChildren } from 'react';

import style from './controls.module.scss';

const Controls = (properties: PropsWithChildren) => {
  const { children } = properties;

  const translations = useTranslations('labels');

  return (
    <div aria-label={translations('controls')} className={style.controls}>
      {children}
    </div>
  );
};

export { Controls };
