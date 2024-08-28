import Image from 'next/image';

import { Screen, Switcher } from '@ui';

import background from '@images/background.jpg';

const Home = () => (
  <main>
    <Screen>
      <Image src={background} alt='background' priority />
      <Switcher />
    </Screen>
  </main>
);

export default Home;
