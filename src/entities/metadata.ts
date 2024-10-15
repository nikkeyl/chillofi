import openGraphImage from '@preview/opengraph-image.jpg';
import type { Metadata, Viewport } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const title = process.env.NEXT_PUBLIC_DEFAULT_TITLE;
const description = process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION;
const images = [
  {
    url: openGraphImage.src,
    height: openGraphImage.height,
    width: openGraphImage.width,
  },
];
const siteName = title;
const siteURL = process.env.NEXT_PUBLIC_DEFAULT_URL;
const author = process.env.NEXT_PUBLIC_AUTHOR_NAME;

const metadata: Metadata = {
  applicationName: title,
  creator: author,
  description,
  keywords: ['chill', 'chillofi', 'lofi-radio', 'lofi', 'radio', 'relax'],
  metadataBase: isProduction ? new URL(siteURL) : null,
  publisher: 'Vercel',
  robots: {
    index: true,
    follow: true,
  },
  referrer: 'origin',
  title,
  appleWebApp: {
    title,
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  authors: {
    name: author,
    url: `https://t.me/${author}`,
  },
  openGraph: {
    description,
    url: siteURL,
    images,
    siteName,
    title,
    type: 'website',
  },
  twitter: {
    description,
    images,
    title,
  },
  icons: {
    apple: {
      fetchPriority: 'high',
      sizes: '180x180',
      type: 'image/png',
      url: 'favicons/apple-icon.png',
    },
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

export { metadata, viewport };
