import { ScreenProvider } from '@providers';
import { Panel } from '@ui';
import { Player, Screen, Switcher } from '@widgets';

const HomePage = () => (
  <ScreenProvider>
    <main>
      <Screen />
      <Panel>
        <Switcher type='crt' />
        <Player />
        <Switcher type='image' />
      </Panel>
    </main>
  </ScreenProvider>
);

export default HomePage;
