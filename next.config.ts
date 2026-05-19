

const nextConfig: import('next').NextConfig= {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/overview",
        permanent: true,
      },
      
    ];
  },

};

export default nextConfig;
