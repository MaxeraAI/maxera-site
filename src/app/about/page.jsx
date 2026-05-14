import { AboutHero } from "./components/AboutHero";
import { Manifesto } from "./components/Manifesto";
import { Principles } from "./components/Principles";
import { Capabilities } from "./components/Capabilities";
import { CTAStrip } from "./components/CTAStrip";
import { StackSlide } from "../_shared/ui";

export const metadata = {
  title: "About",
  description:
    "Maxera is an AI Transformation Partner for US businesses. We figure out what's worth building, then we build it, deploy it, and train your team to use it.",
};

export default function Page() {
  return (
    <>
      <AboutHero />
      <div className="relative">
        <StackSlide z={1}><Manifesto /></StackSlide>
        <StackSlide z={2}><Principles /></StackSlide>
        <StackSlide z={3}><Capabilities /></StackSlide>
      </div>
      <CTAStrip />
    </>
  );
}
