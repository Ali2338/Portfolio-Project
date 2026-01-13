import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I am a B.Tech CSE student specializing in Full Stack Development and Data Analytics. 
          I have hands-on experience building practical projects such as a Smart Expense Tracker, 
          an AI Interview Preparation Platform, and a Retail Customer Behaviour Analysis system. 
          I am passionate about developing efficient solutions, enhancing user experience, and 
          continuously improving my technical and problem-solving skills.
        </p>
      </motion.div>
    </section>
  );
}
