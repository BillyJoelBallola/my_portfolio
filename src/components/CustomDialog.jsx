import { useEffect } from "react";

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
      className="fixed grid place-items-center h-screen w-screen bg-black/80 backdrop-blur-sm z-50 pointer-events-auto"
      onClick={() => setVisible(false)}
    >
      <div
        className="bg-white dark:bg-slate-800 text-black dark:text-white rounded-lg p-6 absolute z-30 w-10/12 md:w-2/3 lg:w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button className="text-3xl" onClick={() => setVisible(false)}>
            &times;
          </button>
        </div>
        <div className="flex rounded-lg overflow-hidden mt-4 border border-slate-200 dark:border-slate-700">
          <img src={image} alt="project image" className="object-cover" />
        </div>
        <div className="mt-4">
          <div className="flex gap-2 mb-4 text-sm mt-4 text-slate-800">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="text-sm rounded-md bg-slate-800 text-slate-50 dark:text-slate-800 dark:bg-slate-50 px-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
