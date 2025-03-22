import React from "react";

const EducationCard = ({
  institution,
  degree,
  fieldOfStudy,
  year,
  classes,
  sealImage,
}) => {
  return (
    <div className="relative rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
      {/* School Seal */}
      {sealImage && (
        <div className="absolute top-4 right-4 w-16 h-16">
          <img
            src={sealImage}
            alt={`${institution} Seal`}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-blue-400 mb-1">
        {degree}
      </h3>
      <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-2">
        {fieldOfStudy}
      </h4>
      <p className="text-gray-500 dark:text-gray-400 mb-2">{institution}</p>
      <p className="text-gray-400 dark:text-gray-500 text-sm">{year}</p>
      {classes && classes.length > 0 && (
        <div className="mt-4">
          <h5 className="font-semibold text-gray-700 dark:text-gray-300">
            Relevant Courses:
          </h5>
          <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 text-sm">
            {classes.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      institution: "University of Chicago",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      year: "September 2024 - June 2028",
      classes: [
        "Introduction to Computer Science I",
        "Introduction to Computer Science II",
        "Systems Programming I",
        "Systems Programming II",
        "Mathematical Foundations of Machine Learning"
      ],
      sealImage:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/University_of_Chicago_Coat_of_arms.png",
    },
    {
      institution: "University of Chicago",
      degree: "Bachelor of Arts",
      fieldOfStudy: "Mathematics",
      year: "September 2024 - June 2028",
      classes: [
        "Introduction to Proofs in Analysis",
        "Abstract Linear Algebra",
        "Analysis in Rn I",
        "Mathematical Foundations of Machine Learning"
      ],
      sealImage:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/University_of_Chicago_Coat_of_arms.png",
    },
    {
      institution: "University of Chicago",
      degree: "Bachelor of Arts",
      fieldOfStudy: "Physics",
      year: "September 2024 - June 2028",
      classes: [
        "Mechanics",
        "Electricity and Magnetism",
        "Waves, Optics, and Heat"
      ],
      sealImage:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/University_of_Chicago_Coat_of_arms.png",
    },
  ];

  return (
    <div
      id="education"
      className="py-10 px-6 md:px-16 bg-gray-50 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8 text-left">
        Education
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
