/** @type {import('next').NextConfig} */

const path = require('path');

// next.config.js
const withVideos = require('next-videos')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};


module.exports = withVideos()