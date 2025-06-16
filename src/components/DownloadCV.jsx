import React, { useState } from "react";
import { GrDocumentUser } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import cvFile from "../assets/BALLOLA_BILLY_JOEL_RESUME.pdf";

const DownloadCV = () => {
  const [showToolTip, setShowToolTip] = useState(true);

  return (
    <div className="group grid place-content-center fixed bottom-8 md:bottom-16 left-5 lg:left-10 bg-gray-100 dark:bg-slate-800 shadow-md rounded-full w-10 aspect-square z-40">
      {/* <div className="hidden group-hover:block absolute whitespace-nowrap -top-3 left-9 rounded-md px-2 py-1 z-20 bg-white dark:bg-slate-600 dark:text-white shadow-md border dark:border-0 text-gray-500">
        <span className="text-sm">Download CV</span>
      </div> */}
      {showToolTip && (
        <div
          data-aos="zoom-in-right"
          className="flex gap-8 absolute whitespace-nowrap -top-8 left-9 rounded-md px-2 py-1 z-20 bg-orange-500 dark:bg-sky-600 text-white shadow-md border dark:border-0"
        >
          <span className="text-sm">
            You can download my CV
            <br />
            just by clicking the icon.
          </span>
          <button onClick={() => setShowToolTip(false)}>
            <IoMdClose />
          </button>
        </div>
      )}
      <a
        href={cvFile}
        className="text-orange-500 dark:text-sky-500 text-xl cursor-pointer"
        download
      >
        <GrDocumentUser />
      </a>
    </div>
  );
};

export default DownloadCV;
