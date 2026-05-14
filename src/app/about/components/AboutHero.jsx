"use client";

import { motion } from "framer-motion";
import { Container, TopographyBackground } from "../../_shared/ui";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 lg:pt-44 lg:pb-16">
      <TopographyBackground />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 label-mono text-saffron"
        >
          <span className="size-1.5 rounded-full bg-saffron" />
          <span>About · AI Transformation Partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="heading-1 mt-10 max-w-5xl text-[3rem] text-ink-50 sm:text-[4.25rem] md:text-[5.5rem] lg:text-[7rem]"
        >
          We build the AI{" "}
          <span
            className="italic text-saffron"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
          >
            your business runs on.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="body-lead mt-12 max-w-2xl text-lg text-ink-100 md:text-xl"
        >
          Maxera is an AI Transformation Partner for US businesses. We figure out what's worth building, then we
          build it, deploy it, and train your team to use it. We are not a tool reseller, not a strategy-deck consultancy,
          not a chatbot agency. We are the team that takes AI from a thing you've been reading about to a thing your business runs on.
        </motion.p>
      </Container>
    </section>
  );
}
