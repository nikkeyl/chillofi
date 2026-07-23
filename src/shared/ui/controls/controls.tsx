import style from './controls.module.scss';
import type { Props } from './controls.props';

const Controls = (props: Props) => {
  const { children, label } = props;

  return (
    <footer aria-label={label} className={style.wrapper}>
      {children}
    </footer>
  );
};

export { Controls };
