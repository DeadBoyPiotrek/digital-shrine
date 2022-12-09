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
  },
  images: {
    domains: ['media.graphassets.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;

// http://localhost:3000/(https://media.graphassets.com/k2CuHdLbRsSfAn6MPQFF)
