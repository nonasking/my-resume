import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-resume',
  images: {
    unoptimized: true,
  },
}

export default nextConfig