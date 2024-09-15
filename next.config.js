import { defineConfig } from '@archoleat/next-define-config';

const siteName = 'chillofi';
const domainName = 'vercel.app';

export default defineConfig({
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: `${siteName}-archoleat.${domainName}`,
        pathname: '/images/**',
        protocol: 'https',
      },
      {
        hostname: `${siteName}.${domainName}`,
        pathname: '/images/**',
        protocol: 'https',
      },
    ],
  },
});
