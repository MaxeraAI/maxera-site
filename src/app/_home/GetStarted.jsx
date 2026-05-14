"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow, Button } from "../_shared/ui";

export function GetStarted() {
  return (
    <section
      id="get-started"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-20 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <Eyebrow index={5}>How to get started</Eyebrow>
            <h2 className="heading-2 mt-7 text-5xl text-ink-50 sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              One conversation.{" "}
              <span
                className="italic text-saffron"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
              >
                Then clarity.
              </span>
            </h2>
            <p className="body-lead mt-10 max-w-xl">
              Most owners we talk to have been thinking about AI for months and haven't made a single decision. Fifteen minutes with us and you'll know exactly what to do next, whether you hire us or not.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" variant="primary" showArrow>
                Get in touch
              </Button>
              <Button href="#faq" size="lg" variant="secondary">
                Common questions
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5"
          >
            <GiftCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function GiftCard() {
  return (
    <div className="relative isolate mx-auto w-full max-w-md">
      <div className="hairline rounded-sm bg-ink-900/55 p-8 backdrop-blur-md sm:p-10">
        <div className="flex items-start justify-between">
          <p className="label-mono text-saffron">What we cover on the call</p>
          <p className="label-mono text-ink-300">15 min</p>
        </div>

        <p className="font-display mt-10 text-3xl leading-[1.05] tracking-tight text-ink-50 sm:text-4xl">
          Fifteen minutes. Worth more than the AI course you bookmarked.
        </p>

        <ul className="mt-10 space-y-5 text-[0.9375rem] text-ink-100">
          {COVERS.map((t, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 inline-block size-1.5 flex-none rounded-full bg-saffron"
              />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-end justify-between border-t border-ink-50/10 pt-6">
          <div>
            <p className="label-mono text-ink-300">After the call</p>
            <p
              className="mt-1 font-display text-xl text-ink-50"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              You walk away with clarity.
            </p>
          </div>
          <div className="text-right">
            <p className="label-mono text-ink-300">Cost</p>
            <p className="mt-1 font-mono text-sm text-ink-100">Free</p>
          </div>
        </div>
      </div>

      {/* Decorative concentric mark */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="absolute -top-7 -right-7 size-20 text-saffron/70"
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
      </svg>
    </div>
  );
}

const COVERS = [
  "The actual cost of doing nothing for another quarter.",
  "The one workflow in your business AI should handle first.",
  "Whether we're the right fit, even if we're not.",
];
