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
        currentSlug="/blog/home-services-scenario"
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
            <span className="label-mono text-ink-300">May 13, 2026</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="heading-1 mt-10 max-w-5xl text-[2.5rem] text-ink-50 sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem]"
        >
          How a home services company stopped losing{" "}
          <span
            className="italic text-saffron"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
          >
            after-hours jobs to the competition.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="body-lead mt-10 max-w-3xl text-lg text-ink-100 md:text-xl"
        >
          An illustrative Maxera scenario: what happens when the phones get answered but the website forms and after-hours leads sit cold until morning, and how a 60-second AI lead response system flipped the booked-job rate.
        </motion.p>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink-50/15 pt-8 text-[0.9375rem] text-ink-200">
          <span className="label-mono text-ink-300">Filed under</span>
          <span>Scenarios</span>
          <span className="size-1 rounded-full bg-ink-300" />
          <span>For operators</span>
          <span className="size-1 rounded-full bg-ink-300" />
          <span>Home services</span>
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
              This is an illustrative scenario based on patterns we see repeatedly in home services operations,
              not a single named client. The specifics are realistic. The exact numbers in any real engagement
              depend on the business.
            </p>

            <h2>01 · The problem. Leads leaking after hours.</h2>
            <p>
              The phones got answered. The website forms didn't. Submissions sat for hours before anyone got back
              to them, and at night or on weekends, leads went straight to the next morning. By then, the homeowner
              had already booked with the first company that called back.
            </p>
            <p>
              It wasn't a sales problem. It was a response-time problem. The team was good on the phone when they
              were on the phone. The gap was every hour they weren't, which on most weeks added up to more hours
              than they were.
            </p>

            <h2>02 · What we built. A 60-second AI lead response system, 24/7.</h2>
            <p>
              We built an AI lead response system that hits every new lead within sixty seconds of submission, by
              text and by call, around the clock. New form on the website, missed call on the line, online quote
              request. All of it goes into the same flow.
            </p>
            <p>
              The agent qualifies the lead, gets the basics (job type, timing, address), books a same-day or
              next-day visit straight into the schedule, and routes the rest to whoever owns inbound at the
              company. Wired directly into the CRM and dispatch tool the team already used. No new dashboard for
              the team to learn.
            </p>
            <p>
              Edge cases (escalations, callbacks the AI couldn't handle, anything weird) get escalated to a
              human with full context attached. The team is doing real work, not babysitting the inbox.
            </p>

            <blockquote>
              The competitor who used to win every after-hours job started losing them.
              <cite>Illustrative scenario · The kind of feedback we hear from a home services owner</cite>
            </blockquote>

            <h2>03 · What changed. Booked job rate up, after-hours leads no longer lost.</h2>
            <p>
              The booked-job rate from inbound leads moved up meaningfully. The kind of lift you'd expect when a
              response that used to take two hours now takes sixty seconds, and when leads that used to die
              overnight get a same-day reply. Same leads, same team, different operating speed.
            </p>
            <p>
              The competitor who used to win every after-hours job started losing them. Not because the team got
              bigger or pricing changed, but because the homeowner who submitted a form at 8pm now had a booking
              confirmation in their inbox by 8:01.
            </p>
            <p>
              These outcomes vary. They're not a guarantee. They're the patterns we see in home services
              operations when the response time becomes the product, and when AI handles the part of the funnel
              that no human team can cover at 11pm on a Saturday.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
