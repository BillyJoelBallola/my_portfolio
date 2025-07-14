const Line = ({ height }) => {
  return (
    <div
      className={`h-[${height}px] bg-neutral-950 dark:bg-neutral-50 w-[.2rem] absolute left-1/2 -z-10`}
    />
  );
};

export default Line;
