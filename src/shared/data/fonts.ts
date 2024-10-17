import { Cookie } from 'next/font/google';

const cookie = Cookie({
  display: 'swap',
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  weight: '400',
});

export { cookie };
