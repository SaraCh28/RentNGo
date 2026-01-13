/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack instead of Turbopack
  experimental: {
    // enabling this disables Turbopack and restores Webpack
    webpackBuildWorker: true,
  },
};

module.exports = nextConfig;
