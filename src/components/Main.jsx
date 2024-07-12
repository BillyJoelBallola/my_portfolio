import React from "react";

import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Accomplishment from "./Accomplishment";
import Footer from "./Footer";

const Main = () => {
  return (
    <main className="w-full pb-[150px] font-poppins dark:text-slate-100">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Accomplishment />
      <Footer />
    </main>
  );
};

export default Main;
