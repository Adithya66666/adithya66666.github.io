/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Hero = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);

  const [text] = useTypewriter({
    words: [
      "Web Development",
      "Mobile Apps",
      "UI/UX Design",
      "Digital Marketing",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen overflow-hidden flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(circle at center, #0f172a 0%, #020617 100%)",
      }}
      onPointerMove={(e) => {
        const rect = containerRef.current.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      {/* Animated gradient backgrounds */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Large animated gradient blob */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          animate={{
            background: [
              "radial-gradient(circle, rgba(56, 182, 255, 0.8) 0%, rgba(56, 182, 255, 0) 70%)",
              "radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(168, 85, 247, 0) 70%)",
              "radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, rgba(236, 72, 153, 0) 70%)",
              "radial-gradient(circle, rgba(56, 182, 255, 0.8) 0%, rgba(56, 182, 255, 0) 70%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Secondary animated gradient blob */}
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          animate={{
            background: [
              "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(236, 72, 153, 0) 70%)",
              "radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, rgba(16, 185, 129, 0) 70%)",
              "radial-gradient(circle, rgba(56, 182, 255, 0.6) 0%, rgba(56, 182, 255, 0) 70%)",
              "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(236, 72, 153, 0) 70%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Moving gradient particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 blur-xl"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, rgba(56, 182, 255, 0.6) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-blue-500/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto"
        style={{
          rotateX,
          rotateY,
        }}
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-8 px-6 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full text-sm font-medium text-blue-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Currently Available for Projects
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Digital Solutions
          </span>{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            That Drive Results
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl font-light mb-8 h-10 text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Expert{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            {text}
          </span>
          <Cursor cursorColor="#5eead4" />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I craft high-performance digital experiences that blend cutting-edge
          technology with strategic design to help businesses dominate their
          markets.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to={"contact"}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
          >
            <motion.button
              className="px-8 py-3.5 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </Link>

          <Link
            to={"services"}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
          >
            <motion.button
              className="px-8 py-3.5 text-lg font-semibold border-2 border-white/20 text-white hover:bg-white/5 rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Services
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
