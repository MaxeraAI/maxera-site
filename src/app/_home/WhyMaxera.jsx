"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "../_shared/ui";

const PILLARS = [
  {
    n: "i",
    title: "We deliver, we don’t just advise.",
    body:
      "Most AI consultants will hand you a 40-slide deck and disappear after the kickoff. We build what we recommend. Every engagement ends with something running in your business, not a PDF rotting in your Google Drive.",
  },
  {
    n: "ii",
    title: "We tailor everything.",
    body:
      "We don’t sell pre-built solutions. We don’t show up with a chatbot template. Before we propose anything, we go deep into your operations and find the AI opportunities that fit your business specifically. What works for a marketing agency doesn’t work for an ecommerce brand. We know the difference because we do the work.",
  },
  {
    n: "iii",
    title: "We stay involved.",
    body:
      "AI isn’t a one-time install. Models change. Your business changes. The companies winning with AI right now treat it as an ongoing capability, not a finished project. We stay involved after launch to keep the systems performing, retrain them as needed, and find new opportunities as they appear.",
  },
];

export function WhyMaxera() {
  return (
    <section className="relative scroll-mt-24 py-16 sm:py-20 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Why Maxera"
          index={3}
          title="The way we work."
          lede="Three reasons our engagements actually ship."
        />

        <div className="mt-12 grid grid-cols-1 gap-px bg-ink-50/10 sm:mt-16 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="group/p relative flex flex-col bg-ink p-8 transition-colors hover:bg-ink-900 sm:p-10 lg:p-12"
            >
              <div className="flex items-center gap-4">
                <span
                  className="font-display text-2xl italic text-saffron"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
                >
                  {p.n}
                </span>
                <span aria-hidden className="h-px flex-1 bg-ink-50/10" />
              </div>
              <h3 className="heading-3 mt-8 text-2xl text-ink-50 sm:text-[1.625rem] md:text-[1.75rem]">
                {p.title}
              </h3>
              <p className="mt-6 text-[0.9375rem] text-ink-200 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
