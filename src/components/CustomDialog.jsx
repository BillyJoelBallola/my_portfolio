import { useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CustomDialog = ({ visible, setVisible, info }) => {
  const { title, description, image, tags, demoURL } = info;

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed flex flex-col h-screen w-screen bg-neutral-950/80 backdrop-blur-sm z-50 pointer-events-auto animate-blur"
      onClick={() => setVisible(false)}
    >
      <div className="pt-2 px-2 hidden md:block self-end">
        <button
          className="text-3xl h-fit text-neutral-50"
          onClick={() => setVisible(false)}
        >
          &times;
        </button>
      </div>
      <div
        className="overflow-auto bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white md:rounded-t-xl flex flex-col w-full h-full pb-8 md:py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-4 px-4 md:hidden self-end">
          <button
            className="text-3xl h-fit dark:text-neutral-50"
            onClick={() => setVisible(false)}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="px-4 md:px-32 lg:px-64 flex items-center gap-4">
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            {demoURL && (
              <a
                href={demoURL}
                target="_blank"
                className="bg-transparent hover:bg-neutral-900 dark:hover:bg-neutral-50 hover:text-neutral-50 dark:hover:text-neutral-900 duration-150 ease-in-out flex items-center gap-2 border border-neutral-500 py-1 px-3 rounded-full"
              >
                <FaArrowUpRightFromSquare className="size-3" />
                <span className="mt-0.5 text-sm">Live Demo</span>
              </a>
            )}
          </div>
          <div className="px-0 md:px-32 lg:px-64 bg-neutral-200 dark:bg-neutral-900/50 dark:md:bg-transparent md:bg-transparent">
            <div className="rounded-lg overflow-hidden py-8 md:py-0">
              <img
                src={image}
                alt="project image"
                className="object-contain size-full"
              />
            </div>
          </div>
          <div className="pt-4 px-4 md:px-40 lg:px-72 xl:px-80 grid gap-8">
            <div className="grid gap-4">
              <h4 className="font-semibold">About the project</h4>
              <p className="text-sm">{description}</p>
            </div>
            <div className="grid gap-4">
              <h4 className="font-semibold">Tech Stack</h4>
              <div className="flex items-center gap-2">
                {tags.map((tag, idx) => (
                  <div key={idx}>
                    <span className="dark:text-orange-500 text-blue-500">
                      {tag}
                    </span>
                    {idx < tags.length - 1 && (
                      <span className="text-gray-400">, </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-4 px-4 md:px-40 lg:px-72 grid gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
