import React from "react";
import { skills } from "../data/skills.jsx";

const Skills = () => {
  return (
    <section className="section">
      <div className="text-center mb-8 w-auto md:w-[50%] mx-auto">
        <h2 className="font-semibold text-lg mb-2" data-aos="fade-up">
          MY SKILLS
        </h2>
        <p data-aos="fade-up">
          These are the skills and tools that I know and use for some of my
          projects.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 md:w-[60%] mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="flex flex-col gap-2 items-center rounded-lg py-2 px-4"
          >
            <span className="text-orange-500 dark:text-sky-500 text-4xl">
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
