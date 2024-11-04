import { ScreenProvider } from '@providers';
import { Panel, Wrapper } from '@ui';
import { Logo, Player, Screen, Switcher } from '@widgets';

const HomePage = () => (
  <ScreenProvider>
    <Wrapper>
      <Screen />
      <Panel>
        <Switcher type='crt' />
        <Player />
        <Switcher type='image' />
        <Logo />
      </Panel>
    </Wrapper>
  </ScreenProvider>
);

export default HomePage;
