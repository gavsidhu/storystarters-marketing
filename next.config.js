import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  reactStrictMode: true,
  swcMinify: true,

  //Uncoment to add domain whitelist
  images: {
    domains: ['res.cloudinary.com', 'tailwindui.com', 'cdn.sanity.io'],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
