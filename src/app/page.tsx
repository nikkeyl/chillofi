import { getTranslations } from 'next-intl/server';

import { getImages } from '@/config';
import { ScreenImagesProvider, ScreenNoiseEffectProvider } from '@/providers';
import { Controls } from '@/ui';
import { Player, Screen, Switcher } from '@/widgets';

const HomePage = async () => {
  const images = await getImages();
  const translations = await getTranslations('labels');

  const noiseTranslation = translations('noise_control_label');
  const playTranslation = translations('play_control_label');
  const imageTranslation = translations('image_control_label');

  return (
    <ScreenNoiseEffectProvider>
      <ScreenImagesProvider images={images}>
        <Screen />
        <Controls>
          <Switcher
            ariaLabelledBy={noiseTranslation}
            text={noiseTranslation}
            type='noise'
          />
          <Player ariaLabelledBy={playTranslation} text={playTranslation} />
          <Switcher
            ariaLabelledBy={imageTranslation}
            text={imageTranslation}
            type='image'
          />
        </Controls>
      </ScreenImagesProvider>
    </ScreenNoiseEffectProvider>
  );
};

export default HomePage;
