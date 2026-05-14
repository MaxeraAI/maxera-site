import { POSTS } from "./_data/posts";
import { SITE_URL as SITE } from "./_data/site";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["/", "/about", "/blog", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
  }));
  const postRoutes = POSTS.filter((p) => p.published).map((p) => ({
    url: `${SITE}${p.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...postRoutes];
}
