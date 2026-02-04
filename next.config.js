/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Ai-chat-ui-1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Ai-chat-ui-1/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
