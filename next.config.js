import { defineConfig } from '@archoleat/next-define-config';

const siteName = 'chillofi';
const domainName = 'vercel.app';

export default defineConfig({
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
