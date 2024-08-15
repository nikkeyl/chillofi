import Image from 'next/image';

import { Main, Wrapper } from '@shared/ui';

const Home = () => (
  <Wrapper>
    <Main>
      <Image
        className=""
        src="/images/background.jpg"
        alt="background"
        width={1920}
        height={1080}
      />
    </Main>
  </Wrapper>
);

export default Home;
