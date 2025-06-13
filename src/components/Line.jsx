const Line = ({ height }) => {
  return (
    <div
      className={`h-[${height}px] bg-slate-950 dark:bg-slate-50 w-[.2rem] absolute left-1/2 -z-10`}
    />
  );
};

export default Line;
