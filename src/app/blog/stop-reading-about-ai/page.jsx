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
      <BlogPostCTA currentSlug="/blog/stop-reading-about-ai" />
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
            <Eyebrow>Strategy</Eyebrow>
            <span className="size-1 rounded-full bg-ink-300" />
            <span className="label-mono text-ink-300">6 min read</span>
            <span className="size-1 rounded-full bg-ink-300" />
            <span className="label-mono text-ink-300">May 02, 2026</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="heading-1 mt-10 max-w-5xl text-[2.75rem] text-ink-50 sm:text-[3.75rem] md:text-[4.75rem] lg:text-[5.5rem]"
        >
          Stop reading about AI.{" "}
          <span
            className="italic text-saffron"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
          >
            Start putting it to work.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="body-lead mt-10 max-w-3xl text-lg text-ink-100 md:text-xl"
        >
          Most owners we talk to have read every AI thread on LinkedIn, watched every YouTube tutorial, and tried
          ChatGPT at least once. They are more confused than when they started. Here’s a simpler way to think
          about it.
        </motion.p>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink-50/15 pt-8 text-[0.9375rem] text-ink-200">
          <span className="label-mono text-ink-300">Filed under</span>
          <span>Strategy</span>
          <span className="size-1 rounded-full bg-ink-300" />
          <span>For owners</span>
          <span className="size-1 rounded-full bg-ink-300" />
          <span>Plain language</span>
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
              You’ve seen the headlines. You’ve tried ChatGPT. You know AI is going to change your business.
              But every consultant wants a strategy deck, every YouTube tutorial leaves you more confused than
              before, and the AI tools you’ve tested are still sitting unused.
            </p>

            <h2>The reading-about-AI loop.</h2>
            <p>
              Most owners we meet have done the reading. They’ve watched the videos. They follow a few of the
              AI accounts on LinkedIn. They have ChatGPT bookmarked, and they’ve maybe asked it to write a few
              emails. None of it has changed how their business actually runs.
            </p>
            <p>
              The reading isn’t the problem. The reading is fine. The problem is that there’s no obvious next
              step from "I read about AI" to "AI does something useful in my business this week." That step
              gets skipped, and so the reading becomes the activity instead of a precursor to one.
            </p>

            <h2>What’s slowing your business down right now?</h2>
            <p>
              That’s the actual starting point. Not "what is AI good for", but "what’s the thing on my desk,
              this week, that’s eating my team’s time?" Missed-call follow-up. Appointment reminders. Proposal
              writing. Client reporting. Lead qualification at 9pm. The list is shorter than people expect, and
              it’s almost always one of three or four things.
            </p>
            <p>
              Once you have that list, the AI question becomes much simpler. Not "what could AI do" but "could
              AI do this specific thing well enough that we’d actually use it?" Often yes. Sometimes no. Either
              answer is useful.
            </p>

            <blockquote>
              You don’t need an AI strategy. You need one workflow that AI quietly handles by next month.
            </blockquote>

            <h2>The build-it problem.</h2>
            <p>
              The other reason "putting AI to work" stays theoretical is that almost nobody on the AI-content
              side of the internet actually builds anything. Threads, screenshots, prompt collections. Those
              are the deliverables. Showing up Monday morning with a deployed system that handles your phone
              calls is a different kind of work, and it’s the kind nobody wants to talk about because it’s
              less viral.
            </p>
            <p>
              When we talk about being an AI Transformation Partner, this is what we mean. We figure out the
              one or two workflows that matter, we build them, we deploy them on top of the tools you already
              run, and we train your team so they actually use what we built. That’s the whole job.
            </p>

            <h2>What to do tomorrow.</h2>
            <p>
              Pick the most expensive piece of admin work in your business this week. The thing your team
              keeps complaining about, or the thing you’d hire another person for if you could find one. Write
              it down in one sentence. That’s the starting point of any conversation about AI we’d have with
              you. Not "what does AI do." But "what does this specific thing look like with AI doing it
              instead of you."
            </p>
            <p>
              If you want a second pair of eyes on what that one thing should be, that’s literally what the
              free fit call is for.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
