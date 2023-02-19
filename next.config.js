/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: "/static",
    publicKey: process.env.PUBLIC_KEY,
    serviceID: process.env.SERVICE_ID,
    templateID: process.env.TEMPLATE_ID,
  }
}

module.exports = nextConfig
