import { ScreenCRTEffectProvider, ScreenImagesProvider } from '@providers';
import { Panel } from '@ui';
import { Player, Screen, Switcher } from '@widgets';

import { getImages } from '../shared/helpers/get-images';

const HomePage = async () => {
  const images = await getImages();

  return (
    <ScreenCRTEffectProvider>
      <ScreenImagesProvider images={images}>
        <Screen />
        <Panel>
          <Switcher type='crt' />
          <Player />
          <Switcher type='image' />
        </Panel>
      </ScreenImagesProvider>
    </ScreenCRTEffectProvider>
  );
};

export default HomePage;
