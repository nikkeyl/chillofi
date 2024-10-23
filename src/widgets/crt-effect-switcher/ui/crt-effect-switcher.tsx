'use client';

import { accessibilityLabels, localStorageItems, sounds } from '@data';
import { CircleSwitcherIcon } from '@icons';
import classes from 'classnames';
import { useState } from 'react';
import useSound from 'use-sound';

import style from './crt-effect-switcher.module.scss';

const CRTEffectSwitcher = () => {
  const { CRTEffectControlLabel } = accessibilityLabels;
  const { CRTEffectItem } = localStorageItems;
  const { crackleSound } = sounds;

  const [isActive, setIsActive] = useState(false);
  const [playSound] = useSound(crackleSound);

  return (
    <button
      aria-label={CRTEffectControlLabel}
      className={classes(style.switcher, isActive && style.active)}
      onClick={() => {
        setIsActive((previousState) => !previousState);
        playSound();
      }}
      type='button'
    >
      <CircleSwitcherIcon />
    </button>
  );
};

export { CRTEffectSwitcher };
