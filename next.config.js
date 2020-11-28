const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['tsx', 'mdx'],
  images: {
    domains: ['via.placeholder.com'],
  }
});
