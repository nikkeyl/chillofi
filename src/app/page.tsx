import { Panel } from '@/ui';
import { Player, Screen, Switcher } from '@/widgets';

const HomePage = () => (
  <>
    <Screen />
    <Panel>
      <Switcher type='crt' />
      <Player />
      <Switcher type='image' />
    </Panel>
  </>
);

export default HomePage;
