import React from "react";

const Line = ({ height }) => {
  return (
    <div
      className={`h-[${height}px] bg-black w-[.2rem] absolute left-1/2 -z-10`}
    />
  );
};

export default Line;
