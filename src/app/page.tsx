import { ImageProvider } from '@providers/image-provider/image-provider';
import { SoundProvider } from '@providers/sound-provider/sound-provider';
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
  <SoundProvider>
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
  </SoundProvider>
);

export default HomePage;
