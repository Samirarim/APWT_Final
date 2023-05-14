/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nestjsproject-production-364f.up.railway.app',
        port: '3000',    
      },
    ],
  nextConfig
}