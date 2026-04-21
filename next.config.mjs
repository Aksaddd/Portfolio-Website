/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export for hosts like Surge, GitHub Pages, S3, etc.
  // Vercel will ignore this and do its own optimized build.
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "iframe.ly" },
    ],
  },
  // Surge serves clean URLs without the trailing slash — this keeps anchor
  // links working and matches Surge's routing behavior.
  trailingSlash: true,
};

export default nextConfig;
