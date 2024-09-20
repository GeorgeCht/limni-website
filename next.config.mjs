import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true,
    buildActivityPosition: 'bottom-right',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/api/media/file/:path*',
        destination: '/storage/:path*',
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig)
