import React from "react";

const projects = [
  {
    name: "Project 1",
    description: "A great web app built with React.",
    link: "https://project1.com",
  },
  {
    name: "Project 2",
    description: "A cool mobile app using React Native.",
    link: "https://project2.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:text-blue-400"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
