import classes from 'classnames';

import style from './button.module.scss';
import type { ButtonProperties } from './button.properties';

const Button = (properties: ButtonProperties) => {
  const { ariaLabel, className, onClick } = properties;

  return (
    <button
      aria-label={ariaLabel}
      className={classes(style.button, className)}
      onClick={onClick}
      type='button'
    />
  );
};

export { Button };
