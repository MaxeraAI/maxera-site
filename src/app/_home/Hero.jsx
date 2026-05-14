"use client";

import { motion } from "framer-motion";
import { Button, Container, TopographyBackground } from "../_shared/ui";

const reveal = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};
const stagger = (i) => ({
  ...reveal,
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
    delay: 0.1 + i * 0.08,
  },
});

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-32">
      <TopographyBackground />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-9">
            <motion.div {...stagger(0)} className="flex items-center gap-3 label-mono text-saffron">
              <span className="size-1.5 rounded-full bg-saffron animate-pulse" />
              <span>AI Transformation Partner · Florida · United States</span>
            </motion.div>

            <motion.h1
              {...stagger(1)}
              className="heading-1 mt-10 text-[3.25rem] text-ink-50 sm:text-[4.5rem] md:text-[6rem] lg:text-[7.75rem]"
            >
              Stop reading<br />
              <span className="italic text-ink-200" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}>
                about AI.
              </span><br />
              Start putting it{" "}
              <span className="italic text-saffron" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}>
                to work.
              </span>
            </motion.h1>

            <motion.p
              {...stagger(2)}
              className="body-lead mt-10 max-w-xl text-lg text-ink-100 md:text-xl"
            >
              Most companies have heard about AI. Few know what to do with it. We figure out where AI actually
              fits in your business, then we build it.
            </motion.p>

            <motion.div {...stagger(3)} className="mt-12 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" variant="primary" showArrow>
                Get in touch
              </Button>
              <Button href="#how-it-works" size="lg" variant="secondary">
                How it works
              </Button>
            </motion.div>

            <motion.div
              {...stagger(4)}
              className="mt-20 hidden max-w-3xl items-stretch gap-0 divide-x divide-ink-50/10 border-y border-ink-50/10 py-6 sm:flex"
            >
              <Stat n="2025+" l="The year AI stopped being optional" />
              <Stat n="Weeks" l="Not quarters. From kickoff to systems live." />
              <Stat n="Built by us" l="Owned by you. No vendor lock-in." />
            </motion.div>
          </div>

          <motion.aside
            {...stagger(5)}
            className="relative hidden lg:col-span-3 lg:block"
          >
            <div className="sticky top-32 ml-auto w-full max-w-[18rem]">
              <div className="hairline rounded-sm bg-ink-900/60 p-6 backdrop-blur-md">
                <p className="label-mono text-ink-300">Right now</p>
                <p className="mt-3 font-display text-2xl text-ink-50" style={{ letterSpacing: "-0.025em" }}>
                  Booking conversations this week.
                </p>
                <p className="mt-5 text-sm text-ink-200">
                  We work with US businesses across industries, from small operators making their first AI investment to mid-market companies building AI into their operations. The companies booking now are the ones moving first.
                </p>
                <a
                  href="/contact"
                  className="link-underline mt-6 inline-block label-mono text-saffron"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div className="flex-1 px-6 first:pl-0">
      <p className="display-metric text-saffron text-4xl md:text-5xl">{n}</p>
      <p className="mt-3 label-mono text-ink-300">{l}</p>
    </div>
  );
}

