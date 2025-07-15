import React, { useState } from "react";
import { GrDocumentUser } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import cvFile from "../assets/BALLOLA_BILLY_JOEL_RESUME.pdf";

const DownloadCV = () => {
  const [showToolTip, setShowToolTip] = useState(true);

  return (
    <div className="group grid place-content-center fixed bottom-8 md:bottom-16 left-5 lg:left-10 bg-gray-100 dark:bg-neutral-800 shadow-md rounded-full w-10 aspect-square z-40">
      {/* <div className="hidden group-hover:block absolute whitespace-nowrap -top-3 left-9 rounded-md px-2 py-1 z-20 bg-white dark:bg-neutral-600 dark:text-white shadow-md border dark:border-0 text-gray-500">
        <span className="text-sm">Download CV</span>
      </div> */}
      {showToolTip && (
        <div
          data-aos="zoom-in-right"
          className="flex gap-4 absolute whitespace-nowrap -top-12 left-6 md:-top-6 md:left-8 rounded-md px-2 py-1 z-20 bg-orange-500 dark:bg-sky-600 text-white shadow-md border dark:border-0"
        >
          <span className="text-xs">
            You can download <br className="block md:hidden" /> my CV{" "}
            <br className="hidden md:block" /> just by{" "}
            <br className="block md:hidden" /> clicking the icon.
          </span>
          <button onClick={() => setShowToolTip(false)}>
            <IoMdClose />
          </button>
        </div>
      )}
      <a
        href={cvFile}
        className="text-orange-500 dark:text-sky-500 text-lg cursor-pointer"
        download
      >
        <GrDocumentUser />
      </a>
    </div>
  );
};

export default DownloadCV;
