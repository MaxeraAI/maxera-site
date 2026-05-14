"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Container, MaxeraWordmark, clsx } from "./ui";

const COLS = [
  {
    title: "Maxera",
    links: [
      { label: "About", href: "/about" },
      { label: "Field notes", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "maxera.ai@gmail.com", href: "mailto:maxera.ai@gmail.com" },
      { label: "(786) 767-6376", href: "tel:+17867676376" },
      { label: "Get in touch →", href: "/contact" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const distanceFromBottom = doc.scrollHeight - window.scrollY - window.innerHeight;
      setAtBottom(distanceFromBottom < 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <footer className="relative z-[2] mt-24 border-t border-ink-50/10 bg-ink pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <div className="flex flex-col gap-y-14 lg:flex-row lg:items-start lg:gap-x-12">
          <div className="lg:flex-none">
            <Link
              href="/"
              aria-label="Maxera home"
              className="group/logo inline-flex items-center text-ink-50 transition-colors hover:text-saffron"
            >
              <MaxeraWordmark className="h-6 sm:h-7" />
            </Link>
            <p className="mt-8 max-w-xs text-[0.9375rem] text-ink-100">
              AI Transformation Partner for US businesses.
            </p>
            <p className="mt-4 label-mono text-ink-300">Miami, Florida · United States</p>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="lg:flex-none">
              <h4 className="label-mono text-ink-300">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => {
                  const isExternal = l.href.startsWith("mailto:") || l.href.startsWith("http");
                  const cls =
                    "inline-flex items-center gap-2 text-[0.9375rem] text-ink-100 transition-colors hover:text-saffron";
                  return (
                    <li key={l.href}>
                      {isExternal ? (
                        <a href={l.href} className={cls}>{l.label}</a>
                      ) : (
                        <Link href={l.href} className={cls}>{l.label}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="lg:min-w-0 lg:flex-1">
            <h4 className="label-mono text-ink-300">Field notes</h4>
            <p className="mt-5 max-w-md text-[0.9375rem] text-ink-200">
              Plain-language writing for owners and operators. What’s worth building, what’s hype, what we keep seeing.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!email || status === "submitting") return;
                setStatus("submitting");
                try {
                  const res = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, website: "" }),
                  });
                  if (!res.ok) throw new Error();
                  setStatus("ok");
                  setEmail("");
                } catch {
                  setStatus("error");
                }
              }}
              noValidate
              className="mt-6 flex w-full max-w-md items-center gap-0 rounded-full border border-ink-50/15 bg-ink-900/50 px-1 py-1 backdrop-blur-sm transition-colors focus-within:border-saffron/60"
            >
              <input
                id="newsletter"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                required
                disabled={status === "submitting" || status === "ok"}
                placeholder="you@company.com"
                className="h-11 flex-1 bg-transparent px-5 text-[0.9375rem] text-ink-50 placeholder:text-ink-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "submitting" || status === "ok"}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-saffron px-5 text-sm font-medium text-ink transition-all hover:bg-saffron-400 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-saffron"
              >
                {status === "submitting" ? "Sending…" : status === "ok" ? "Subscribed" : "Subscribe"}
                {status === "idle" && <RxArrowTopRight className="size-3.5" />}
              </button>
            </form>
            {status === "error" && (
              <p className="mt-3 text-xs text-red-300" role="alert">
                Couldn’t sign you up just now. Please try again or email us directly.
              </p>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink-50/10 pt-8 label-mono text-ink-300">
          <span>© {new Date().getFullYear()} Maxera LLC</span>
          <span className="hidden h-px w-4 bg-ink-300/50 sm:inline-block" />
          <Link href="/privacy" className="hover:text-ink-50">Privacy</Link>
          <Link href="/terms" className="hover:text-ink-50">Terms</Link>
        </div>
      </Container>

      <Wordmark atBottom={atBottom} />
    </footer>
  );
}

function Wordmark({ atBottom }) {
  return (
    <div
      aria-hidden
      className={clsx(
        "relative mt-6 -mb-1 select-none overflow-hidden px-2 transition-colors duration-700",
        "hover:text-saffron/[0.10]",
        atBottom ? "text-saffron/[0.10]" : "text-ink-50/[0.04]"
      )}
    >
      <MaxeraWordmark className="block w-full" />
    </div>
  );
}
