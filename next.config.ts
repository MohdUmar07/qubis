

const nextConfig: import('next').NextConfig= {
  /* config options here */
  
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
