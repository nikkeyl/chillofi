'use client';

import clsx from 'clsx';

import { useClickSound } from '@/hooks/use-click-sound';

import style from './button.module.scss';
import type { Props } from './button.props';

const Button = (props: Props) => {
  const { isActive, label, labelledBy, onClick, text, type = 'switch' } = props;

  const { isLoading, playSound } = useClickSound();

  return (
    <div className={style.wrapper}>
      <button
        aria-disabled={isLoading}
        aria-label={label}
        aria-labelledby={labelledBy}
        className={clsx(
          style.button,
          type === 'switch' ? style.circle : style.rectangle,
          isActive && style.active,
        )}
        disabled={isLoading}
        onClick={() => {
          playSound();
          onClick();
        }}
        type='button'
      />
      <span id={labelledBy}>{text}</span>
    </div>
  );
};

export { Button };
