/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',          // required for GitHub Pages
  images: { unoptimized: true }, // avoids Image Optimization server
  trailingSlash: true,       // makes static routes work on Pages
  basePath: '',              // keep empty for user/org pages
  assetPrefix: isProd ? '' : '',
};
