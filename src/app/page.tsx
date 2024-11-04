import { ScreenProvider } from '@providers';
import { Panel } from '@ui';
import { Logo, Player, Screen, Switcher } from '@widgets';

const HomePage = () => (
  <ScreenProvider>
    <Screen />
    <Panel>
      <Switcher type='crt' />
      <Player />
      <Switcher type='image' />
      <Logo />
    </Panel>
  </ScreenProvider>
);

export default HomePage;
