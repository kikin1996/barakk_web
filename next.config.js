/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2vzorxxgdhozt.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'd2knpontqjzj9g.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'loft-kolasinski.pl',
      },
    ],
  },
}

module.exports = nextConfig
