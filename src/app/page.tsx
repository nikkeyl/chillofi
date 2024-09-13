import Image from 'next/image';

import { Screen } from '@widgets';
import { Switcher } from '@ui';

import background from '@images/background.jpg';

const HomePage = () => (
  <Screen>
    <Image src={background} alt='background' priority fetchPriority='high' />
    <Switcher />
  </Screen>
);

export default HomePage;
