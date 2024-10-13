import Image from 'next/image';

import { Screen } from '@widgets';
import { Player } from '@ui';

import background from '@images/background.jpg';

const HomePage = () => (
  <main>
    <Screen>
      <Image src={background} alt='background' priority fetchPriority='high' />
    </Screen>
    <Player />
  </main>
);

export default HomePage;
