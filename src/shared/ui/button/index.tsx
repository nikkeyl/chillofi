import classes from 'classnames';

import style from './button.module.scss';
import type { ButtonProperties } from './button.properties';

const Button = (properties: ButtonProperties) => {
  const { ariaLabel, isActive, type = 'circle', onClick } = properties;

  return (
    <button
      aria-label={ariaLabel}
      className={classes(
        style.button,
        type === 'switch' ? style.circle : style.rectangle,
        isActive && style.active,
      )}
      onClick={onClick}
      type='button'
    />
  );
};

export { Button };
