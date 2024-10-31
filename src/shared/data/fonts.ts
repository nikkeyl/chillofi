import { Cookie } from 'next/font/google';

const cookieFont = Cookie({
  display: 'swap',
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  weight: '400',
});

export { cookieFont };
