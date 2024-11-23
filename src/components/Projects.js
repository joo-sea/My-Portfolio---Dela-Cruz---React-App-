import React from 'react';

const Projects = ({ projects = [] }) => {
  // Example of including a downloadable executable Godot game
  const godotGame = {
    id: 'godot-game',
    title: 'My Godot Game',
    description: 'A 2D action game built using Godot Engine. Download and enjoy!',
    link: 'Dela Cruz - Metrodvania.zip',  // Link to the downloadable .zip or executable file
    image: 'DC_Metrovania.png', // A thumbnail image for the game
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="projects">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A collection of projects that I have worked on, showcasing different skills and technologies.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <img
                    className="mb-4 w-full"
                    src={project.image}
                    alt={project.title}
                  />
                  <h2 className="text-lg text-white font-medium title-font mb-2">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed text-base">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-indigo-500 inline-flex items-center mt-3"
                    download  // Optional: this attribute can prompt a direct download
                  >
                    Download Game
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p></p>
          )}
          {/* Godot Game Example */}
          <div key={godotGame.id} className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <img
                className="mb-4 w-full"
                src={godotGame.image}
                alt={godotGame.title}
              />
              <h2 className="text-lg text-white font-medium title-font mb-2">
                {godotGame.title}
              </h2>
              <p className="leading-relaxed text-base">{godotGame.description}</p>
              <div className="mt-4">
                <a
                  href={godotGame.link}
                  className="text-indigo-500 inline-flex items-center mt-3"
                  download  // Optional: the download attribute will prompt download action
                >
                  Download Game
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;