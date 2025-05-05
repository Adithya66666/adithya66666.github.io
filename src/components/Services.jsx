/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites built for performance, scalability, and security using modern frameworks like React, Next.js, and Node.js.",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications with native performance using React Native and Flutter.",
      icon: "📱",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered interfaces designed to convert visitors into customers with intuitive workflows.",
      icon: "🎨",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies that increase conversions and maximize ROI.",
      icon: "📈",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "E-commerce Solutions",
      description:
        "High-converting online stores with seamless checkout experiences and payment integrations.",
      icon: "🛒",
      color: "from-red-500 to-rose-500",
    },
    {
      title: "SEO Optimization",
      description:
        "Technical and content SEO strategies to improve search rankings and organic traffic.",
      icon: "🔍",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            My Services
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 bg-gradient-to-br ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-blue-100/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
