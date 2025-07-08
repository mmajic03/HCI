/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gexylhqmqpshabhuigua.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tasteofhome.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
