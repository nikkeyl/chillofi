import process from 'node:process';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import openGraphImage from '@images/socials-preview/opengraph-image.jpg';

import '@styles/global.scss';

const title = process.env.NEXT_PUBLIC_DEFAULT_TITLE as string;
const description = process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION as string;
const images = [
  {
    url: openGraphImage.src,
    height: openGraphImage.height,
    width: openGraphImage.width,
  },
];
const siteName = title;
const siteURL = process.env.NEXT_PUBLIC_DEFAULT_URL as string;
const author = process.env.NEXT_PUBLIC_AUTHOR_NAME as string;

const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  applicationName: title,
  keywords: ['chill', 'chillofi', 'lofi-radio', 'lofi', 'radio', 'relax'],
  publisher: 'Vercel',
  creator: author,
  authors: {
    name: author,
    url: `https://t.me/${author}`,
  },
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
