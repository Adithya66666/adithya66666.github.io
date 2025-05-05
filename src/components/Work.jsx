/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online store with custom CMS and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure financial application with biometric authentication.",
      tags: ["React Native", "Firebase", "Redux"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Corporate Website",
      description:
        "Modern responsive website with CMS integration for easy content updates.",
      tags: ["Next.js", "Tailwind CSS", "GraphQL"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization.",
      tags: ["React", "D3.js", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            My Work
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Selected projects that demonstrate my expertise and capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-blue-100/80 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-300 hover:text-white transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
