import React, { useEffect, useState } from "react";
import { CgMouse } from "react-icons/cg";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Scroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="whitespace-nowrap fixed bottom-16 right-3 md:right-5 lg:right-10 z-20">
      <a
        href={`${scrollPosition <= 300 ? "#about" : "#header"}`}
        className="text-orange-500 dark:text-sky-500 text-xl"
      >
        {scrollPosition <= 300 ? (
          <>
            <CgMouse />
            <MdKeyboardDoubleArrowDown />
          </>
        ) : (
          <>
            <MdKeyboardDoubleArrowUp />
            <CgMouse />
          </>
        )}
      </a>
    </div>
  );
};

export default Scroll;
