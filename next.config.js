/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/foreign',
        destination: '/?page=1',
      },
      {
        source: '/train',
        destination: '/?page=2',
      },
      {
        source: '/bus',
        destination: '/?page=3',
      },
     
    ]
  },
}

module.exports = nextConfig
