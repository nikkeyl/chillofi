'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import style from './button.module.scss';
import type { ButtonProperties } from './button.properties';

const Button = (properties: ButtonProperties) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    isActive,
    text,
    type = 'switch',
    onClick,
  } = properties;

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }, []);

  return (
    <div className={style.wrapper}>
      <button
        aria-disabled={isDisabled}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={clsx(
          style.button,
          type === 'switch' ? style.circle : style.rectangle,
          isActive && style.active,
        )}
        disabled={isDisabled}
        onClick={onClick}
        type='button'
      />
      <span id={ariaLabelledBy}>{text}</span>
    </div>
  );
};

export { Button };
