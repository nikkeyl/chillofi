import { defineConfig } from '@archoleat/next-define-config';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/i18n/get-request-config.ts');

export default withNextIntl(
  defineConfig({
    images: {
      formats: ['image/webp'],
      remotePatterns: [
        {
          hostname: 'chillofi.vercel.app',
          pathname: '/images/**',
          protocol: 'https',
        },
      ],
    },
  }),
);
