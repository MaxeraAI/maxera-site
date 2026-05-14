import Link from "next/link";
import { Container, Eyebrow } from "../_shared/ui";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of maxera.ai and the relationship between Maxera LLC and visitors to the site.",
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
            Terms of Service
          </h1>
          <p className="body-lead mt-10 max-w-3xl text-lg text-ink-100 md:text-xl">
            The terms that govern your use of the Maxera website. Effective {EFFECTIVE_DATE}.
          </p>
        </Container>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-32">
        <Container>
          <article className="mx-auto max-w-2xl">
            <div className="post-prose">
              <h2>1. Acceptance of these Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legal agreement between you and Maxera LLC
                ("Maxera," "we," "us," "our"). By accessing or using maxera.ai (the "Site") or any of our
                services, you agree to be bound by these Terms and our{" "}
                <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do not use the Site.
              </p>

              <h2>2. About the Site and our services</h2>
              <p>
                The Site is an informational website describing Maxera's AI transformation services for
                United States businesses. Engagement of any professional services is governed by a separate
                written agreement between you and Maxera. Nothing on the Site constitutes a binding offer to
                provide services.
              </p>

              <h2>3. Intellectual property</h2>
              <p>
                All content on the Site, including text, graphics, logos, images, audio, video, design,
                code, and the selection and arrangement thereof, is owned by Maxera LLC or its licensors
                and is protected by United States and international intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable, revocable license to access and
                view the Site for your personal or internal business evaluation. You may not copy, reproduce,
                modify, distribute, publish, transmit, or create derivative works from any content on the
                Site without our prior written consent, except as expressly permitted under applicable law
                (for example, fair use).
              </p>

              <h2>4. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>use the Site for any unlawful purpose or in violation of these Terms;</li>
                <li>
                  attempt to gain unauthorized access to any portion of the Site, any account, computer
                  system, or network;
                </li>
                <li>interfere with or disrupt the operation of the Site or the servers or networks used to operate it;</li>
                <li>
                  use any robot, spider, scraper, or other automated means to access the Site, except for
                  publicly available search engine indexing in accordance with our robots.txt;
                </li>
                <li>upload or transmit any content that is unlawful, defamatory, harassing, or infringing;</li>
                <li>misrepresent your identity or affiliation with any person or organization.</li>
              </ul>

              <h2>5. Information you submit</h2>
              <p>
                When you submit information through the contact form, newsletter signup, or other channels,
                you represent that the information is accurate and that you have the right to provide it.
                We handle that information in accordance with our{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>
              <p>
                Unsolicited ideas, suggestions, or proposals you send to us are not subject to any
                confidentiality obligation, and we may use or implement them without compensation or
                attribution. Do not send us anything you wish to keep confidential or proprietary outside
                of a signed engagement.
              </p>

              <h2>6. Disclaimers</h2>
              <p>
                THE SITE AND ALL CONTENT, MATERIALS, AND INFORMATION PROVIDED THROUGH IT ARE PROVIDED "AS
                IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE
                FULLEST EXTENT PERMITTED BY APPLICABLE LAW, MAXERA DISCLAIMS ALL WARRANTIES, INCLUDING BUT
                NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Site will be uninterrupted, error-free, secure, or free of
                viruses or other harmful components. Any reliance on Site content is at your own risk.
                Scenarios and outcomes described on the Site are illustrative; results in any actual
                engagement depend on the specific business and circumstances.
              </p>

              <h2>7. Limitation of liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL MAXERA, ITS OFFICERS,
                MEMBERS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS,
                LOST DATA, LOSS OF GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATING TO YOUR
                USE OF OR INABILITY TO USE THE SITE, EVEN IF MAXERA HAS BEEN ADVISED OF THE POSSIBILITY OF
                SUCH DAMAGES.
              </p>
              <p>
                MAXERA'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THE SITE (AS DISTINCT
                FROM ANY SEPARATE SIGNED SERVICES AGREEMENT) WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS
                ($100). SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO
                THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU IN FULL.
              </p>

              <h2>8. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Maxera and its officers, members,
                employees, agents, and affiliates from and against any claims, liabilities, damages,
                losses, and expenses (including reasonable attorneys' fees) arising out of or related to
                your breach of these Terms or your misuse of the Site.
              </p>

              <h2>9. Third-party links</h2>
              <p>
                The Site may contain links to third-party websites. We do not control or endorse those
                sites and are not responsible for their content, terms, or privacy practices. Accessing
                third-party sites is at your own risk.
              </p>

              <h2>10. Modifications to the Site or these Terms</h2>
              <p>
                We may modify, suspend, or discontinue the Site or any portion of it at any time without
                notice. We may also update these Terms from time to time. When we do, we will revise the
                "Effective" date above. Your continued use of the Site after the revised Terms take effect
                constitutes acceptance of the changes.
              </p>

              <h2>11. Governing law and venue</h2>
              <p>
                These Terms and any dispute arising out of or relating to them or the Site will be governed
                by the laws of the State of Florida and the federal laws of the United States, without
                regard to conflict-of-laws principles. The exclusive jurisdiction and venue for any
                proceeding arising out of or relating to these Terms or the Site will be the state and
                federal courts located in Miami-Dade County, Florida, and you consent to personal
                jurisdiction in those courts.
              </p>

              <h2>12. Severability and waiver</h2>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable, that provision will
                be enforced to the maximum extent permissible and the remaining provisions will remain in
                full force and effect. No waiver of any provision will be deemed a further or continuing
                waiver of that or any other provision.
              </p>

              <h2>13. Entire agreement</h2>
              <p>
                These Terms, together with our <Link href="/privacy">Privacy Policy</Link> and any separate
                written services agreement between you and Maxera, constitute the entire agreement between
                you and Maxera regarding the Site and supersede all prior agreements or understandings.
              </p>

              <h2>14. Contact us</h2>
              <p>
                Questions about these Terms should be sent to:
              </p>
              <p>
                Maxera LLC<br />
                Miami, Florida, United States<br />
                Email: <a href="mailto:maxera.ai@gmail.com">maxera.ai@gmail.com</a><br />
                Phone: <a href="tel:+17867676376">(786) 767-6376</a>
              </p>

              <p className="mt-12">
                <Link href="/">Return to home</Link> · <Link href="/privacy">Read our Privacy Policy</Link>
              </p>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
