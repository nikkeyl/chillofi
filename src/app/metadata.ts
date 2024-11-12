import { isDevelopment } from '@helpers';
import socialCoverImage from '@socials/cover.jpg';
import type { Metadata, Viewport } from 'next';

const title = process.env.NEXT_PUBLIC_DEFAULT_TITLE;
const description = process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION;
const images = [
  {
    url: socialCoverImage.src,
    height: socialCoverImage.height,
    width: socialCoverImage.width,
  },
];
const siteName = title;
const siteURL = process.env.NEXT_PUBLIC_DEFAULT_URL;
const author = process.env.NEXT_PUBLIC_AUTHOR_NAME;

const metadata: Metadata = {
  alternates: { canonical: siteURL },
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
  keywords: [
    'chill',
    'chillofi',
    'lofi-radio',
    'lofi',
    'radio',
    'relax',
    'study',
    'work',
  ],
  metadataBase: isDevelopment ? new URL('http://localhost:3000') : new URL(siteURL),
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
    creator: author,
    description,
    images,
    site: siteURL,
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
  userScalable: false,
};

export { metadata, viewport };
