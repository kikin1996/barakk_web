/** @type {import('next').NextConfig} */
const nextConfig = {
  // Umožní servovat statické HTML soubory z public/
  async rewrites() {
    return [];
  },
}

module.exports = nextConfig
