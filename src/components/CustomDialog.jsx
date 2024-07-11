import React from "react";

const CustomDialog = ({ visible, setVisible, info }) => {
  const { title, description, image, tags } = info;

  return (
    <div className="fixed grid place-items-center inset-0 bg-black/80 z-20 pointer-events-auto">
      <div className="bg-white dark:bg-slate-800 text-black dark:text-white rounded-lg p-6 absolute z-30 w-10/12 md:w-2/3 lg:w-1/2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button className="text-3xl" onClick={() => setVisible(false)}>
            &times;
          </button>
        </div>
        <div className="flex rounded-lg overflow-hidden mt-4">
          <img src={image} alt="project image" className="object-contain" />
        </div>
        <div className="mt-4">
          <p className="text-sm">{description}</p>
          <div className="flex gap-2 text-sm mt-4 text-gray-800">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="text-sm shadow-md rounded-md bg-gray-300 dark:text-white dark:bg-slate-700 px-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
