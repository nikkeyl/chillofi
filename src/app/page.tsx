import { ScreenProvider, SoundProvider } from '@providers';
import { Panel, Wrapper } from '@ui';
import { Logo, Player, Screen, Switcher, VolumeMixer } from '@widgets';

const HomePage = () => (
  <ScreenProvider>
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
  </ScreenProvider>
);

export default HomePage;
