import { Hero } from "./_home/Hero";
import { Problem } from "./_home/Problem";
import { Process } from "./_home/Process";
import { WaysToWork } from "./_home/WaysToWork";
import { WhyMaxera } from "./_home/WhyMaxera";
import { Cases } from "./_home/Cases";
import { GetStarted } from "./_home/GetStarted";
import { FAQ } from "./_home/FAQ";
import { Contact } from "./_home/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <Problem />
      <Process />
      <WaysToWork />
      <WhyMaxera />
      <Cases />
      <GetStarted />
      <FAQ />
      <Contact />
    </>
  );
}
