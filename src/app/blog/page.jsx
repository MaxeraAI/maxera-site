import { BlogHero } from "./components/BlogHero";
import { BlogIndex } from "./components/BlogIndex";

export const metadata = {
  title: "Field notes",
  description:
    "Plain-language writing on AI for owners and operators of US businesses. No buzzwords, no AI-week recaps.",
};

export default function Page() {
  return (
    <>
      <BlogHero />
      <BlogIndex />
    </>
  );
}
