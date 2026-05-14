import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_shared/Navbar";
import { Footer } from "./_shared/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://maxera.ai"),
  title: {
    default: "Maxera · Stop reading about AI. Start putting it to work.",
    template: "%s · Maxera",
  },
  description:
    "Maxera is an AI Transformation Partner for US businesses. We figure out where AI actually fits in your business, then we build it, deploy it, and train your team to use it.",
  openGraph: {
    title: "Maxera · Stop reading about AI. Start putting it to work.",
    description:
      "An AI Transformation Partner for US businesses. We figure it out, build it, and train your team to use it.",
    type: "website",
    siteName: "Maxera",
    images: [
      {
        url: "/img/og-card.jpg",
        width: 2048,
        height: 1152,
        alt: "Maxera · Stop reading about AI. Start putting it to work.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxera · Stop reading about AI. Start putting it to work.",
    description:
      "An AI Transformation Partner for US businesses. We figure it out, build it, and train your team to use it.",
    images: ["/img/og-card.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ink-50 grain-canvas">
        <Navbar />
        <main className="relative z-[1] flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
