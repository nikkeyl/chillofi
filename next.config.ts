import { defineConfig } from '@archoleat/next-define-config';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/i18n/get-request-config.ts');

export default withNextIntl(
  defineConfig({
    output: 'standalone',
    images: {
      formats: ['image/webp'],
      remotePatterns: [
        {
          hostname: 'chillofi.nikkeyl.com',
          pathname: '/images/**',
          protocol: 'https',
        },
      ],
    },
  }),
);
