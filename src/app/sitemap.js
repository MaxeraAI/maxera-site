import { POSTS } from "./_data/posts";

const SITE = "https://maxera.ai";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["/", "/about", "/blog", "/contact"].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
  }));
  const postRoutes = POSTS.filter((p) => p.published).map((p) => ({
    url: `${SITE}${p.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...postRoutes];
}
