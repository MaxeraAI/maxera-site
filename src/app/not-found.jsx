import Link from "next/link";
import { Container, Eyebrow, Button, TopographyBackground } from "./_shared/ui";

export const metadata = {
  title: "Page not found",
  description: "The page you’re looking for doesn’t exist on maxera.ai.",
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 lg:pt-48 lg:pb-32">
      <TopographyBackground />
      <Container className="relative">
        <Eyebrow>404</Eyebrow>
        <h1
          className="heading-1 mt-10 max-w-4xl text-5xl text-ink-50 sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          We couldn’t find that page.{" "}
          <span
            className="italic text-saffron"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
          >
            Let’s get you back on track.
          </span>
        </h1>
        <p className="body-lead mt-10 max-w-2xl text-lg text-ink-100 md:text-xl">
          The link may be old, the page may have moved, or it might never have existed. Try one of the routes below or reach out if you were looking for something specific.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button href="/" size="lg" variant="primary" showArrow>
            Back to home
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Get in touch
          </Button>
        </div>
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 label-mono text-ink-300">
          <Link href="/about" className="hover:text-saffron">About</Link>
          <Link href="/blog" className="hover:text-saffron">Field notes</Link>
          <Link href="/contact" className="hover:text-saffron">Contact</Link>
        </div>
      </Container>
    </section>
  );
}
