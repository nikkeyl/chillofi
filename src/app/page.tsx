import { getTranslations } from 'next-intl/server';

import { ScreenImagesProvider, ScreenNoiseEffectProvider } from '@/providers';
import { getImages } from '@/server';
import { Panel } from '@/ui';
import { Player, Screen, Switcher } from '@/widgets';

const HomePage = async () => {
  const images = await getImages();
  const i18n = await getTranslations('labels');

  return (
    <ScreenNoiseEffectProvider>
      <ScreenImagesProvider images={images}>
        <Screen />
        <Panel>
          <Switcher text={i18n('noise_control_label')} type='noise' />
          <Player text={i18n('play_control_label')} />
          <Switcher text={i18n('image_control_label')} type='image' />
        </Panel>
      </ScreenImagesProvider>
    </ScreenNoiseEffectProvider>
  );
};

export default HomePage;
