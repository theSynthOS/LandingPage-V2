import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://app.synthos.fun",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
