import { ImageProvider, SoundProvider } from '@providers';
import { Panel, Wrapper } from '@ui';
import { Logo, Player, Screen, Switcher, VolumeMixer } from '@widgets';

const HomePage = () => (
  <ImageProvider>
    <Wrapper>
      <Screen />
      <Panel>
        <Switcher />
        <SoundProvider>
          <Player />
          <VolumeMixer />
        </SoundProvider>
        <Switcher />
        <Logo />
      </Panel>
    </Wrapper>
  </ImageProvider>
);

export default HomePage;
