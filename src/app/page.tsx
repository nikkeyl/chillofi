// import styles from './page.module.scss';

import Image from 'next/image';

import { Wrapper } from '../shared/ui/wrapper';
import { Main } from '../shared/ui/main';

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
