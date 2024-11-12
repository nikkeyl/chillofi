import { ScreenProvider } from '@providers';
import { Panel } from '@ui';
import { Player, Screen, Switcher } from '@widgets';

const HomePage = () => (
  <ScreenProvider>
    <Screen />
    <Panel>
      <Switcher type='crt' />
      <Player />
      <Switcher type='image' />
    </Panel>
  </ScreenProvider>
);

export default HomePage;
