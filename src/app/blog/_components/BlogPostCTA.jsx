"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { Container, Button } from "../../_shared/ui";
import { POSTS } from "../../_data/posts";

export function BlogPostCTA({
  currentSlug,
  label = "Want a second pair of eyes?",
  headline = "Fifteen minutes. We figure out the one workflow worth shipping first in your business.",
}) {
  const more = POSTS.filter((p) => p.published && p.slug !== currentSlug).slice(0, 3);
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hairline relative isolate overflow-hidden rounded-sm bg-ink-900/40 p-10 sm:p-14 lg:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(70% 50% at 75% 20%, rgba(245,197,24,0.10) 0%, rgba(245,197,24,0) 60%)",
            }}
          />
          <p className="label-mono text-saffron">{label}</p>
          <h2 className="heading-2 mt-6 max-w-3xl text-3xl text-ink-50 sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg" variant="primary" showArrow>
              Get in touch
            </Button>
            <Button href="/blog" size="lg" variant="secondary">
              More field notes
            </Button>
          </div>
        </motion.div>

        {more.length > 0 && (
          <div className="mt-24 sm:mt-32">
            <div className="flex items-end justify-between">
              <p className="label-mono text-ink-300">More field notes</p>
              <Link href="/blog" className="link-underline label-mono text-saffron">
                All notes →
              </Link>
            </div>
            <ol className="mt-10 grid grid-cols-1 gap-px bg-ink-50/15 sm:grid-cols-3">
              {more.map((p) => (
                <li key={p.slug} className="bg-ink">
                  <Link
                    href={p.slug}
                    className="group/m flex h-full flex-col p-8 transition-colors hover:bg-ink-900 lg:p-10"
                  >
                    <p className="label-mono text-saffron">{p.category}</p>
                    <h3 className="heading-3 mt-6 text-xl text-ink-50 sm:text-[1.375rem]">
                      {p.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[0.9375rem] text-ink-200">{p.dek}</p>
                    <span className="mt-8 inline-flex items-center gap-2 label-mono text-ink-300 transition-colors group-hover/m:text-saffron">
                      Read
                      <RxArrowTopRight className="size-3" />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        )}
      </Container>
    </section>
  );
}
