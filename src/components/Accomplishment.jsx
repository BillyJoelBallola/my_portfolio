import React from "react";
import accomplishments from "../data/accomplishment";

const Accomplishment = () => {
  return (
    <section className="section">
      <div className="text-center mb-8 w-auto md:w-[50%] mx-auto">
        <h2 className="font-semibold text-lg mb-2" data-aos="fade-up">
          MY ACCOMPLISHMENTS
        </h2>
        <p data-aos="fade-up">
          These are all of my achievements through honing my skills in different
          fields of Information Technology.
        </p>
      </div>
      {accomplishments.map((info, idx) => (
        <div className="flex gap-10 justify-center" key={idx}>
          <div className="w-[30vw] my-20 flex justify-start flex-col items-end gap-20">
            <p data-aos="fade-down" className="font-semibold text-lg">
              {info.year}
            </p>
          </div>
          <div
            className="relative w-[.2rem] h-auto bg-black rounded-full dark:bg-white flex justify-center"
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <div className="absolute w-[1rem] my-20 aspect-square  rounded-full border-4 border-black dark:border-white bg-orange-500 dark:bg-sky-500"></div>
          </div>
          <div className="w-[30vw] my-20 flex justify-start flex-col items-start gap-20">
            <p data-aos="fade-down">{info.detail}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accomplishment;
