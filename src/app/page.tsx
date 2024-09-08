import Image from 'next/image';

import { Screen } from '@ui/screen/screen';
import { Switcher } from '@ui/switcher/switcher';

import background from '@images/background.jpg';

const Home = () => (
  <Screen>
    <Image src={background} alt='background' priority fetchPriority='high' />
    <Switcher />
  </Screen>
);

export default Home;
