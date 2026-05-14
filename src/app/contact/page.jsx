import { ContactHero } from "./components/ContactHero";
import { ContactForm } from "./components/ContactForm";
import { ContactFAQ } from "./components/ContactFAQ";

export const metadata = {
  title: "Contact",
  description:
    "Book a free 15-minute fit call. We talk about your business, what’s slowing you down, and whether AI can actually help. No pitch deck. No pressure.",
};

export default function Page() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </>
  );
}
