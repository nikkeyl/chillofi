import { defineConfig } from '@archoleat/next-define-config';

const domainName = 'vercel.app';

export default defineConfig({
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: `chillofi-archoleat.${domainName}`,
        protocol: 'https',
      },
      {
        hostname: `chillofi-git-main-archoleat.${domainName}`,
        protocol: 'https',
      },
      {
        hostname: `chillofi.${domainName}`,
        protocol: 'https',
      },
    ],
  },
});
