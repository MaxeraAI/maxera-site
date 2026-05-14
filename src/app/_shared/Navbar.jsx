"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button, MaxeraWordmark, clsx } from "./ui";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Field notes", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-ink/85 backdrop-blur-xl hairline-b"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[88rem] items-center justify-between px-6 sm:h-[4.5rem] sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Maxera home"
          className="group/logo inline-flex items-center text-ink-50 transition-colors hover:text-saffron"
          onClick={() => setOpen(false)}
        >
          <MaxeraWordmark className="h-6 sm:h-7" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline px-4 py-2 text-[0.9375rem] text-ink-100 transition-colors hover:text-ink-50"
            >
              {l.label}
            </Link>
          ))}
          <Button
            href="/contact"
            size="sm"
            variant="primary"
            showArrow
            className="ml-4"
          >
            Get in touch
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative -mr-2 flex size-12 flex-col items-center justify-center text-ink-50 lg:hidden"
        >
          <motion.span
            className="my-[3px] block h-px w-6 bg-current"
            animate={open ? "open" : "closed"}
            variants={{
              open: { translateY: 4, rotate: 45, transition: { duration: 0.3 } },
              closed: { translateY: 0, rotate: 0, transition: { duration: 0.3 } },
            }}
          />
          <motion.span
            className="my-[3px] block h-px w-6 bg-current"
            animate={open ? "open" : "closed"}
            variants={{
              open: { translateY: -4, rotate: -45, transition: { duration: 0.3 } },
              closed: { translateY: 0, rotate: 0, transition: { duration: 0.3 } },
            }}
          />
        </button>
      </div>
    </header>

    <AnimatePresence>
      {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 bottom-0 z-[99] overflow-hidden bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
              className="flex h-full flex-col px-6 pt-10 sm:px-8"
            >
              {NAV_LINKS.map((l) => (
                <motion.div
                  key={l.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 8 },
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink-50/10 py-5 font-display text-4xl tracking-tight text-ink-50 transition-colors hover:text-saffron"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 8 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <Button
                  href="/contact"
                  size="lg"
                  variant="primary"
                  showArrow
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  Get in touch
                </Button>
                <p className="label-mono mt-8 text-ink-300">
                  maxera.ai@gmail.com
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
    </AnimatePresence>
    </>
  );
}

