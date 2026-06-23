/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      }
    ]
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/:path*', destination: '/', permanent: true },
      { source: '/our-ecosystem', destination: '/courses', permanent: true },
      { source: '/our-story', destination: '/about', permanent: true },
      { source: '/stem', destination: '/courses', permanent: true },
      { source: '/robotics', destination: '/courses/robotics-iot', permanent: true },
      { source: '/software-engineering', destination: '/courses/se', permanent: true },
      { source: '/careers', destination: '/contact', permanent: true },
    ];
  }
};

export default nextConfig;
