import { ImageProvider, SoundProvider } from '@providers';
import { Panel, Wrapper } from '@ui';
import { Logo, Player, Screen, Switcher, VolumeMixer } from '@widgets';

const HomePage = () => (
  <ImageProvider>
    <Wrapper>
      <Screen />
      <Panel>
        <Switcher type='CRT' />
        <SoundProvider>
          <Player />
          <VolumeMixer />
        </SoundProvider>
        <Switcher type='image' />
        <Logo />
      </Panel>
    </Wrapper>
  </ImageProvider>
);

export default HomePage;
