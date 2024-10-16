'use client';

import { ariaLabels, images } from '@entities';
import Image from 'next/image';
import { useState } from 'react';

import style from './screen.module.scss';

const Screen = () => {
  const { switcherControl } = ariaLabels;

  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);

    setCurrentImage(images[randomIndex]);
  };

  return (
    <>
      <div className={style.screen}>
        <Image
          alt='No Signal'
          fetchPriority='high'
          height={1080}
          priority
          src={currentImage ?? ''}
          width={1920}
        />
      </div>
      <button
        aria-label={switcherControl}
        className={style.switcher}
        onClick={changeImage}
        type='button'
      />
    </>
  );
};

export { Screen };
