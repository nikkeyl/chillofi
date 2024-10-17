'use client';

import { ariaLabels, images } from '@data';
import { useState } from 'react';
import useSound from 'use-sound';

import style from './image-switcher.module.scss';

const ImageSwitcher = () => {
  const { switcherControlLabel } = ariaLabels;

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [playSound] = useSound('audio/effects/switch.mp3');

  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);

    setCurrentImage(images[randomIndex]);
  };

  return (
    <button
      aria-label={switcherControlLabel}
      className={style.switcher}
      onClick={() => {
        changeImage();
        playSound();
      }}
      type='button'
    />
  );
};

export { ImageSwitcher };
