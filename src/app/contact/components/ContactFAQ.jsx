"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, SectionHeader } from "../../_shared/ui";

const ITEMS = [
  {
    q: "What does the first call actually look like?",
    a: "Fifteen minutes, on the phone or video. Your pick. We talk about your business, the things slowing you down, and whether AI can actually help. No slides, no pitch, no pressure. If we're not the right fit, we'll tell you on the call.",
  },
  {
    q: "Will I get a quote on the first call?",
    a: "Not usually. Every engagement is scoped to your specific business and the systems we identify, so pricing varies. After we understand your situation, we send a clear scope and price. No surprises.",
  },
  {
    q: "Do I need to know anything about AI before we talk?",
    a: "No. Most of our clients come in knowing very little about AI. Translating it into something useful for your business is our job, not yours.",
  },
  {
    q: "Can you sign an NDA before we share details?",
    a: "Yes. Mention it when you reach out and we'll send one over before we exchange anything specific.",
  },
];

export function ContactFAQ() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Before you write"
              title="A few quick answers."
              lede="Things we get asked in the first message, so you don't have to ask them in the first message."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-ink-50/15">
              {ITEMS.map((it, i) => (
                <Item key={i} item={it} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Item({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-ink-50/15">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group/q flex w-full items-start justify-between gap-8 py-6 text-left"
      >
        <span className="font-display text-xl tracking-tight text-ink-50 sm:text-[1.375rem]">
          {item.q}
        </span>
        <span
          aria-hidden
          className="relative mt-1.5 grid size-6 flex-none place-items-center rounded-full border border-ink-50/15 transition-colors group-hover/q:border-saffron/60"
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute h-px w-2.5 bg-ink-50 group-hover/q:bg-saffron"
          />
          <span className="absolute h-px w-2.5 rotate-90 bg-ink-50 group-hover/q:bg-saffron" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-12 text-[0.9375rem] text-ink-200">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
