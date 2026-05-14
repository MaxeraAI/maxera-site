"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowLeft } from "react-icons/rx";
import { Container, Eyebrow } from "../../_shared/ui";
import { BlogPostCTA } from "../_components/BlogPostCTA";

export default function Page() {
  return (
    <>
      <PostHeader />
      <PostBody />
      <BlogPostCTA
        currentSlug="/blog/ecommerce-scenario"
        label="Curious about your scenario?"
        headline="Book a free 15-minute fit call. Walk away with clarity, whether you hire us or not."
      />
    </>
  );
}

function PostHeader() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 mesh-saffron -z-10" aria-hidden />
      <Container className="relative">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 label-mono text-ink-300 transition-colors hover:text-saffron"
        >
          <RxArrowLeft className="size-3.5" />
          Field notes
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>Field notes</Eyebrow>
            <span className="size-1 rounded-full bg-ink-300" />
            <span className="label-mono text-ink-300">7 min read</span>
            <span className="size-1 rounded-full bg-ink-300" />
            <span className="label-mono text-ink-300">May 12, 2026</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="heading-1 mt-10 max-w-5xl text-[2.5rem] text-ink-50 sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem]"
        >
          How a mid-market ecommerce brand got its{" "}
          <span
            className="italic text-saffron"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
          >
            evenings back with AI.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="body-lead mt-10 max-w-3xl text-lg text-ink-100 md:text-xl"
        >
          An illustrative scenario showing what a typical Maxera engagement looks like inside a mid-market ecommerce operations team: customer service co-pilot, inventory intelligence, supplier comms, and what changes after launch.
        </motion.p>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink-50/15 pt-8 text-[0.9375rem] text-ink-200">
          <span className="label-mono text-ink-300">Filed under</span>
          <span>Scenarios</span>
          <span className="size-1 rounded-full bg-ink-300" />
          <span>For operators</span>
          <span className="size-1 rounded-full bg-ink-300" />
          <span>Ecommerce</span>
        </div>
      </Container>
    </section>
  );
}

function PostBody() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <article className="mx-auto max-w-2xl">
          <div className="post-prose">
            <p className="lead">
              This is an illustrative scenario based on patterns we see repeatedly in mid-market ecommerce
              operations, not a single named client. The specifics are realistic. The exact numbers in any real
              engagement depend on the business.
            </p>

            <h2>01 · The problem. An ops team drowning in inboxes.</h2>
            <p>
              Customer service was handling more tickets than the team could close in a day. Inventory questions
              bounced between Slack threads and warehouse calls. Supplier coordination happened in five email
              chains and a shared spreadsheet that nobody trusted. The founder didn’t have a real-time view of
              any of it.
            </p>
            <p>
              It wasn’t a staffing problem. It was the same operating problem most growing ecommerce brands hit:
              more volume than the systems can absorb, work spread across tools that don’t talk to each other,
              and a team running on overtime to paper over the gaps.
            </p>

            <h2>02 · What we built. A co-pilot, an inventory agent, and a supplier comms system.</h2>
            <p>
              We deployed an AI customer service co-pilot for the support team, drafting responses against order
              history, return policy, and product context. Reps review and send. Edge cases get escalated with
              full context attached.
            </p>
            <p>
              Alongside it, an internal inventory intelligence agent answers ops and support team questions
              about stock levels, incoming POs, and substitutions in seconds. The data came from the systems
              they already had. We made it conversational.
            </p>
            <p>
              And we built an automated supplier communication system: PO confirmations, ETA chasers, shortage
              alerts, and a clean daily summary so the founder sees the operating picture without opening five
              tabs.
            </p>

            <blockquote>
              For the first time in a year, I can see what’s actually happening in the business in real time.
              The team is back to running operations, not chasing them.
              <cite>Illustrative scenario · The kind of feedback we hear from a mid-market ecommerce founder</cite>
            </blockquote>

            <h2>03 · What changed. Shorter handle times, real-time visibility, reclaimed evenings.</h2>
            <p>
              Customer service handle time dropped meaningfully. The same team closed more tickets in the same
              day, with consistent quality, because the drafting work was no longer the bottleneck.
            </p>
            <p>
              The ops team stopped working into the evening to chase suppliers and reconcile inventory. The
              founder opened one dashboard each morning and knew exactly where the business stood, instead of
              pinging four people across Slack.
            </p>
            <p>
              These outcomes vary. They’re not a guarantee. They’re the patterns we see in mid-market ecommerce
              operations when the systems get built properly, integrated into the tools the team already uses,
              and adopted because they’re easier than the old way.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
