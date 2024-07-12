import React from "react";
import Main from "./components/Main";
import Theme from "./components/Theme";
import Scroll from "./components/Scroll";
import DownloadCV from "./components/DownloadCV";

const App = () => {
  return (
    <div className="main-bg w-full relative">
      <div className="bg-[#fcfcfc1a] dark:bg-[#0f172ae2] backdrop-blur-5">
        <Scroll />
        <DownloadCV />
        <Theme />
        <Main />
      </div>
    </div>
  );
};

export default App;
