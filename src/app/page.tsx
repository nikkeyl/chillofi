import Image from 'next/image';

import { Fullscreen, Main, Wrapper } from '@shared/ui';

import background from 'public/images/background.jpg';

const Home = () => (
  <Wrapper>
    <Main>
      <Fullscreen>
        <Image className="" src={background} alt="background" priority />
      </Fullscreen>
    </Main>
  </Wrapper>
);

export default Home;
