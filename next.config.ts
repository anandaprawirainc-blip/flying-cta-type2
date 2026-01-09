import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/workspace-*/image/**',
      },
      { 
        protocol: 'https', 
        hostname: 'replicate.delivery', 
        pathname: '/**', 
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add mini-css-extract-plugin for client-side builds
      const MiniCssExtractPlugin = require('mini-css-extract-plugin');
      
      // Check if the plugin is already added
      const hasPlugin = config.plugins.some((plugin: any) => 
        plugin instanceof MiniCssExtractPlugin
      );
      
      if (!hasPlugin) {
        config.plugins.push(new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[name].[contenthash].css',
        }));
      }
    }
    
    return config;
  },
}

export default nextConfig
