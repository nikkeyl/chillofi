import styles from './page.module.scss';

import Image from 'next/image';

import { Wrapper } from '../shared/ui/wrapper';

const Home = () => {
  return (
    <Wrapper>
      <main className=''>
        <Image
          className=''
          src="/images/background.jpg"
          alt="background"
          width={1920}
          height={1080}
        />
      </main>
    </Wrapper>
  );
};

export default Home;
