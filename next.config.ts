import type { NextConfig } from 'next'
import { site } from './src/config/site'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // The resume carries contact details, so keep it out of search results.
        source: site.resumeUrl,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

export default nextConfig
