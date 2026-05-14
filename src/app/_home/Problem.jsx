"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow } from "../_shared/ui";

const FONT_VARIATION = '"opsz" 144, "SOFT" 100, "WONK" 1';

export function Problem() {
  return (
    <section className="relative scroll-mt-24 py-16 sm:py-20 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow index={0}>The problem</Eyebrow>
          <h2 className="heading-2 mt-7 text-5xl text-ink-50 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Most companies use AI.{" "}
            <span
              className="italic text-saffron"
              style={{ fontVariationSettings: FONT_VARIATION }}
            >
              Few unlock its potential.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-12 max-w-3xl lg:mt-16"
        >
          <p className="body-lead text-lg text-ink-100 md:text-xl">
            Most operators have already tried AI. A tool here. A subscription there. Maybe an experiment
            or two. That's not the win. The win is an AI system wired into your business. Internal workflows
            that talk to each other. Decisions made from your own data, not someone else's templates. A
            founder dashboard that runs on live data instead of week-old spreadsheets.
          </p>
          <p className="body-lead mt-6 text-lg text-ink-100 md:text-xl">
            We build that system. Wire it into your operations. Stay until your business actually{" "}
            <span
              className="italic text-saffron"
              style={{ fontVariationSettings: FONT_VARIATION }}
            >
              runs on it.
            </span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
