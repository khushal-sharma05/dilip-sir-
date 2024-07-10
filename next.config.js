/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Add your domain(s) here
  },
};

module.exports = nextConfig;
