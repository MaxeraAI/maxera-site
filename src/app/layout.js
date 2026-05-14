import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_shared/Navbar";
import { Footer } from "./_shared/Footer";
import { SITE_URL } from "./_data/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Maxera · Stop reading about AI. Start putting it to work.",
    template: "%s · Maxera",
  },
  description:
    "Maxera is an AI Transformation Partner for US businesses. We figure out where AI actually fits in your business, then we build it, deploy it, and train your team to use it.",
  openGraph: {
    title: "Maxera · Stop reading about AI. Start putting it to work.",
    description:
      "An AI Transformation Partner for US businesses. We figure out where AI fits in your business, then we build it, deploy it, and train your team to use it.",
    type: "website",
    siteName: "Maxera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxera · Stop reading about AI. Start putting it to work.",
    description:
      "An AI Transformation Partner for US businesses. We figure out where AI fits in your business, then we build it, deploy it, and train your team to use it.",
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
