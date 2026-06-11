import React from "react";

const Header = () => {
  return (
    <section id="header" className="relative h-screen overflow-hidden">
      {/* pattern */}
      <div className="absolute inset-0 h-full w-full [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#858585_0.5px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_0%,transparent_100%)]">
        <div />
      </div>

      {/* content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <span data-aos="fade-up" className="font-semibold md:text-lg">
          HELLO, I AM
        </span>
        <h1
          className="font-bold text-5xl md:text-7xl tracking-normal md:tracking-widest whitespace-nowrap"
          data-aos="fade-up"
        >
          BILLY JOEL
        </h1>
        <p
          className="font-semibold md:text-lg text-orange-500 dark:text-sky-500"
          data-aos="fade-up"
        >
          ASPIRING FRONT-END DEVELOPER
        </p>
      </div>
    </section>
  );
};

export default Header;
