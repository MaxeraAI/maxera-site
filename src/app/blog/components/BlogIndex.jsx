"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { Container } from "../../_shared/ui";
import { POSTS } from "../../_data/posts";

export function BlogIndex() {
  const visible = POSTS.filter((p) => p.published);
  const [feature, ...rest] = visible;
  return (
    <section className="relative py-12 sm:py-20 lg:py-28">
      <Container>
        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border-y border-ink-50/15"
        >
          <Link
            href={feature.slug}
            className="group/feature relative block py-12 transition-colors hover:bg-ink-900/40 sm:py-16 lg:py-24"
          >
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-16">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="label-mono text-saffron">Featured</span>
                  <span className="size-1 rounded-full bg-ink-300" />
                  <span className="label-mono text-ink-300">{feature.category}</span>
                  <span className="size-1 rounded-full bg-ink-300" />
                  <span className="label-mono text-ink-300">{feature.readTime}</span>
                </div>
                <h2 className="heading-2 mt-8 max-w-3xl text-4xl text-ink-50 sm:text-5xl md:text-6xl lg:text-7xl">
                  {feature.title}
                </h2>
                <p className="body-lead mt-8 max-w-2xl">{feature.dek}</p>
              </div>
              <div className="flex items-end justify-between lg:col-span-4 lg:flex-col lg:items-end lg:justify-between lg:gap-8">
                <p className="label-mono text-ink-300">{feature.date}</p>
                <span className="inline-flex items-center gap-2 label-mono text-ink-200 transition-colors group-hover/feature:text-saffron">
                  Read
                  <RxArrowTopRight className="size-3.5 transition-transform duration-500 group-hover/feature:-translate-y-0.5 group-hover/feature:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </motion.article>

        {/* Rest */}
        <ol className="mt-2">
          {rest.map((p, i) => (
            <Row key={i} post={p} index={i + 1} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Row({ post, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.05 }}
      className="border-b border-ink-50/15"
    >
      <Link
        href={post.slug}
        className="group/post grid grid-cols-1 items-baseline gap-y-3 py-8 transition-colors hover:bg-ink-900/40 sm:grid-cols-12 sm:gap-x-8 sm:py-10"
      >
        <span className="sm:col-span-1 label-mono text-ink-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="sm:col-span-7">
          <h3 className="font-display text-2xl tracking-tight text-ink-50 transition-colors sm:text-[1.75rem] md:text-[2rem]">
            {post.title}
          </h3>
          <p className="mt-3 max-w-md text-[0.9375rem] text-ink-200">{post.dek}</p>
        </div>
        <div className="sm:col-span-2 label-mono text-ink-300">{post.category}</div>
        <div className="sm:col-span-2 flex items-baseline justify-between gap-3">
          <span className="label-mono text-ink-300">{post.date}</span>
          <RxArrowTopRight className="size-4 text-ink-200 transition-all duration-500 group-hover/post:-translate-y-0.5 group-hover/post:translate-x-0.5 group-hover/post:text-saffron" />
        </div>
      </Link>
    </motion.li>
  );
}
