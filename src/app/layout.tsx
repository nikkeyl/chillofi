import '@/styles/app.scss';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import { ScreenCRTEffectProvider, ScreenImagesProvider } from '@/providers';
import { getImages } from '@/server';

const RootLayout = async (properties: PropsWithChildren) => {
  const { children } = properties;

  const locale = await getLocale();
  const messages = await getMessages();
  const images = await getImages();

  return (
    <html lang={locale}>
      <body>
        <ScreenCRTEffectProvider>
          <ScreenImagesProvider images={images}>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ScreenImagesProvider>
        </ScreenCRTEffectProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export { metadata, viewport } from './metadata';
export default RootLayout;
