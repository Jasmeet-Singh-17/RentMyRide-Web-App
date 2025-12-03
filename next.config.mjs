/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",                            // required for GitHub Pages
  basePath: isProd ? "/RentMyRide-Web-App" : "",
  assetPrefix: isProd ? "/RentMyRide-Web-App/" : "",

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
