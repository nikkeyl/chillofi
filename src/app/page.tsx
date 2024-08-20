import Image from 'next/image';

import { Fullscreen, Switcher } from '@shared/ui';

import background from '@images/background.jpg';

const Home = () => (
  <Fullscreen>
    <Image src={background} alt="background" priority />
    <Switcher />
  </Fullscreen>
);

export default Home;
