/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      description: "Discuss project goals, audience, and requirements.",
      icon: "🔍",
    },
    {
      title: "Planning",
      description: "Create detailed plan with timelines and milestones.",
      icon: "📝",
    },
    {
      title: "Design",
      description: "Wireframes and prototypes for UX/UI visualization.",
      icon: "🎨",
    },
    {
      title: "Development",
      description: "Build using best practices and modern tech.",
      icon: "💻",
    },
    {
      title: "Testing",
      description: "Ensure perfect functionality across all devices.",
      icon: "🧪",
    },
    {
      title: "Launch",
      description: "Deploy with support and maintenance.",
      icon: "🚀",
    },
  ];

  return (
    <section id="process" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            My Process
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            A structured approach to ensure your project's success
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal Timeline line */}
          <div className="hidden sm:block absolute bottom-0 top-50 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500 to-blue-500/20"></div>

          <div className="flex overflow-x-auto pb-6 sm:pb-0 sm:grid sm:grid-cols-6 gap-4 sm:gap-6 scrollbar-hide">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className="min-w-[240px] sm:min-w-0 flex-shrink-0 sm:flex-shrink"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 shadow-lg h-full hover:border-blue-400/30 transition-colors">
                  <div className="text-2xl mb-3">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-blue-100/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
