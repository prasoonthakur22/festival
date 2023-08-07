/** @type {import('next').NextConfig} */
const nextBuildId = require('next-build-id')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  useFileSystemPublicRoutes: true,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
}

module.exports = nextConfig
