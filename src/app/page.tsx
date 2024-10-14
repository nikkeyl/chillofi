import background from '@images/background.jpg';
import { Logo, Panel, Player } from '@ui';
import { Screen } from '@widgets';
import Image from 'next/image';

const HomePage = () => (
  <main>
    <Screen>
      <Image alt='background' fetchPriority='high' priority src={background} />
    </Screen>
    <Panel>
      <Player />
      <Logo>Chillofi</Logo>
    </Panel>
  </main>
);

export default HomePage;
