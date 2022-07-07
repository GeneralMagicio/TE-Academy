/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    loader: 'akamai',
    path: ''
  },
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    })
    return cfg
  }
}
