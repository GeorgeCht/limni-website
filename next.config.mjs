import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true,
    buildActivityPosition: 'bottom-right',
  },
}

export default withPayload(nextConfig)
