import { Controls, Panel, Wrapper } from '@ui';
import {
  // CRTEffectSwitcher,
  ImageSwitcher,
  Logo,
  Player,
  Screen,
  VolumeMixer,
} from '@widgets';

import { ImageProvider } from './providers/image-provider';

const HomePage = () => (
  <ImageProvider>
    <Wrapper>
      <Screen />
      <Panel>
        <Controls>
          <Player />
          <ImageSwitcher />
          {/* <CRTEffectSwitcher /> */}
          <VolumeMixer />
        </Controls>
        <Logo />
      </Panel>
    </Wrapper>
  </ImageProvider>
);

export default HomePage;
