import openGraphImage from '@socials/preview.jpg';
import type { Metadata, Viewport } from 'next';

const isDevelopment = process.env.NODE_ENV === 'development';
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
  appleWebApp: {
    title,
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  authors: {
    name: author,
    url: `https://t.me/${author}`,
  },
  creator: author,
  description,
  keywords: ['chill', 'chillofi', 'lofi-radio', 'lofi', 'radio', 'relax'],
  metadataBase: isDevelopment ? new URL('http://localhost:3000') : new URL(siteURL),
  publisher: 'Vercel',
  robots: {
    index: true,
    follow: true,
  },
  referrer: 'origin',
  title,
  manifest: 'manifest.webmanifest',
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
      url: 'favicons/apple-touch-icon.png',
    },
    icon: {
      fetchPriority: 'high',
      sizes: '48x48',
      type: 'image/x-icon',
      url: 'favicon.ico',
    },
    other: {
      fetchPriority: 'high',
      sizes: 'any',
      type: 'image/svg+xml',
      url: 'favicons/icon.svg',
    },
  },
};

const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: 'black',
};

export { metadata, viewport };