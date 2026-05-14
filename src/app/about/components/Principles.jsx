"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow } from "../../_shared/ui";

const PRINCIPLES = [
  {
    n: "i",
    title: "We deliver, we don’t just advise.",
    body:
      "Every engagement ends with something running in your business, not a PDF in your Google Drive. We build what we recommend.",
  },
  {
    n: "ii",
    title: "We tailor everything.",
    body:
      "What works for a dental practice doesn’t work for a marketing agency. We study your business first, then propose. No copy-paste solutions.",
  },
  {
    n: "iii",
    title: "We stay involved after launch.",
    body:
      "AI isn’t a one-time install. We stay close to keep the systems performing, retrain them as models change, and find new opportunities as they appear.",
  },
  {
    n: "iv",
    title: "Adoption is the deliverable.",
    body:
      "Most AI projects fail because the team never adopts them. We don’t hand you a tool and walk away. Training and rollout are part of every engagement.",
  },
  {
    n: "v",
    title: "Plain language, no buzzwords.",
    body:
      "Our clients are owners and operators, not AI researchers. We translate the technology into something useful for your business. You don’t need to study up.",
  },
  {
    n: "vi",
    title: "Founder-led or it’s not us.",
    body:
      "You work directly with the founder and core team. There is no analyst layer between you and the people building your systems.",
  },
];

export function Principles() {
  return (
    <section className="relative scroll-mt-24 py-24 sm:py-32 lg:py-12">
      <Container>
        <Eyebrow index={1}>Operating principles</Eyebrow>
        <h2 className="heading-2 mt-7 max-w-3xl text-4xl text-ink-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Six rules we don’t break.
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-px bg-ink-50/10 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.06,
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
              <h3 className="heading-3 mt-8 text-xl text-ink-50 sm:text-[1.375rem]">
                {p.title}
              </h3>
              <p className="mt-5 text-[0.9375rem] text-ink-200">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
