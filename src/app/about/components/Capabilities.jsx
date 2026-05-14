"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow } from "../../_shared/ui";

const CAPS = [
  {
    name: "Bespoke AI systems",
    body:
      "Purpose-built systems for the function that matters most in your business. Lead qualification, order routing, supplier coordination, inventory intelligence. Designed end-to-end for one specific job, integrated into the tools you already run.",
  },
  {
    name: "Custom automations",
    body:
      "End-to-end workflows tied to the tools you already use. Reporting, proposal drafting, intake, follow-up, dispatch. Anything that's currently eating your team's time.",
  },
  {
    name: "Internal AI copilots",
    body:
      "Hand-tuned AI tools and copilots built for the way your team actually works. Trained on your context, owned by you, hosted on your terms.",
  },
  {
    name: "Training, rollout & ongoing care",
    body:
      "We don't drop and disappear. Engagement includes team training, adoption tracking, and ongoing tuning as your business and the underlying models evolve.",
  },
];

export function Capabilities() {
  return (
    <section className="relative scroll-mt-24 py-24 sm:py-32 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Eyebrow index={2}>What we build</Eyebrow>
            <h2 className="heading-2 mt-7 text-4xl text-ink-50 sm:text-5xl md:text-6xl">
              Four categories. Every engagement ships something in here.
            </h2>
            <p className="body-lead mt-8 max-w-md">
              An engagement is scoped to your business, but the systems we build almost always fall into one of these four categories. Built by us, owned by you. Wired into the tools you already run.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="border-t border-ink-50/10">
              {CAPS.map((c, i) => (
                <motion.li
                  key={c.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                  }}
                  className="grid grid-cols-1 gap-y-4 border-b border-ink-50/10 py-10 sm:grid-cols-12 sm:gap-x-8 sm:py-12"
                >
                  <div className="sm:col-span-4">
                    <p className="label-mono text-ink-300">
                      {String(i + 1).padStart(2, "0")} / {String(CAPS.length).padStart(2, "0")}
                    </p>
                    <h3 className="heading-3 mt-3 text-2xl text-ink-50 sm:text-[1.625rem]">
                      {c.name}
                    </h3>
                  </div>
                  <p className="sm:col-span-8 text-[0.9375rem] text-ink-200 leading-relaxed sm:text-base">
                    {c.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
