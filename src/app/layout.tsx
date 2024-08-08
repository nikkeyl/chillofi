import '@app/style.scss';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

const metadata: Metadata = {
  title: 'Chillofi',
  description: 'LOFI-radio for work, study and relax',
  icons: {
    icon: {
      url: 'public/favicon.ico',
      type: 'image/x-icon',
      sizes: '48x48',
      fetchPriority: 'high',
    },
  },
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
