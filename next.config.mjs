/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "paypalobjects.com",
      },
      {
        protocol: "https",
        hostname: "esewa.com.np",
      },
    ],
  },
};

export default nextConfig;
