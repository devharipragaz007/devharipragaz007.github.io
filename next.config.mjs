// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // for GitHub Pages/static hosting
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '',               // user site: leave empty
  assetPrefix: ''
};

export default nextConfig;
