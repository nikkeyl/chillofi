import style from './controls.module.scss';
import type { Properties } from './controls.properties';

const Controls = (properties: Properties) => {
  const { children, label } = properties;

  return (
    <footer aria-label={label} className={style.wrapper}>
      {children}
    </footer>
  );
};

export { Controls };
