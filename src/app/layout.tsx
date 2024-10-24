import '@styles/app.scss';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { PropsWithChildren } from 'react';

const RootLayout = (properties: PropsWithChildren) => {
  const { children } = properties;

  return (
    <html lang='en-US'>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export { metadata, viewport } from '@entities';

export default RootLayout;
