import Image from 'next/image';

import { Main, Screen, Switcher, Wrapper } from '@ui';

import background from '@images/background.jpg';

const Home = () => (
  <Wrapper>
    <Main>
      <Screen>
        <Image src={background} alt='background' priority />
        <Switcher />
      </Screen>
    </Main>
  </Wrapper>
);

export default Home;
