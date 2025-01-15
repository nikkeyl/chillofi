'use client';

import { useEffect, useRef, useState } from 'react';

import style from './range.module.scss';
import { Properties } from './range.properties';

const Range = (properties: Properties) => {
  const { isDisabled, onChange, volume, volumeControlLabel, volumeLabel } =
    properties;

  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);

  const handleMouseDown = () => {
    if (!isDisabled) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging && trackRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const thumbWidth = thumbRef.current?.offsetWidth || 0;
      const offsetX = event.clientX - trackRect.left - thumbWidth / 2;
      const newVolume = Math.min(
        Math.max(offsetX / (trackRect.width - thumbWidth), 0),
        1,
      );

      onChange(newVolume);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (trackRef.current && !isDisabled) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const thumbWidth = thumbRef.current?.offsetWidth || 0;
      const offsetX = event.clientX - trackRect.left - thumbWidth / 2;
      const newVolume = Math.min(
        Math.max(offsetX / (trackRect.width - thumbWidth), 0),
        1,
      );

      onChange(newVolume);
    }
  };

  const thumbPosition = `${volume * 100}%`;

  return (
    <label
      aria-disabled={isDisabled}
      aria-label={volumeControlLabel}
      className={style.slider}
      htmlFor={volumeLabel}
    >
      <div ref={trackRef} className={style.track} onClick={handleClick}>
        <span
          ref={thumbRef}
          className={style.thumb}
          onMouseDown={handleMouseDown}
          style={{ left: thumbPosition }}
        />
      </div>
      <span aria-labelledby={volumeLabel}>{volumeLabel}</span>
    </label>
  );
};

export { Range };
