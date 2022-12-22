/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['latin'],
        },
      },
    ],
    workerThreads: false,
    cpus: 1,
  },
  images: {
    domains: ['media.graphassets.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
