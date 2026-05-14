"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader, Button } from "../_shared/ui";

const TIERS = [
  {
    n: "i",
    name: "AI Diagnostic",
    best: "Best for businesses starting their AI journey.",
    body:
      "A focused diagnostic of where AI fits in your specific business. We interview your team, map your operations, identify the highest-ROI opportunities, and deliver a written plan with priorities, projected impact, and a roadmap. You walk away with clarity on what's worth building, what isn't, and where to start. Many clients use this as the foundation for a full transformation. Some use it as a standalone tool to guide their own internal decisions.",
  },
  {
    n: "ii",
    name: "AI Transformation",
    best: "Best for companies ready to build and deploy.",
    body:
      "A multi-week engagement where we identify, design, build, deploy, and launch the AI systems your business needs. End-to-end. From the operational diagnostic to the moment the systems are running and your team is trained on them. This is the most common way clients work with us, and it's where most of the measurable ROI happens.",
  },
  {
    n: "iii",
    name: "AI Partnership",
    best: "Best for companies treating AI as a long-term strategic capability.",
    body:
      "For companies that want AI built into their operations as an ongoing function, not a one-time project. We become a long-term partner, continuously identifying new opportunities, building new systems, optimizing existing ones, and adapting as your business and the AI landscape change. Effectively a fractional AI team without the cost of building one in-house.",
  },
];

export function WaysToWork() {
  return (
    <section
      id="ways-to-work"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow="Ways to work with us"
          index={2}
          title="Three ways in. One conversation to start."
          lede="Every engagement starts with a conversation. Where it goes depends on what your business actually needs."
        />

        <div className="mt-12 grid grid-cols-1 gap-px bg-ink-50/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
              className="group/tier relative flex flex-col bg-ink p-8 transition-colors hover:bg-ink-900 sm:p-10 lg:p-12"
            >
              <div className="flex items-center gap-4">
                <span
                  className="font-display text-2xl italic text-saffron"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
                >
                  {t.n}
                </span>
                <span aria-hidden className="h-px flex-1 bg-ink-50/10" />
              </div>

              <h3 className="heading-3 mt-8 text-2xl text-ink-50 sm:text-[1.625rem] md:text-[1.75rem]">
                {t.name}
              </h3>
              <p className="mt-3 label-mono text-saffron">{t.best}</p>
              <p className="mt-6 flex-1 text-[0.9375rem] leading-relaxed text-ink-200">
                {t.body}
              </p>

              <div className="mt-10">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="sm"
                  showArrow
                  className="w-full sm:w-auto"
                >
                  Get in touch
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
