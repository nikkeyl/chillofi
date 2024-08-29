import Image from 'next/image';

import { Screen, Switcher } from '@ui';

import background from '@images/background.jpg';

const Home = () => (
  <Screen>
    <Image src={background} alt='background' priority />
    <Switcher />
  </Screen>
);

export default Home;
