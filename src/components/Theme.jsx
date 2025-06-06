import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ActiveIcon = ({ isDarkMode }) => {
  const activeTheme = localStorage.getItem("colorTheme");
  let result = null;

  const moon = <BsMoonFill className="text-sky-500" />;
  const sun = <BsSunFill className="text-orange-500" />;

  if (activeTheme === "dark" && isDarkMode === true) {
    result = moon;
  } else if (activeTheme === "light" && isDarkMode === false) {
    result = sun;
  } else if (activeTheme === "dark" && isDarkMode === false) {
    result = moon;
  } else if (activeTheme === "light" && isDarkMode === true) {
    result = sun;
  }

  return result;
};

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      className="absolute z-50 right-5 lg:right-10 top-8 text-2xl bg-[#efefeffb] dark:bg-slate-800 p-2 rounded-full duration-200"
      onClick={turnOnDarkMode}
    >
      <ActiveIcon isDarkMode={isDarkMode} />
    </button>
  );
};

export default Theme;
