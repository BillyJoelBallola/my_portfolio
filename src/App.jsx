import React from "react";
import Main from "./components/Main";
import Theme from "./components/Theme";
import Scroll from "./components/Scroll";
import DownloadCV from "./components/DownloadCV";

const App = () => {
  return (
    <div className="main-bg w-full relative font-mono overflow-x-hidden">
      <div className="text-neutral-950 dark:text-neutral-50 bg-neutral-50/20 dark:bg-neutral-900 backdrop-blur-5">
        <Scroll />
        <DownloadCV />
        <Theme />
        <Main />
      </div>
    </div>
  );
};

export default App;
