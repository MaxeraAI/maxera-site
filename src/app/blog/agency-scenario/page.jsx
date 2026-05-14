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
        currentSlug="/blog/agency-scenario"
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
            <span className="label-mono text-ink-300">6 min read</span>
            <span className="size-1 rounded-full bg-ink-300" />
            <span className="label-mono text-ink-300">May 11, 2026</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="heading-1 mt-10 max-w-5xl text-[2.5rem] text-ink-50 sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem]"
        >
          How an agency reclaimed a{" "}
          <span
            className="italic text-saffron"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
          >
            full senior week per month with AI.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="body-lead mt-10 max-w-3xl text-lg text-ink-100 md:text-xl"
        >
          An illustrative Maxera scenario: how a custom AI workflow stack pulled twenty-eight hours a week of senior team time out of repetitive client admin, freeing the team for strategy instead of status emails.
        </motion.p>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink-50/15 pt-8 text-[0.9375rem] text-ink-200">
          <span className="label-mono text-ink-300">Filed under</span>
          <span>Scenarios</span>
          <span className="size-1 rounded-full bg-ink-300" />
          <span>For operators</span>
          <span className="size-1 rounded-full bg-ink-300" />
          <span>Agency</span>
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
              This is an illustrative scenario based on patterns we see repeatedly in mid-size agencies, not a
              single named client. The specifics are realistic. The exact numbers in any real engagement depend
              on the business.
            </p>

            <h2>01 · The problem. Senior people doing junior work.</h2>
            <p>
              The senior team was buried in client work that didn't need humans. Reporting. Proposal drafting.
              Intake forms. Status updates. The same five email templates rewritten for every client every
              Friday. Strategists were doing admin. Senior people were doing junior work. Junior people were
              doing nothing because there was nothing left to delegate.
            </p>
            <p>
              It wasn't a capacity problem in the traditional sense. The hours were there. The problem was that
              the wrong people were spending them, and the work that mattered (strategy, creative direction,
              client relationships) kept getting pushed to the end of the week and out the door.
            </p>

            <h2>02 · What we built. A custom workflow stack on the tools they already used.</h2>
            <p>
              We built a custom AI workflow stack tied directly into the tools the agency already ran on:
              project management, the CRM, Google Drive, the analytics platforms, the time tracker, the
              proposal builder. Nothing new to learn. The team kept working in the same tools.
            </p>
            <p>
              The stack drafts weekly client reports from live campaign data. It pulls intake responses into
              structured briefs. It writes first-pass proposals against the client's history, scope, and the
              agency's pricing logic. It generates status emails the senior team reviews and sends, instead of
              writing from scratch.
            </p>
            <p>
              Every output goes through a human. The point isn't to remove the senior team from the work. The
              point is to remove them from the parts of the work that didn't need them in the first place.
            </p>

            <blockquote>
              We hired strategists. They were spending half their week writing status emails. That's not why
              they're here.
              <cite>Illustrative scenario · The kind of feedback we hear from an agency partner</cite>
            </blockquote>

            <h2>03 · What changed. Twenty-eight hours a week, back where they belong.</h2>
            <p>
              The senior team reclaimed roughly twenty-eight hours a week, close to a full week a month per
              person, and put it back into strategy, creative work, and the client conversations that
              actually grow accounts. The work that ships didn't change. The work the senior team did on the
              way to shipping it did.
            </p>
            <p>
              Turnaround on every deliverable got faster, because the bottleneck was never the strategy. The
              bottleneck was the admin between strategy and delivery. With that out of the way, things move.
            </p>
            <p>
              These outcomes vary. They're not a guarantee. They're the patterns we see in agencies when AI
              gets built around the work the team actually does, integrated into the tools they already use,
              and adopted because it's easier than the old way.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
