import { Suspense } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
// import Contact from "@/components/Contact";
import RedirectHandler from "@/components/RedirectHandler";
import ImmanuelAI from "@/components/ImmanuelAI";
import { getAllDatasetDownloadsAllTime } from "@/lib/huggingface";

export const dynamic = 'force-dynamic';

export default async function App() {
  const {
    totalDownloadsAllTime,
  } = await getAllDatasetDownloadsAllTime();

  return (
    <>
      <Suspense fallback={null}>
        <RedirectHandler />
      </Suspense>
      <Suspense fallback={null}>
        <ImmanuelAI />
      </Suspense>
      <div className="pt-24">
        <About totalDownloadsAllTime={totalDownloadsAllTime} />
        <Experience />
        <Projects />
        <Education />
        {/* <Certifications /> */}
        {/* <Contact /> */}
      </div>
    </>
  );
}
