import { Suspense } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import RedirectHandler from "@/components/RedirectHandler";
import { getAllDatasetDownloadsAllTime } from "@/lib/huggingface";

export const dynamic = 'force-dynamic';

export default async function App() {
  const {
    multimodalDownloadsAllTime,
    imagesDownloadsAllTime,
    totalDownloadsAllTime,
  } = await getAllDatasetDownloadsAllTime();

  return (
    <>
      <Suspense fallback={null}>
        <RedirectHandler />
      </Suspense>
      <div className="pt-24">
        <About totalDownloadsAllTime={totalDownloadsAllTime} />
        <Skills />
        <Experience />
        <Projects
          datasetDownloads={{
            multimodal: multimodalDownloadsAllTime,
            images: imagesDownloadsAllTime,
          }}
        />
        <Education />
        {/* <Certifications /> */}
        <Contact />
      </div>
    </>
  );
}
