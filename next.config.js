import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = withPayload({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});

export default nextConfig;