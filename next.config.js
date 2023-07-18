const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
