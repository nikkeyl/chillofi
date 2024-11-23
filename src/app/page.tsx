import { getTranslations } from 'next-intl/server';

import { ScreenCRTEffectProvider, ScreenImagesProvider } from '@/providers';
import { getImages } from '@/server';
import { Panel } from '@/ui';
import { Player, Screen, Switcher } from '@/widgets';

const HomePage = async () => {
  const images = await getImages();
  const i18n = await getTranslations('labels');

  return (
    <ScreenCRTEffectProvider>
      <ScreenImagesProvider images={images}>
        <Screen />
        <Panel>
          <Switcher text={i18n('noise_control_label')} type='crt' />
          <Player text={i18n('play_control_label')} />
          <Switcher text={i18n('image_control_label')} type='image' />
        </Panel>
      </ScreenImagesProvider>
    </ScreenCRTEffectProvider>
  );
};

export default HomePage;
