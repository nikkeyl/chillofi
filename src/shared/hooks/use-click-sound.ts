'use client';

import { Howl } from 'howler';
import { useEffect, useRef, useState } from 'react';

const useClickSound = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [soundsURLS, setSoundsURLS] = useState<string[]>([]);
  const soundReference = useRef<Howl | null>(null);

  const playSound = () => {
    soundReference.current?.play();
  };

  useEffect(() => {
    const fetchSounds = async () => {
      const response = await fetch('/api/get-sounds');
      const sounds = await response.json();

      setSoundsURLS(sounds);
      setIsLoading(false);
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

  return { isLoading, playSound };
};

export { useClickSound };
