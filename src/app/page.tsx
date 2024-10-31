import { ImageProvider, SoundProvider } from '@providers';
import { Controls, Panel, Wrapper } from '@ui';
import {
  // CRTEffectSwitcher,
  ImageSwitcher,
  Logo,
  Player,
  Screen,
  VolumeMixer,
} from '@widgets';

const HomePage = () => (
  <ImageProvider>
    <Wrapper>
      <Screen />
      <Panel>
        <Controls>
          <SoundProvider>
            <Player />
            <ImageSwitcher />
            {/* <CRTEffectSwitcher /> */}
            <VolumeMixer />
          </SoundProvider>
        </Controls>
        <Logo />
      </Panel>
    </Wrapper>
  </ImageProvider>
);

export default HomePage;
