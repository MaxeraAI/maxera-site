"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, SectionHeader } from "../_shared/ui";

const ITEMS = [
  {
    q: "How much does this cost?",
    a: "Every engagement is scoped specifically to your business and the systems we identify, so pricing varies meaningfully. We'll send you a clear scope and quote after the first conversation, once we understand your situation. No surprises and no recurring fees you haven't agreed to.",
  },
  {
    q: "Do I need to know anything about AI before we talk?",
    a: "No. Most of our clients come in knowing very little about AI. Translating it into something useful for your business is our job, not yours.",
  },
  {
    q: "How long does an engagement take?",
    a: "It depends on the scope. Diagnostic engagements typically run a few weeks. Full transformation engagements run one to three months. Long-term partnerships are ongoing.",
  },
  {
    q: "What if I already have AI tools and they're not working?",
    a: "That's a common situation. Companies buy AI tools, never deploy them properly, and assume AI doesn't work for them. We can review what you have, fix what's broken, and replace what isn't worth saving.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-16 sm:py-20 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Common questions"
              index={6}
              title="Asked before the first call."
              lede="The questions every operator asks before booking a call. Answered up front so they don't slow you down."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-ink-50/10">
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
    <li className="border-b border-ink-50/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group/q flex w-full items-start justify-between gap-8 py-7 text-left"
      >
        <span className="font-display text-[1.375rem] leading-snug tracking-tight text-ink-50 sm:text-2xl md:text-[1.6875rem]">
          {item.q}
        </span>
        <span
          aria-hidden
          className="relative mt-2 grid size-7 flex-none place-items-center rounded-full border border-ink-50/15 transition-colors group-hover/q:border-saffron/60"
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute h-px w-3 bg-ink-50 group-hover/q:bg-saffron"
          />
          <span className="absolute h-px w-3 rotate-90 bg-ink-50 group-hover/q:bg-saffron" />
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
            <p className="body-lead pb-8 pr-12 text-ink-200">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
