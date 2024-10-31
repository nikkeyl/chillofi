'use client';

import { accessibilityLabels, /* localStorageItems, */ sounds } from '@data';
import { useImageContext } from '@providers/use-image-context';
import useSound from 'use-sound';

import style from './image-switcher.module.scss';

const ImageSwitcher = () => {
  const { switcherControlLabel } = accessibilityLabels;
  // const { imageItem } = localStorageItems;
  const { switcherSound } = sounds;
  const { setNextImage } = useImageContext();

  const [playSound] = useSound(switcherSound);

  const handleClick = () => {
    setNextImage();
    playSound();
  };

  return (
    <button
      aria-label={switcherControlLabel}
      className={style.switcher}
      onClick={handleClick}
      type='button'
    />
  );
};

export { ImageSwitcher };
