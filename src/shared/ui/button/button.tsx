'use client';

import clsx from 'clsx';
import { Howl } from 'howler';
import { useEffect, useRef, useState } from 'react';

import style from './button.module.scss';
import type { Properties } from './button.properties';

const Button = (properties: Properties) => {
  const { isActive, label, labelledBy, onClick, text, type = 'switch' } = properties;

  const [isDisabled, setIsDisabled] = useState(true);
  const [soundsURLS, setSoundsURLS] = useState<string[]>([]);
  const soundReference = useRef<Howl | null>(null);

  const handleClick = () => {
    soundReference.current?.play();
  };

  useEffect(() => {
    const fetchSounds = async () => {
      const response = await fetch('/api/get-sounds');
      const sounds = await response.json();

      setSoundsURLS(sounds);
      setIsDisabled(false);
    };

    fetchSounds();
  }, []);

  useEffect(() => {
    const soundSource = soundsURLS[0];

    if (!soundSource) return undefined;

    const sound = new Howl({
      src: [soundSource],
      format: 'aac',
    });

    soundReference.current = sound;

    return () => {
      sound.unload();
    };
  }, [soundsURLS]);

  return (
    <div className={style.wrapper}>
      <button
        aria-disabled={isDisabled}
        aria-label={label}
        aria-labelledby={labelledBy}
        className={clsx(
          style.button,
          type === 'switch' ? style.circle : style.rectangle,
          isActive && style.active,
        )}
        disabled={isDisabled}
        onClick={() => {
          handleClick();
          onClick();
        }}
        type='button'
      />
      <span id={labelledBy}>{text}</span>
    </div>
  );
};

export { Button };
