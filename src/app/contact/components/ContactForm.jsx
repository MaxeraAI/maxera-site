"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { Container } from "../../_shared/ui";

const ROLES = [
  "Owner / Founder",
  "Operator",
  "Office / Practice manager",
  "Marketing lead",
  "Just curious",
  "Other",
];

const TIMELINES = ["This month", "This quarter", "Just exploring"];

export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      company: fd.get("company") || "",
      industry: fd.get("industry") || "",
      role: fd.get("role") || "",
      timeline: fd.get("timeline") || "",
      message: fd.get("message") || "",
      website: fd.get("website") || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Could not send. Please email us directly.");
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message || "Could not send. Please email us directly.");
      setStatus("error");
    }
  }

  const submitted = status === "success";
  const submitting = status === "submitting";

  return (
    <section className="relative pt-12 pb-24 sm:pb-32 lg:pb-40">
      <Container>
        <div className="grid grid-cols-1 gap-16 border-t border-ink-50/15 pt-16 lg:grid-cols-12 lg:gap-20">
          {/* Aside */}
          <aside className="lg:col-span-4">
            <p className="label-mono text-saffron">Direct</p>
            <a
              href="mailto:maxera.ai@gmail.com"
              className="link-underline mt-4 inline-block font-display text-3xl tracking-tight text-ink-50 sm:text-4xl"
            >
              maxera.ai@gmail.com
            </a>

            <dl className="mt-12 space-y-8 border-t border-ink-50/10 pt-10">
              <div>
                <dt className="label-mono text-ink-300">Phone</dt>
                <dd className="mt-2">
                  <a
                    href="tel:+17867676376"
                    className="font-display text-xl tracking-tight text-ink-50 transition-colors hover:text-saffron sm:text-[1.375rem]"
                  >
                    (786) 767-6376
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label-mono text-ink-300">Based in</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink-100">Miami, Florida · United States</dd>
              </div>
              <div>
                <dt className="label-mono text-ink-300">The first call</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink-100">
                  Free · No pitch deck · No pressure.
                </dd>
              </div>
              <div>
                <dt className="label-mono text-ink-300">Response</dt>
                <dd className="mt-2 text-[0.9375rem] text-ink-100">
                  Within one business day. Always from a person.
                </dd>
              </div>
            </dl>
          </aside>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hairline rounded-sm bg-ink-900/40 p-8 backdrop-blur-md sm:p-10 lg:col-span-8 lg:p-14"
          >
            {submitted ? (
              <Submitted />
            ) : (
              <>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />
                <p className="label-mono text-saffron">Tell us about your business</p>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Name" id="name" required />
                  <Field label="Work email" id="email" type="email" required />
                  <Field label="Business name" id="company" required />
                  <Field label="Industry" id="industry" placeholder="e.g. home services, agency, ecommerce" />
                </div>

                <div className="mt-10">
                  <p className="label-mono text-ink-300">Your role</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ROLES.map((r) => (
                      <Pill key={r} name="role" value={r}>
                        {r}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <p className="label-mono text-ink-300">Timeline</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {TIMELINES.map((t) => (
                      <Pill key={t} name="timeline" value={t}>
                        {t}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <label htmlFor="message" className="label-mono text-ink-300">
                    What's the most expensive piece of work in your business right now?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="The thing your team complains about. The thing you'd hire someone for if you could find one. The thing you're tired of doing manually. We'll figure out if AI can handle it."
                    className="mt-3 block w-full resize-y rounded-sm border border-ink-50/15 bg-transparent px-4 py-4 text-[0.9375rem] text-ink-50 placeholder:text-ink-300 transition-colors focus:border-saffron/60 focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="mt-8 rounded-sm border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink-50/10 pt-6">
                  <p className="text-xs text-ink-300">
                    By sending you agree to our{" "}
                    <a href="/privacy" className="text-ink-100 underline-offset-4 hover:underline">
                      privacy notice
                    </a>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group/send inline-flex h-12 items-center gap-2.5 rounded-full bg-saffron px-7 text-[0.9375rem] font-medium text-ink shadow-[0_0_0_1px_rgba(245,197,24,0.4),0_8px_30px_-8px_rgba(245,197,24,0.5)] transition-all hover:bg-saffron-400 hover:shadow-[0_0_0_1px_rgba(245,197,24,0.6),0_12px_40px_-8px_rgba(245,197,24,0.7)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-saffron disabled:hover:shadow-[0_0_0_1px_rgba(245,197,24,0.4),0_8px_30px_-8px_rgba(245,197,24,0.5)]"
                  >
                    {submitting ? "Sending…" : "Send and book the call"}
                    {!submitting && (
                      <RxArrowTopRight className="size-4 transition-transform duration-300 group-hover/send:-translate-y-0.5 group-hover/send:translate-x-0.5" />
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, id, type = "text", required, placeholder }) {
  return (
    <label htmlFor={id} className="block">
      <span className="label-mono text-ink-300">
        {label}
        {required && <span className="text-saffron"> *</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 block h-12 w-full rounded-sm border border-ink-50/15 bg-transparent px-4 text-[0.9375rem] text-ink-50 placeholder:text-ink-300 transition-colors focus:border-saffron/60 focus:outline-none"
      />
    </label>
  );
}

function Pill({ name, value, children }) {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="radio" name={name} value={value} className="peer sr-only" />
      <span className="rounded-full border border-ink-50/15 bg-transparent px-4 py-2 text-sm text-ink-100 transition-all hover:border-saffron/50 hover:text-saffron peer-checked:border-saffron peer-checked:bg-saffron peer-checked:text-ink">
        {children}
      </span>
    </label>
  );
}

function Submitted() {
  return (
    <div className="py-10 text-center">
      <p className="label-mono text-saffron">Sent</p>
      <h3 className="heading-3 mt-6 text-3xl text-ink-50 sm:text-4xl md:text-5xl">
        Thanks. You'll hear from us within one business day.
      </h3>
      <p className="body-lead mt-6 mx-auto max-w-md text-ink-200">
        We will reply within one business day with a time to talk. If the work isn't right for us we will tell you that too, and try to point you somewhere that fits.
      </p>
    </div>
  );
}
