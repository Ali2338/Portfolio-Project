import { motion } from "framer-motion";
import profile from "../assets/Profile.png";
; // adjust extension if png

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center 
      bg-gradient-to-b from-white to-gray-100 
      dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
              Mohammad Ali
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Full Stack MERN Developer • Data Analytics Enthusiast
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profile}
            alt="Mohammad Ali"
            className="w-52 h-52 md:w-72 md:h-72 rounded-full 
            object-cover object-[center_15%]
            border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
