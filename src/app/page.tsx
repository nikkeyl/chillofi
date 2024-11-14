import { ScreenCRTEffectProvider, ScreenImagesProvider } from '@providers';
import { Panel } from '@ui';
import { Player, Screen, Switcher } from '@widgets';

const HomePage = () => (
  <ScreenCRTEffectProvider>
    <ScreenImagesProvider>
      <Screen />
      <Panel>
        <Switcher type='crt' />
        <Player />
        <Switcher type='image' />
      </Panel>
    </ScreenImagesProvider>
  </ScreenCRTEffectProvider>
);

export default HomePage;
