import './style.scss';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

const metadata: Metadata = {
  title: 'Chillofi',
  description: 'LOFI-radio for work, study and relax',
  icons: { icon: 'public/favicon.ico' },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export { metadata };

export default RootLayout;
