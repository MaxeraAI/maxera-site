"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow } from "../../_shared/ui";

const PARAGRAPHS = [
  "Most companies have heard about AI for two years and still haven’t built anything with it. They’ve read the threads, watched the tutorials, subscribed to the tools their team never uses. The reading has become the activity. The doing hasn’t started.",
  "We exist because someone has to actually ship the work. We are not a strategy-deck consultancy. We are not a tool reseller. We are not a chatbot agency. We figure out where AI fits in your business, we build it, we deploy it, and we train your team until it sticks. That is the whole job.",
  "Owned by you. Built by us.",
];

export function Manifesto() {
  return (
    <section className="relative scroll-mt-24 py-24 sm:py-32 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Eyebrow index={0}>Manifesto</Eyebrow>
            <h2 className="heading-2 mt-7 text-4xl text-ink-50 sm:text-5xl md:text-6xl">
              The thesis,<br />in three paragraphs.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-10">
              {PARAGRAPHS.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                  }}
                  className={
                    i === PARAGRAPHS.length - 1
                      ? "font-display text-3xl leading-snug tracking-tight text-saffron sm:text-4xl md:text-5xl"
                      : "text-lg leading-relaxed text-ink-100 md:text-xl"
                  }
                  style={
                    i === PARAGRAPHS.length - 1
                      ? { fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }
                      : undefined
                  }
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
