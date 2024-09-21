import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}
