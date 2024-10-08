/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      loader: 'default',
      path: '/assets',
      domains: ['https://wiki.cppsoc.xyz', 'media.licdn.com', 'encrypted-tbn0.gstatic.com', 'cppsoc.xyz', 'github.com', 'raw.githubusercontent.com'],
  }
};

export default nextConfig;