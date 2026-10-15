import Section from "./Section";

const Education = () => (
  <Section id="education" label="Education">
    <div className="flex items-baseline justify-between gap-3">
      <h3 className="text-xl leading-[1.2] font-semibold tracking-[-0.02em]">University of Chicago</h3>
      <span className="text-[14.5px] tabular-nums text-[#74746f]">2024 – 2028</span>
    </div>
    <p className="mt-1 text-[15.5px] text-[#74746f]">B.S. Computer Science, B.A. Physics, B.A. Mathematics</p>
  </Section>
);

export default Education;
