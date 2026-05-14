import Link from "next/link";
import { Container, Eyebrow } from "../_shared/ui";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Maxera LLC collects, uses, and protects your personal information when you visit maxera.ai or contact us.",
};

const EFFECTIVE_DATE = "May 13, 2026";

export default function Page() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 mesh-saffron -z-10" aria-hidden />
        <Container className="relative">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="heading-1 mt-10 max-w-5xl text-[2.5rem] text-ink-50 sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem]">
            Privacy Policy
          </h1>
          <p className="body-lead mt-10 max-w-3xl text-lg text-ink-100 md:text-xl">
            How Maxera LLC collects, uses, and protects information from people who visit our website or contact us. Effective {EFFECTIVE_DATE}.
          </p>
        </Container>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-32">
        <Container>
          <article className="mx-auto max-w-2xl">
            <div className="post-prose">
              <h2>1. Who we are</h2>
              <p>
                Maxera LLC ("Maxera," "we," "us," "our") is a Florida-based limited liability company that
                provides AI transformation services to United States businesses. This Privacy Policy describes
                how we handle personal information collected through our website at maxera.ai (the "Site") and
                in connection with our services.
              </p>

              <h2>2. Information we collect</h2>
              <p>
                <strong>Information you provide.</strong> When you fill out the contact form, subscribe to our
                newsletter, or otherwise communicate with us, we may collect your name, email address,
                business name, role, industry, project timeline, and the contents of your message.
              </p>
              <p>
                <strong>Information collected automatically.</strong> When you visit the Site, our servers and
                hosting providers may automatically record information such as your IP address, browser type
                and version, operating system, referring URL, pages viewed, and the date and time of your
                visit. This is standard server log data used for security, troubleshooting, and aggregate
                analytics.
              </p>
              <p>
                <strong>Cookies and similar technologies.</strong> The Site uses essential cookies required for
                core functionality. We do not currently use third-party advertising or behavioral tracking
                cookies. If this changes, we will update this Policy and, where required by law, present a
                cookie consent banner.
              </p>

              <h2>3. How we use information</h2>
              <p>We use the information described above to:</p>
              <ul>
                <li>respond to your inquiries and provide the services you request;</li>
                <li>send you our newsletter if you have subscribed (you may unsubscribe at any time);</li>
                <li>operate, maintain, secure, and improve the Site;</li>
                <li>comply with legal obligations and enforce our Terms of Service;</li>
                <li>defend against legal claims and prevent fraud or misuse.</li>
              </ul>

              <h2>4. How we share information</h2>
              <p>
                We do not sell your personal information. We share personal information only as described
                below:
              </p>
              <ul>
                <li>
                  <strong>Service providers.</strong> Trusted vendors who help us operate the business (for
                  example, hosting, email delivery, customer relationship tools) under contractual
                  confidentiality and data-protection obligations.
                </li>
                <li>
                  <strong>Legal compliance.</strong> When required by applicable law, subpoena, court order,
                  or other valid legal process, or to protect the rights, property, or safety of Maxera, our
                  clients, or others.
                </li>
                <li>
                  <strong>Business transfers.</strong> In connection with a merger, acquisition, financing,
                  reorganization, or sale of all or part of our business, subject to standard
                  confidentiality protections.
                </li>
              </ul>

              <h2>5. Data retention</h2>
              <p>
                We retain personal information for as long as reasonably necessary to fulfill the purposes
                described in this Policy, comply with our legal obligations, resolve disputes, and enforce
                our agreements.
              </p>

              <h2>6. Your privacy rights</h2>
              <p>
                Depending on where you live and applicable law, you may have the right to access, correct,
                delete, or receive a copy of the personal information we hold about you, and to object to
                or restrict certain processing.
              </p>
              <p>
                <strong>California residents (CCPA/CPRA).</strong> California residents have the right to
                know what categories of personal information we collect, the right to request deletion or
                correction, the right to opt out of the "sale" or "sharing" of personal information (we do
                neither), and the right not to be discriminated against for exercising these rights.
              </p>
              <p>
                <strong>Florida residents (Florida Digital Bill of Rights).</strong> If the Florida Digital
                Bill of Rights applies to us with respect to you, you have similar rights to access, correct,
                delete, and obtain a copy of your personal information, and to opt out of certain
                processing.
              </p>
              <p>
                <strong>Other US state residents.</strong> Residents of states with comprehensive privacy
                laws (including but not limited to Virginia, Colorado, Connecticut, Utah, Texas, Oregon, and
                others) may have similar rights under applicable state law.
              </p>
              <p>
                To exercise any of these rights, email{" "}
                <a href="mailto:maxera.ai@gmail.com">maxera.ai@gmail.com</a>. We will respond within the
                timeframes required by applicable law. We may need to verify your identity before fulfilling
                certain requests.
              </p>

              <h2>7. Data security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards designed to
                protect personal information. No method of transmission over the internet or method of
                electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2>8. Children’s privacy</h2>
              <p>
                The Site is not directed to children under thirteen (13), and we do not knowingly collect
                personal information from children under thirteen. If you believe a child under thirteen has
                provided us with personal information, contact us and we will take steps to delete it.
              </p>

              <h2>9. International users</h2>
              <p>
                The Site is operated from the United States and is intended for users located in the United
                States. If you access the Site from outside the United States, please understand that your
                information will be transferred to and processed in the United States, where data protection
                laws may differ from those in your jurisdiction.
              </p>

              <h2>10. Third-party links</h2>
              <p>
                The Site may contain links to third-party websites. We are not responsible for the privacy
                practices or content of those sites. Review the privacy policy of any third-party site
                before providing personal information.
              </p>

              <h2>11. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the
                "Effective" date at the top of this Policy. Material changes will be communicated through
                the Site or by other reasonable means.
              </p>

              <h2>12. Contact us</h2>
              <p>
                Questions, requests, or complaints about this Policy or our handling of your personal
                information should be sent to:
              </p>
              <p>
                Maxera LLC<br />
                Miami, Florida, United States<br />
                Email: <a href="mailto:maxera.ai@gmail.com">maxera.ai@gmail.com</a><br />
                Phone: <a href="tel:+17867676376">(786) 767-6376</a>
              </p>

              <p className="mt-12">
                <Link href="/">Return to home</Link> · <Link href="/terms">Read our Terms of Service</Link>
              </p>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
