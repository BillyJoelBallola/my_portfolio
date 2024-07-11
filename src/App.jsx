import React from "react";
import Main from "./components/Main";
import Theme from "./components/Theme";

const App = () => {
  return (
    <div className="main-bg w-full">
      <div className="bg-[#fcfcfc33] dark:bg-[#0f172ae2] backdrop-blur-5">
        <Theme />
        <Main />
      </div>
    </div>
  );
};

export default App;
