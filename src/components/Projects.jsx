import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Done",
      shortDescription: "A simple and stylish to-do app UI built with React.",
      links: {
        liveLink: "https://done-v1.vercel.app/",
        detailsLink: "https://github.com/your-username/done",
      },
    },
    {
      title: "Nook",
      shortDescription: "A poem-sharing platform built with Django.",
      links: {
        liveLink: "https://nook-v4.vercel.app/",
        detailsLink: "https://github.com/your-username/nook",
      },
    },
    {
      title: "Tasker",
      shortDescription: "A task management app built with Flask and Bootstrap.",
      links: {
        liveLink: "https://tasker-v1-pedinijayashree.vercel.app/",
        detailsLink: "https://github.com/your-username/tasker",
      },
    },
  ];

  return (
    <section className="w-full py-[5vw] px-[15vw]">
      <h1 className="text-[4vw] font-semibold mb-11 text-zinc-700">projects</h1>
      <div className="w-full h-screen projects py-4 flex justify-between">
        <div className="pleft w-[45%] h-full flex flex-col">
          {projectsData.map((project, index) => {
            return (
              <div
                className="project flex flex-col gap-10 justify-center"
                key={index}
              >
                <h6 className="text-2xl text-zinc-500 uppercase font-bold leading-none">
                  {project.title}
                </h6>
                <h1 className="text-3xl capitalize">
                  {project.shortDescription}
                </h1>
                <div className="links text-zinc-500 flex gap-6">
                  <a href="">Live Link</a>
                  <a href="">Details</a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pright w-[45%] h-screen bg-fuchsia-300 flex items-center justify-end">
          <div className="images w-[90%] h-[90%] bg-red-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
