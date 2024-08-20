import cn from 'classnames';

import type { Properties } from './properties';

const Fullscreen = ({ children }: Properties) => (
  <section className={cn('fullscreen', 'bgCover', 'crtEffect')}>{children}</section>
);

export { Fullscreen };
