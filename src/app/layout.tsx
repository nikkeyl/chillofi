import '@styles/global.scss';

import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

const metadata: Metadata = {
  title: 'Chillofi',
  description: 'LOFI-radio for work, study and relax',
  icons: {
    icon: {
      url: 'favicon.ico',
      type: 'image/x-icon',
      sizes: '48x48',
      fetchPriority: 'high',
    },
  },
};

const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: 'black',
  userScalable: false,
};

const RootLayout = (properties: PropsWithChildren) => {
  const { children } = properties;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export { metadata, viewport };

export default RootLayout;
