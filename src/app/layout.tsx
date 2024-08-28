import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import '@styles/global.scss';

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
};

const RootLayout = (properties: PropsWithChildren) => {
  const { children } = properties;

  return (
    <html lang='en'>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export { metadata, viewport };

export default RootLayout;
