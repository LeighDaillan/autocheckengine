/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "autocheckengine.vercel.app",
      "cdn.shopify.com",
      "lh3.googleusercontent.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
  env: {
    stripe_public_key: `${process.env.STRIPE_PUBLIC_KEY}`,
  },
};
