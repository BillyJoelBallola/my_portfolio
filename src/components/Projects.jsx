import { useState } from "react";
import projects from "../data/projects";
import { AiFillGithub } from "react-icons/ai";
import { GoZoomIn } from "react-icons/go";
import CustomDialog from "./CustomDialog";

const Projects = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProjectInfo, setSelectedProjectInfo] = useState({
    image: "",
    title: "",
    description: "",
    tags: [],
  });

  return (
    <>
      {showDialog && (
        <CustomDialog
          visible={showDialog}
          setVisible={setShowDialog}
          info={selectedProjectInfo}
        />
      )}
      <section className="section" id="projects">
        <div className="grid place-items-center">
          <div className="text-center mb-8 w-auto md:w-[45%] mx-auto">
            <h2 className="font-semibold text-lg mb-2" data-aos="fade-up">
              PROJECTS
            </h2>
            <p data-aos="fade-up">
              These are some of the personal and school projects that I built to
              practice my skills.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <div
                data-aos="zoom-out-up"
                className="shadow-lg rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800"
                key={index}
              >
                <div className="overflow-hidden relative group cursor-pointer">
                  <button
                    onClick={() => {
                      setShowDialog(true);
                      setSelectedProjectInfo(project);
                    }}
                    className="group-hover:opacity-100 opacity-0 absolute inset-0 duration-300 grid place-items-center bg-neutral-950/60"
                  >
                    <div className="text-4xl text-white font-semibold">
                      <GoZoomIn />
                    </div>
                  </button>
                  <img src={project.image} alt="project-image" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold mb-2 text-sm">
                    {project.title}
                  </h5>
                  <div className="flex flex-wrap items-center gap-1">
                    {project.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="text-xs bg-gray-200 text-neutral-800 dark:bg-neutral-600 dark:text-neutral-100 py-1 px-2 rounded-lg cursor-pointer duration-200 ease-in-out hover:bg-gray-700 dark:hover:bg-neutral-100 hover:text-white dark:hover:text-black"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div data-aos="fade-up" className="mt-14">
            <a
              href="https://github.com/BillyJoelBallola"
              target="_blank"
              rel="noreferrer"
              className="text-sm mx-auto border-2 border-orange-500 text-orange-500 dark:border-sky-500 rounded-full p-2 px-4 cursor-pointer dark:text-sky-500 hover:bg-orange-500 dark:hover:bg-sky-500 hover:text-white dark:hover:text-white duration-150 shadow-md flex items-center gap-2"
            >
              <AiFillGithub className="w-6 h-6" />
              <span className="-mb-1">See More Projects</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
