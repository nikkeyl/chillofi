'use client';

import classes from 'classnames';
import { useEffect, useState } from 'react';

import style from './button.module.scss';
import type { ButtonProperties } from './button.properties';

const Button = (properties: ButtonProperties) => {
  const { ariaLabel, isActive, text, type = 'switch', onClick } = properties;

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }, []);

  return (
    <div className={style.wrapper}>
      <button
        aria-label={ariaLabel}
        className={classes(
          style.button,
          type === 'switch' ? style.circle : style.rectangle,
          isActive && style.active,
        )}
        disabled={isDisabled}
        onClick={onClick}
        type='button'
      />
      <span className={style.label}>{text}</span>
    </div>
  );
};

export { Button };
