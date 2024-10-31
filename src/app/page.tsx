import { ImageProvider, SoundProvider } from '@providers';
import { Controls, Panel, Wrapper } from '@ui';
import { ImageSwitcher, Logo, Player, Screen, VolumeMixer } from '@widgets';

const HomePage = () => (
  <ImageProvider>
    <Wrapper>
      <Screen />
      <Panel>
        <Controls>
          <SoundProvider>
            <Player />
            <VolumeMixer />
          </SoundProvider>
          <ImageSwitcher />
        </Controls>
        <Logo />
      </Panel>
    </Wrapper>
  </ImageProvider>
);

export default HomePage;
