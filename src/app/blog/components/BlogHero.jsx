"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow, TopographyBackground } from "../../_shared/ui";

export function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44 lg:pb-24">
      <TopographyBackground />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>Field notes</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="heading-1 mt-10 max-w-5xl text-[3rem] text-ink-50 sm:text-[4.25rem] md:text-[5.5rem] lg:text-[7rem]"
        >
          How real businesses are putting AI{" "}
          <span
            className="italic text-saffron"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
          >
            to work.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="body-lead mt-10 max-w-2xl text-lg text-ink-100 md:text-xl"
        >
          Plain-language writing for owners and operators who'd rather build than read about building. What's worth shipping, what's hype, what we see across home services, agencies, ecommerce, and everything else.
        </motion.p>
      </Container>
    </section>
  );
}
