import { getTranslations } from 'next-intl/server';

import { ScreenImagesProvider, ScreenNoiseEffectProvider } from '@/providers';
import { getImages } from '@/server';
import { Controls } from '@/ui';
import { Player, Screen, Switcher } from '@/widgets';

const HomePage = async () => {
  const images = await getImages();
  const translations = await getTranslations('labels');

  return (
    <ScreenNoiseEffectProvider>
      <ScreenImagesProvider images={images}>
        <Screen />
        <Controls>
          <Switcher text={translations('noise_control_label')} type='noise' />
          <Player text={translations('play_control_label')} />
          <Switcher text={translations('image_control_label')} type='image' />
        </Controls>
      </ScreenImagesProvider>
    </ScreenNoiseEffectProvider>
  );
};

export default HomePage;
