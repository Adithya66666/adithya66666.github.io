/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "email",
    icon: <FaEnvelope />,
    link: "mailto:adithyabandara01@gmail.com",
  },
  {
    label: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/adithyabandara/",
  },
  {
    label: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/gs.adithya_",
  },
  {
    label: "whatsapp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/+447487405598",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Adithya Dev
            </h2>
            <p className="text-blue-100/80 mt-2">
              Creating digital experiences that matter
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800/50 text-center text-blue-100/50 text-sm"
        >
          <p>© {new Date().getFullYear()} Adithya Dev. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
