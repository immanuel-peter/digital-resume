import { Suspense } from "react";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HomeChrome from "@/components/HomeChrome";
import ImmanuelAI from "@/components/ImmanuelAI";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import RedirectHandler from "@/components/RedirectHandler";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { instrumentSans } from "./fonts";

export const revalidate = 3600;

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <RedirectHandler />
      </Suspense>
      <Suspense fallback={null}>
        <ImmanuelAI />
      </Suspense>
      <div className={`mn ${instrumentSans.variable} min-h-screen`}>
        <HomeChrome />
        <div className="mx-auto max-w-[1000px] px-[clamp(20px,5vw,48px)]">
          <SiteHeader />
          <About />
          <Projects />
          <Experience />
          <OpenSource />
          <Education />
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
