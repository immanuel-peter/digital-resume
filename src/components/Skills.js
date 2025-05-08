import React from "react";
import {
  FaPython,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaSwift,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiPytorch,
  SiTensorflow,
  SiMicrosoftazure,
  SiCplusplus,
  SiMicrosoftexcel,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiOpenai,
  SiJquery,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGnubash,
  SiCss3,
  SiTailwindcss,
  SiTableau,
  SiGithubactions,
  SiPowerbi,
  SiPostgresql,
  SiNextdotjs,
  SiHuggingface,
  SiC,
  SiFastapi,
  SiAnthropic,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandKotlin } from "react-icons/tb";

// SkillIcon component for rendering icons
const SkillIcon = ({ Icon, name, color }) => (
  <div className="flex flex-col items-center m-4 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1">
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-lg shadow-md hover:shadow-lg ${color}`}
    >
      <Icon className="text-4xl text-white" />
    </div>
    <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
      {name}
    </span>
  </div>
);

// Chip component for knowledge-based skills
const SkillChip = ({ name }) => (
  <span className="m-2 px-4 py-2 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-medium cursor-default hover:bg-blue-300 dark:hover:bg-blue-600">
    {name}
  </span>
);

// Main Skills component
const Skills = () => {
  const codingSkills = {
    "Programming Languages": [
      { name: "Python", Icon: FaPython, color: "bg-yellow-500" },
      { name: "JavaScript", Icon: FaJs, color: "bg-yellow-300" },
      { name: "C++", Icon: SiCplusplus, color: "bg-blue-700" },
      // { name: "Java", Icon: FaJava, color: "bg-red-500" },
      { name: "TypeScript", Icon: SiTypescript, color: "bg-blue-500" },
      { name: "Kotlin", Icon: TbBrandKotlin, color: "bg-purple-700" },
      // { name: "Swift", Icon: FaSwift, color: "bg-orange-500" },
      // { name: "Go", Icon: FaGolang, color: "bg-cyan-500" },
      // { name: "C", Icon: SiC, color: "bg-blue-600" },
    ],
    "Full Stack Engineering": [
      { name: "React", Icon: FaReact, color: "bg-blue-400" },
      { name: "React Native", Icon: FaReact, color: "bg-blue-400" },
      // { name: "Redux", Icon: SiRedux, color: "bg-purple-500" },
      // { name: "jQuery", Icon: SiJquery, color: "bg-blue-400" },
      // { name: "HTML", Icon: FaHtml5, color: "bg-orange-600" },
      // { name: "CSS", Icon: SiCss3, color: "bg-blue-600" },
      // { name: "Tailwind CSS", Icon: SiTailwindcss, color: "bg-sky-400" },
      { name: "Next.js", Icon: SiNextdotjs, color: "bg-black" },
      { name: "Node.js", Icon: FaNodeJs, color: "bg-green-500" },
      { name: "MongoDB", Icon: SiMongodb, color: "bg-green-700" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "bg-blue-500" },
      { name: "MySQL", Icon: GrMysql, color: "bg-blue-600" },
      { name: "SQL", Icon: FaDatabase, color: "bg-violet-400" },
      { name: "FastAPI", Icon: SiFastapi, color: "bg-teal-600" },
    ],
    "Machine Learning & Artificial Intelligence": [
      { name: "PyTorch", Icon: SiPytorch, color: "bg-orange-500" },
      { name: "TensorFlow", Icon: SiTensorflow, color: "bg-orange-600" },
      { name: "OpenAI", Icon: SiOpenai, color: "bg-black" },
      { name: "Anthropic", Icon: SiAnthropic, color: "bg-amber-600" },
      { name: "Hugging Face", Icon: SiHuggingface, color: "bg-yellow-400" },
    ],
    "Data Science": [
      { name: "Pandas", Icon: SiPandas, color: "bg-purple-800" },
      { name: "NumPy", Icon: SiNumpy, color: "bg-sky-400" },
      { name: "Jupyter", Icon: SiJupyter, color: "bg-orange-400" },
      // {
      //   name: "Microsoft Excel",
      //   Icon: SiMicrosoftexcel,
      //   color: "bg-green-600",
      // },
      // { name: "Tableau", Icon: SiTableau, color: "bg-blue-700" },
      // { name: "Power BI", Icon: SiPowerbi, color: "bg-yellow-500" },
    ],
    "Cloud Computing & DevOps": [
      // { name: "Azure", Icon: SiMicrosoftazure, color: "bg-blue-600" },
      { name: "Git", Icon: FaGitAlt, color: "bg-orange-600" },
      { name: "GitHub", Icon: FaGithub, color: "bg-black" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "bg-blue-500" },
      { name: "Bash", Icon: SiGnubash, color: "bg-black" },
    ],
  };

  const knowledgeSkills = [
    "Data Structures & Algorithms",
    "Linear Algebra",
    "Statistics & Probability",
    "Data Cleaning",
    "Data Preprocessing",
    "Business Analytics",
    "Data Visualization",
    "Artificial Intelligence (AI)",
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Transformers",
    "Convolutional Neural Networks (CNNs)",
    "Recurrent Neural Networks (RNNs)",
    "Long Short-Term Memory (LSTM)",
    "Gated Recurrent Units (GRUs)",
    "Generative AI",
    "Web Scraping",
    "API Integration",
    "Vector Databases",
    "FAISS",
  ];

  return (
    <div
      id="skills"
      className="py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8 text-left">
        Skills & Technologies
      </h1>

      {/* Rendering Coding Skills by Category */}
      {Object.entries(codingSkills).map(([category, skills]) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-8 mb-4 capitalize">
            {category}
          </h2>
          <div className="flex flex-wrap justify-start">
            {skills.map((skill, index) => (
              <SkillIcon
                key={index}
                Icon={skill.Icon}
                name={skill.name}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Rendering Knowledge Skills as Chips */}
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-8 mb-4">
        Knowledge Skills
      </h2>
      <div className="flex flex-wrap">
        {knowledgeSkills.map((skill, index) => (
          <SkillChip key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
