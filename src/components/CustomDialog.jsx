import { Fragment, useEffect } from "react";

const CustomDialog = ({ visible, setVisible, info }) => {
  const { title, description, image, tags } = info;

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
      className="fixed grid place-items-center h-screen w-screen bg-neutral-950/80 backdrop-blur-sm z-50 pointer-events-auto"
      onClick={() => setVisible(false)}
    >
      <div
        className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-lg p-4 md:p-6 absolute z-30 w-10/12 md:w-2/3 lg:w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button className="text-3xl" onClick={() => setVisible(false)}>
            &times;
          </button>
        </div>
        <div className="flex rounded-lg overflow-hidden mt-4">
          <img
            src={image}
            alt="project image"
            className="object-cover object-center w-full aspect-auto"
          />
        </div>
        <div className="mt-4 p-4 bg-neutral-200/50 dark:bg-neutral-900 rounded-md">
          <div className="text-sm whitespace-pre-wrap break-words overflow-x-auto">
            <span className="text-teal-500">&#123;</span>
            <br />
            <br />
            <span className="text-green-700 dark:text-yellow-500">tag: </span>
            <span className="text-orange-500 dark:text-blue-500">&#91;</span>
            {tags.map((tag, index) => (
              <>
                <span className="dark:text-orange-500 text-blue-500">
                  "{tag}"
                </span>
                {index < tags.length - 1 && (
                  <span className="text-gray-400">, </span>
                )}
              </>
            ))}
            <span className="text-orange-500 dark:text-blue-500">&#93;</span>
            <span className="text-green-700 dark:text-yellow-500">,</span>
            <br />
            <span className="text-green-700 dark:text-yellow-500">
              description:{" "}
            </span>
            <span className="text-red-500 dark:text-cyan-400">
              "{description.replace(/\n/g, " ")}"
            </span>
            <br />
            <br />
            <span className="text-teal-500">&#125;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
