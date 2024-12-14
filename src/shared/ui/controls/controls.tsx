import style from './controls.module.scss';
import type { Properties } from './controls.properties';

const Controls = (properties: Properties) => {
  const { ariaLabel, children } = properties;

  return (
    <footer aria-label={ariaLabel} className={style.wrapper}>
      {children}
    </footer>
  );
};

export { Controls };
