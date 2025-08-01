import React, { useEffect, useState } from "react";
import { LuSunMedium } from "react-icons/lu";
import { PiMoonStars } from "react-icons/pi";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const activeTheme = localStorage.getItem("colorTheme");

  if (localStorage.getItem("colorTheme") === "dark") {
    document.documentElement.classList.add(localStorage.getItem("colorTheme"));
  } else {
    localStorage.setItem("colorTheme", "light");
  }

  const turnOnDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (
      localStorage.getItem("colorTheme") === "light" &&
      isDarkMode === false
    ) {
      localStorage.setItem("colorTheme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("colorTheme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      data-aos="zoom-in"
      className="shadow-sm fixed z-50 right-5 lg:right-10 top-8 text-2xl bg-orange-500 dark:bg-sky-500 text-orange-100 dark:text-sky-950 p-2 rounded-full duration-200"
      onClick={turnOnDarkMode}
    >
      {activeTheme === "light" ? <LuSunMedium /> : <PiMoonStars />}
    </button>
  );
};

export default Theme;
