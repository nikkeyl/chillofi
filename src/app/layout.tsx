import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import openGraphImage from '@images/socials-preview/opengraph-image.jpg';

import '@styles/global.scss';

const title = 'Chillofi';
const description = 'LOFI-radio for work, study and relax';
const images = [
  {
    url: openGraphImage.src,
    height: openGraphImage.height,
    width: openGraphImage.width,
  },
];
const siteName = title;
const siteURL = 'https://chillofi.vercel.app';

const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title,
  description,
  openGraph: {
    description,
    url: siteURL,
    images,
    siteName,
    title,
  },
  twitter: {
    description,
    images,
    title,
  },
  icons: {
    icon: {
      fetchPriority: 'high',
      sizes: '48x48',
      type: 'image/x-icon',
      url: 'favicon.ico',
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
