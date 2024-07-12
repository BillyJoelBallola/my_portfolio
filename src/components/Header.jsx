import React from "react";

const Header = () => {
  return (
    <section
      className="mx-auto w-[90%] md:w-[60%] lg:w-[40%] h-screen text-center grid place-items-center"
      id="header"
    >
      <div>
        <span data-aos="fade-up" className="font-semibold md:text-lg">
          HELLO, I AM
        </span>
        <h1
          className="font-bold text-5xl md:text-7xl tracking-normal md:tracking-widest whitespace-nowrap"
          data-aos="fade-up"
        >
          BILLY JOEL
        </h1>
        <h2
          className="font-semibold md:text-lg text-orange-500 dark:text-sky-500"
          data-aos="fade-up"
        >
          ASPIRING FRONT-END DEVELOPER
        </h2>
      </div>
    </section>
  );
};

export default Header;
