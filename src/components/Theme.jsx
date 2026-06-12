import React, { useEffect, useState } from "react";
import { LuSunMedium } from "react-icons/lu";
import { PiMoonStars } from "react-icons/pi";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("colorTheme") === "dark",
  );

  useEffect(() => {
    localStorage.setItem("colorTheme", isDarkMode ? "dark" : "light");

    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const turnOnDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <label className="fixed z-50 right-5 lg:right-10 top-8 inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={turnOnDarkMode}
      />
      <div
        className="
          relative
          w-12 h-8 rounded-full 
          bg-gradient-to-r from-yellow-300 to-orange-400 
          peer-checked:from-sky-400 peer-checked:to-blue-500 
          transition-all duration-500 
          after:content-['☀️'] 
          after:absolute 
          after:top-1 
          after:left-1
          after:pt-[0.9px]
          after:bg-white 
          after:rounded-full 
          after:size-6
          after:grid
          after:place-items-center
          after:transition-all 
          after:duration-500 
          peer-checked:after:translate-x-4
          peer-checked:after:content-['🌙'] 
          after:shadow-md"
      />
    </label>
  );
};

export default Theme;
