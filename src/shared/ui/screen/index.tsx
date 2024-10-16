'use client';

import { images } from '@entities';
import Image from 'next/image';
import { useState } from 'react';

import style from './screen.module.scss';

const Screen = () => {
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
          fetchPriority={currentImage === images[0] ? 'high' : 'auto'}
          height={1080}
          priority
          src={currentImage}
          width={1920}
        />
      </div>
      <button className={style.switcher} onClick={changeImage} type='button' />
    </>
  );
};

export { Screen };
