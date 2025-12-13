import { Suspense } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import RedirectHandler from "@/components/RedirectHandler";

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <RedirectHandler />
      </Suspense>
      <div className="pt-24">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        {/* <Certifications /> */}
        <Contact />
      </div>
    </>
  );
}
