import { defineConfig } from '@archoleat/next-define-config';

export default defineConfig({
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: 'chillofi-archoleat.vercel.app',
        protocol: 'https',
      },
      {
        hostname: 'chillofi-git-main-archoleat.vercel.app',
        protocol: 'https',
      },
      {
        hostname: 'chillofi.vercel.app',
        protocol: 'https',
      },
    ],
  },
});
