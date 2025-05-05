/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import imanImage from "../assets/iman.png";
import imagePng from "../assets/image.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Marketing Director, BrandUp",
      content:
        "The mobile app Adithya developed for us has received fantastic feedback from our users. His attention to detail is exceptional.",
      avatar: imagePng,
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at Expo",
      content:
        "Adithya's technical expertise and communication skills made our complex dashboard project a smooth experience from start to finish.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
    {
      name: "Iman Weerasekara",
      role: "Owner. Oresi Food",
      content:
        "Working with Adithya was an absolute pleasure. He delivered our e-commerce platform ahead of schedule and it has helped increase our sales by 200%.",
      avatar: imanImage,
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            Client Testimonials
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-100/80">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
