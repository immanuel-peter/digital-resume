import type { ReactNode } from "react";

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-0.5 border-t border-[#e8e8e5] py-[15px]">
      <dt className="mn-label w-[150px] shrink-0">{label}</dt>
      <dd className="m-0 min-w-0 flex-[1_1_360px]">{children}</dd>
    </div>
  );
}

const About = () => (
  <div className="pt-[104px]">
    <h1 className="max-w-[900px] text-[clamp(40px,5.4vw,76px)] leading-[1.04] font-medium tracking-[-0.035em]">
      I work on multimodal and physical AI.
    </h1>
    <dl className="mt-[72px] max-w-[820px] border-b border-[#e8e8e5]">
      <Fact label="Work">MTS Intern at Tensormesh</Fact>
      <Fact label="Study">CS, Physics, &amp; Math at UChicago</Fact>
      <Fact label="Interests">Vision, Multimodal, World Models, Physical AI</Fact>
      <Fact label="Current">
        <a href="#vtb" className="mn-link">
          Vision Tower Bench
        </a>
      </Fact>
      <Fact label="Hugging Face">
        <a
          href="https://huggingface.co/immanuelpeter"
          target="_blank"
          rel="noopener noreferrer"
          className="mn-link"
        >
          Over 22,000 downloads
        </a>{" "}
        <span className="text-[#74746f]">across datasets and models</span>
      </Fact>
    </dl>
  </div>
);

export default About;
