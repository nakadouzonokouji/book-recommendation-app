import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/tools/book-recommendation',
  assetPrefix: '/tools/book-recommendation',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 環境変数をビルド時に埋め込み
  env: {
    NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG: process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
    AMAZON_ACCESS_KEY_ID: process.env.AMAZON_ACCESS_KEY_ID,
    AMAZON_SECRET_ACCESS_KEY: process.env.AMAZON_SECRET_ACCESS_KEY,
  }
};

export default nextConfig;
