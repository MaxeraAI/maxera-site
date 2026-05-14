"use client";

import { motion } from "framer-motion";
import { Container, Button } from "../../_shared/ui";

export function CTAStrip() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hairline relative isolate overflow-hidden rounded-sm bg-ink-900/40 p-10 sm:p-14 lg:p-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(80% 60% at 70% 20%, rgba(245,197,24,0.12) 0%, rgba(245,197,24,0) 60%)",
            }}
          />
          <h2 className="heading-2 max-w-4xl text-4xl text-ink-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Curious if AI fits your business?{" "}
            <span
              className="italic text-saffron"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              Let’s find out.
            </span>
          </h2>
          <p className="body-lead mt-8 max-w-xl">
            Fifteen minutes. We figure out the one or two workflows where AI would actually move the needle for your business, and tell you whether we’re the right team to build them. No pitch deck. No pressure.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg" variant="primary" showArrow>
              Get in touch
            </Button>
            <Button href="mailto:maxera.ai@gmail.com" size="lg" variant="secondary">
              maxera.ai@gmail.com
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
