import { ScreenCRTEffectProvider, ScreenImagesProvider } from '@providers';
import { Panel } from '@ui';
import { Player, Screen, Switcher } from '@widgets';

const HomePage = () => (
  <ScreenCRTEffectProvider>
    <ScreenImagesProvider>
      <main>
        <Screen />
        <Panel>
          <Switcher type='crt' />
          <Player />
          <Switcher type='image' />
        </Panel>
      </main>
    </ScreenImagesProvider>
  </ScreenCRTEffectProvider>
);

export default HomePage;
