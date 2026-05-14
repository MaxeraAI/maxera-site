"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { Container, SectionHeader, Button } from "../_shared/ui";
import { CASE_STUDIES } from "../_data/cases";

export function Cases() {
  return (
    <section id="scenarios" className="relative scroll-mt-24 py-16 sm:py-20 lg:py-20">
      <Container>
        <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="What this looks like in practice"
            index={4}
            title="Three typical scenarios."
            lede="Specific numbers depend on your business, but the patterns hold. These are illustrative scenarios, not active client case studies."
          />
          <Button href="/blog" variant="ghost" showArrow className="self-start sm:self-end -ml-4 sm:ml-0">
            More in field notes
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-ink-50/10 sm:mt-16 lg:grid-cols-3">
          {CASE_STUDIES.map((c, i) => (
            <Case key={i} item={c} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Case({ item, index }) {
  const linkable = Boolean(item.slug);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={`group/case relative bg-ink p-8 sm:p-10 lg:p-12 ${linkable ? "transition-colors hover:bg-ink-900" : ""}`}
    >
      {linkable && (
        <Link
          href={item.slug}
          className="absolute inset-0 z-[1]"
          aria-label={`Read the ${item.sector} field note`}
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <p className="label-mono text-saffron">
          {item.headcount} <span className="text-ink-300">· {item.region}</span>
        </p>
        {linkable && (
          <RxArrowTopRight className="size-5 translate-x-0 text-ink-300 transition-all duration-500 group-hover/case:-translate-y-0.5 group-hover/case:translate-x-0.5 group-hover/case:text-saffron" />
        )}
      </div>

      <p className="display-metric mt-12 text-7xl text-ink-50 sm:text-8xl lg:text-[6.5rem]">
        {item.metric}
      </p>
      <p className="mt-3 text-sm text-ink-200">{item.metricLabel}</p>

      <h3 className="heading-3 mt-10 text-2xl text-ink-50 md:text-[1.625rem]">
        {item.headline}
      </h3>
      <p className="mt-5 max-w-md text-[0.9375rem] text-ink-200">{item.detail}</p>

      {linkable && (
        <p className="mt-10 inline-flex items-center gap-2 label-mono text-ink-300 transition-colors group-hover/case:text-saffron">
          Read the field note
          <RxArrowTopRight className="size-3" />
        </p>
      )}
    </motion.article>
  );
}
