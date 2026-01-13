import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
      year: "2022 - 2026",
      cgpa: "CGPA: 8.2 / 10", // change to your real CGPA
      desc: "Currently pursuing Bachelor's degree with focus on Full Stack Development, Data Analytics and AI applications."
    },
    {
      degree: "Higher Secondary (12th Standard)",
      institute: "Shree Sharda Higher Secondary School, Barnagar",
      year: "2021 - 2022",
      cgpa: "Percentage: 90.2%", // change to your marks
      desc: "Completed higher secondary education with specialization in Science stream."
    }
  ];

  return (
    <section id="education" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-400 transition"
          >
          
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {edu.degree}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {edu.institute}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {edu.year} • {edu.cgpa}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
