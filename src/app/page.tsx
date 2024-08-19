import Image from 'next/image';

import { Fullscreen, Main, Wrapper, Switcher } from '@shared/ui';

import background from 'public/images/background.jpg';

const Home = () => (
  <Wrapper>
    <Main>
      <Fullscreen>
        <Image src={background} alt="background" priority />
        <Switcher />
      </Fullscreen>
    </Main>
  </Wrapper>
);

export default Home;
