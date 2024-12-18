import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const CertificationCard = ({ title, issuer, date, skills, url, star }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
    <div className="p-6">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {title} {star && "⭐"}
        </h3>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            aria-label="View certification"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {issuer} • {date}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white text-xs font-semibold px-2.5 py-0.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "Learn Intermediate Go",
      issuer: "Codecademy",
      date: "December 2024",
      skills: ["Go", "HTTP", "Web Server"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/42ee48b10e8644f0b3131a933c02cd00",
    },
    {
      title: "Learn Go: Loops, Arrays, Maps, and Structs",
      issuer: "Codecademy",
      date: "December 2024",
      skills: ["Go"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/c5a07b3444c44fb0b3883075c5af51f4",
    },
    {
      title: "Learn Go",
      issuer: "Codecademy",
      date: "November 2024",
      skills: ["Go"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/60773d2e920679c8e46ff634b9ed2e6e",
    },
    {
      title: "Intermediate Deep Learning with PyTorch",
      issuer: "Datacamp",
      date: "September 2024",
      skills: [
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs)",
        "Long Short-Term Memory (LSTM)",
        "Gated Recurrent Units (GRUs)",
      ],
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/891cef26e26a597589a42ee0036a21c71a9d68b8",
    },
    {
      title: "Introduction to Deep Learning with PyTorch",
      issuer: "Datacamp",
      date: "September 2024",
      skills: [
        "PyTorch",
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
      ],
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c0792586d3c04071b43c29464451d151adf7c983",
    },
    {
      title: "Azure Architecture and Services",
      issuer: "Datacamp",
      date: "August 2024",
      skills: ["Microsoft Azure", "Cloud Computing"],
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a91c380f3f81317af59a44acc0b1b1adaf5fe015",
    },
    {
      title: "Introduction to Azure",
      issuer: "Datacamp",
      date: "August 2024",
      skills: ["Microsoft Azure", "Cloud Computing"],
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/284ffde42b057e7046822b76240718538c21eb48",
    },
    {
      title: "Understanding Cloud Computing",
      issuer: "Datacamp",
      date: "August 2024",
      skills: ["Cloud Computing", "Serverless Computing"],
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a47ca856f29525e6a77666654d7a3e146e55da68",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "April 2024",
      skills: [
        "TensorFlow",
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs)",
        "Long Short-Term Memory (LSTM)",
        "Gated Recurrent Units (GRUs)",
        "Transformers",
      ],
      url: "https://www.coursera.org/account/accomplishments/specialization/9JHRZ93BN4J2",
      star: true,
    },
    {
      title: "Introduction to Big Data with PySpark",
      issuer: "Codecacademy",
      date: "March 2024",
      skills: ["Big Data", "Apache Spark", "PySpark", "Python", "Data Science"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/895f3c0e3a564e9abea6f431ce5d87cc",
    },
    {
      title: "PyTorch for Classification",
      issuer: "Codecademy",
      date: "March 2024",
      skills: [
        "PyTorch",
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Python",
      ],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/5425a11cd2fa433088f098f0cf878a06",
    },
    {
      title: "Intro to PyTorch and Neural Networks",
      issuer: "Codecademy",
      date: "January 2024",
      skills: [
        "PyTorch",
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Python",
      ],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/6ae1628539a94211a0023482d755ec7d",
    },
    {
      title: "Intro to Hugging Face",
      issuer: "Codecademy",
      date: "December 2023",
      skills: ["Python", "Hugging Face", "Generative AI", "Machine Learning"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/df046d8e34e3475e93642fa0efee2791",
    },
    {
      title: "Learn MongoDB",
      issuer: "Codecademy",
      date: "July 2023",
      skills: ["MongoDB", "NoSQL", "Database Management"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/808a989d563e4e85ba3495d4d14dce5d",
    },
    {
      title: "Intro to ChatGPT",
      issuer: "Codecademy",
      date: "June 2023",
      skills: ["OpenAI", "ChatGPT", "Generative AI", "Prompt Engineering"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/ef9a06323b7d44b091a3ec7816092dc6",
    },
    {
      title: "Learn PHP: Introduction",
      issuer: "Codecademy",
      date: "June 2023",
      skills: ["PHP"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/167925f179f648e8abbaedbdf5b43091",
    },
    {
      title: "Learn React Native",
      issuer: "Codecademy",
      date: "June 2023",
      skills: ["React Native", "Mobile Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/458aef4eef5f5130685423fc15e6493d",
    },
    {
      title: "Learn React Router v6",
      issuer: "Codecademy",
      date: "June 2023",
      skills: ["React", "React Router", "Frontend Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/15b32ebcd95f164740d02275674fc5ee",
    },
    {
      title: "Learn Redux",
      issuer: "Codecademy",
      date: "June 2023",
      skills: ["Redux", "State Management", "Frontend Development", "React"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/7bec2ab40c4dcf741cd2ff8d50a35e2d",
    },
    {
      title: "Learn TypeScript",
      issuer: "Codecademy",
      date: "June 2023",
      skills: ["TypeScript"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/56fb1e71303e37b643bb1905f31c8a09",
    },
    {
      title: "Learn Node.js",
      issuer: "Codecademy",
      date: "May 2023",
      skills: ["Node.js", "JavaScript", "Backend Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/240305d50b925c17868f1ac7a21a3261",
    },
    {
      title: "Learn React",
      issuer: "Codecademy",
      date: "May 2023",
      skills: [
        "React",
        "Frontend Development",
        "Web Development",
        "Full-Stack Development",
      ],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/af00e5032d0a68cc84879983f5d8333b",
    },
    {
      title: "Learn jQuery",
      issuer: "Codecademy",
      date: "May 2023",
      skills: ["jQuery", "JavaScript", "Frontend Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/0becf7c1cd2bd715f24331dddd23425a",
    },
    {
      title: "Linear Algebra",
      issuer: "Codecademy",
      date: "April 2023",
      skills: ["Linear Algebra", "Mathematics", "Data Science", "Python"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/34c14a8d82ce7e5eb8077bd356946169",
    },
    {
      title: "Build an Intermediate iOS App with SwiftUI",
      issuer: "Codecademy",
      date: "January 2023",
      skills: ["SwiftUI", "iOS Development", "Mobile Development", "Swift"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/61055a5c709af400167da7ff",
    },
    {
      title: "Learn JavaScript: Asynchronous Programming",
      issuer: "Codecademy",
      date: "January 2023",
      skills: ["JavaScript", "Asynchronous Programming"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/257c50bca4561663476f2fa8f6ac410c",
    },
    {
      title: "Build iOS Apps with SwiftUI",
      issuer: "Codecademy",
      date: "December 2022",
      skills: ["SwiftUI", "iOS Development", "Mobile Development", "Swift"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/604255fe3d6454000dce1f3e",
    },
    {
      title: "Building Interactive JavaScript Websites",
      issuer: "Codecademy",
      date: "November 2022",
      skills: ["JavaScript", "Web Development", "Frontend Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/36ae898a1d1c8524815305b2d1d2ebab",
    },
    {
      title: "Analyze NFL Stats with Python Case Study",
      issuer: "Codecademy",
      date: "October 2022",
      skills: [
        "Python",
        "Data Analysis",
        "Data Science",
        "NumPy",
        "Pandas",
        "Jupyter",
        "Scikit-Learn",
        "Matplotlib",
      ],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/dcc2aaa0282342bf8faff500c168c30c",
    },
    {
      title: "Learn Kotlin",
      issuer: "Codecademy",
      date: "October 2022",
      skills: ["Kotlin", "Mobile Development", "Android Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/a549293c6e8d62a61ef1bec410b58162",
    },
    {
      title: "Learn JavaScript",
      issuer: "Codecademy",
      date: "August 2022",
      skills: ["JavaScript"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
    },
    {
      title: "C++ for Programmers",
      issuer: "Codecademy",
      date: "July 2022",
      skills: ["C++"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/ddc94032dd07fd43ee02f994e8f72af9",
    },
    {
      title: "Learn C++",
      issuer: "Codecademy",
      date: "July 2022",
      skills: ["C++"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/b74a2390dfc4127fa5d43fe147425ad0",
    },
    {
      title: "Learn Intermediate Swift",
      issuer: "Codecademy",
      date: "July 2022",
      skills: ["Swift", "iOS Development", "Mobile Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/7ea163c1176d53d69063f6e6386100f1",
    },
    {
      title: "Learn Java",
      issuer: "Codecademy",
      date: "July 2022",
      skills: ["Java"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/d3f89367b558583e361640f778191345",
    },
    {
      title: "Learn Web Scraping with Beautiful Soup",
      issuer: "Codecademy",
      date: "July 2022",
      skills: ["Python", "Web Scraping", "Beautiful Soup"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/f4cba58fa21e556a6a8f5a975cef5388",
    },
    {
      title: "Learn the Command Line",
      issuer: "Codecademy",
      date: "July 2022",
      skills: ["Git Bash", "Command Line"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/c87ba0541f8be78bc2f4ba1128233f6f",
    },
    {
      title: "Data Cleaning and Preprocessing with Pandas",
      issuer: "365 Data Science",
      date: "June 2022",
      skills: ["Data Cleaning", "Data Preprocessing", "Pandas", "Python"],
      url: "https://learn.365datascience.com/c/61c83d9e5e",
    },
    {
      title: "Web Scraping and API Fundamentals in Python",
      issuer: "365 Data Science",
      date: "June 2022",
      skills: ["Web Scraping", "APIs", "Python"],
      url: "https://learn.365datascience.com/c/013ea8de16",
    },
    {
      title: "Learn CSS",
      issuer: "Codecademy",
      date: "June 2022",
      skills: ["CSS", "Web Development", "Frontend Development", "UI Design"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
    },
    {
      title: "Learn HTML",
      issuer: "Codecademy",
      date: "June 2022",
      skills: ["HTML", "Web Development", "Frontend Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
    },
    {
      title: "Learn Swift",
      issuer: "Codecademy",
      date: "May 2022",
      skills: ["Swift", "iOS Development", "Mobile Development"],
      url: "https://www.codecademy.com/profiles/immanuelPeter9839511913/certificates/18e90daa65479a37c8f909893ada3694",
    },
    {
      title: "Introduction to Business Analytics",
      issuer: "365 Data Science",
      date: "October 2020",
      skills: [
        "Business Analytics",
        "Data Analysis",
        "Data Science",
        "Excel",
        "KPIs",
      ],
      url: "https://uchicago.box.com/s/m8aygy3niwjntuio9wnrzgrxmgsm9mw5",
    },
    {
      title: "SQL + Tableau + Python",
      issuer: "365 Data Science",
      date: "July 2020",
      skills: ["SQL", "Tableau", "Python", "Data Analysis", "Data Science"],
      url: "https://uchicago.box.com/s/9agcnfixj41tzzjh8v453a0e6m4x6vjc",
    },
    {
      title: "Data Visualization with Python, R, Tableau, and Excel",
      issuer: "365 Data Science",
      date: "July 2020",
      skills: [
        "Data Visualization",
        "Python",
        "R",
        "Tableau",
        "Excel",
        "Data Science",
      ],
      url: "https://uchicago.box.com/s/v9fd50vug75fxbikkgklxjy97aiwn0xn",
    },
    {
      title: "Deep Learning with TensorFlow 2.0",
      issuer: "365 Data Science",
      date: "June 2020",
      skills: [
        "TensorFlow",
        "Python",
        "Deep Learning",
        "Machine Learning",
        "Artificial Intelligence (AI)",
        "Neural Networks",
      ],
      url: "https://uchicago.box.com/s/s6zifdv23sfk8a3swoae63ifqqiwmjur",
    },
    {
      title: "Introduction to R",
      issuer: "365 Data Science",
      date: "June 2020",
      skills: ["R", "Data Analysis", "Data Science"],
      url: "https://uchicago.box.com/s/5mq86p77si62hi03y222ib8k0b4kyr9b",
    },
    {
      title: "Machine Learning in Python",
      issuer: "365 Data Science",
      date: "June 2020",
      skills: ["Python", "Machine Learning", "Data Science"],
      url: "https://uchicago.box.com/s/pskw66wndt3g0dy87u41vqifhipwa2z3",
    },
    {
      title: "Git and GitHub",
      issuer: "365 Data Science",
      date: "May 2020",
      skills: ["Git", "GitHub", "Version Control"],
      url: "https://uchicago.box.com/s/q1n3akr813lbbkjfy42zel0h72amo56g",
    },
    {
      title: "Python Programmer Bootcamp",
      issuer: "365 Data Science",
      date: "May 2020",
      skills: ["Python", "Problem Solving", "Critical Thinking"],
      url: "https://uchicago.box.com/s/4653fh7ntdtijrz3dwv7j42pdbh3qx7f",
    },
    {
      title: "Power BI",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Power BI", "Data Visualization"],
      url: "https://uchicago.box.com/s/sg0ol90d588eqo0vbtj2p1w952fgd9w5",
    },
    {
      title: "SQL + Tableau",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["SQL", "Tableau"],
      url: "https://uchicago.box.com/s/y9yklbs0cubwdakziehl7pue11kvp8fa",
    },
    {
      title: "SQL",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["SQL", "MySQL", "Relational Databases (RDBMS)"],
      url: "https://uchicago.box.com/s/q0axp0i9h4y8e95dqt0bihvs0s3n7swd",
    },
    {
      title: "Tableau",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Tableau", "Data Visualization", "Data Science"],
      url: "https://uchicago.box.com/s/50f05784edu14ipijiaefaf3rxwtwihj",
    },
    {
      title: "Mathematics",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Mathematics", "Linear Algebra"],
      url: "https://uchicago.box.com/s/zymjnh7c5u3vudzlsh1f48xgpafg3h6t",
    },
    {
      title: "Probability",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Probability", "Statistics", "Data Science"],
      url: "https://uchicago.box.com/s/visw185ca242rvi30qo8cz1gi1xmdt35",
    },
    {
      title: "Statistics",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Statistics", "Probability", "Data Science"],
      url: "https://uchicago.box.com/s/dei5eog6h3rf9le8zzj86bzdag3gl1dc",
    },
    {
      title: "Intro to Python",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Python"],
      url: "https://uchicago.box.com/s/helcneifwtph1s5wn4uajbhm6go0mnl2",
    },
    {
      title: "Advanced Microsoft Excel",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Microsoft Excel", "Data Analysis"],
      url: "https://uchicago.box.com/s/0el44i9ws0sgzb4abgsb3pkrqj5reidz",
    },
    {
      title: "Introduction to Microsoft Excel",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Microsoft Excel", "Data Analysis"],
      url: "https://uchicago.box.com/s/yplblre08ec722of95kcn0pi11gamw1o",
    },
    {
      title: "Intro to Data and Data Science",
      issuer: "365 Data Science",
      date: "April 2020",
      skills: ["Data Science", "Data Analysis"],
      url: "https://uchicago.box.com/s/u2tf1tvi65py7t6wqo0hs95grlc4n6w1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certifications.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="certifications"
      className="py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-end">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mr-4">
            Certifications
          </h1>
          <span className="text-lg text-gray-500 dark:text-gray-400">
            ({certifications.length})
          </span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications
          .slice(currentIndex, currentIndex + 3)
          .map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
      </div>
    </div>
  );
};

export default Certifications;
