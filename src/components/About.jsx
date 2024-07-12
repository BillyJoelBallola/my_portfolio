import React from "react";

const About = () => {
  return (
    <section className="section mb-[100px]" id="about">
      <div className="text-center mb-8 w-auto md:w-[70%] mx-auto">
        <h2 className="font-semibold text-lg mb-2" data-aos="fade-up">
          ABOUT ME
        </h2>
        <p data-aos="fade-up">
          Hi 👋! I am{" "}
          <span className="text-orange-500 dark:text-sky-500">
            Billy Joel Ballola
          </span>
          , I recently graduated with Bachelor's Degree in Information
          Technology. My interest in programming started when I got to college.
          Now I want to be a web developer focused in client-side programming.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="whitespace-normal flex flex-col md:flex-row p-6 gap-2 md:gap-4 rounded-lg text-black border dark:border-0 bg-white dark:bg-slate-700 dark:text-white shadow-md w-[90%] md:w[70%] lg:w-[65%] mt-8 mx-auto"
      >
        <ul className="flex-1 flex flex-col gap-2">
          <li>
            <span className="font-semibold">Birthday: </span>June 1, 2002
          </li>
          <li>
            <span className="font-semibold">Phone:</span> (63) 936 051 0813
          </li>
          <li>
            <span className="font-semibold">Gmail:</span>{" "}
            <a
              href="mailto:billyjoelballola27@gmail.com"
              className="hover:underline"
            >
              billyjoelballola27@gmail.com
            </a>
          </li>
        </ul>
        <ul className="flex-1 flex flex-col gap-2">
          <li>
            <span className="font-semibold">Age:</span> 22 y/o
          </li>
          <li>
            <span className="font-semibold">Address:</span> Laguna, PH
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
