"use client";

import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { Container, SectionHeader, Button } from "../_shared/ui";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-16 sm:py-20 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Final step"
              index={7}
              title={
                <>
                  The call costs you{" "}
                  <span
                    className="italic text-saffron"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
                  >
                    fifteen minutes.
                  </span>
                </>
              }
              lede="Doing nothing for another quarter costs you a lot more. Start with a conversation. Walk away with clarity, whether you hire us or not."
            />

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" variant="primary" showArrow>
                Get in touch
              </Button>
              <Button href="mailto:maxera.ai@gmail.com" size="lg" variant="secondary">
                maxera.ai@gmail.com
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="hairline rounded-sm bg-ink-900/40 p-8 backdrop-blur-md">
              <Detail label="Direct" value="maxera.ai@gmail.com" href="mailto:maxera.ai@gmail.com" />
              <Detail label="Phone" value="(786) 767-6376" href="tel:+17867676376" />
              <Detail label="Based in" value="Miami, Florida · United States" />
              <Detail label="The first call" value="Free · No pitch · No pressure" mono />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Detail({ label, value, href, mono }) {
  const cls =
    "mt-1 block " +
    (mono
      ? "label-mono text-saffron"
      : "font-display text-2xl tracking-tight text-ink-50 sm:text-[1.625rem]");
  const Tag = href ? "a" : "span";
  return (
    <div className="border-b border-ink-50/10 py-6 last:border-b-0">
      <p className="label-mono text-ink-300">{label}</p>
      <Tag
        href={href}
        className={cls + (href ? " inline-flex items-center gap-2 transition-colors hover:text-saffron" : "")}
      >
        {value}
        {href && <RxArrowTopRight className="size-4 opacity-60" />}
      </Tag>
    </div>
  );
}
