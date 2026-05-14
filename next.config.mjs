/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/case-studies", destination: "/", permanent: true },
      { source: "/case-study", destination: "/blog/ecommerce-scenario", permanent: true },
      { source: "/blog-post", destination: "/blog/stop-reading-about-ai", permanent: true },
    ];
  },
};

export default nextConfig;
