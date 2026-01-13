import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    Programming_Languages: ["JavaScript", "Python", "Java", "SQL"],
    frontend: ["React.js", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Power BI"]
  };

  const categories = [
    { title: "Languages", data: skills.Programming_Languages },
    { title: "Frontend", data: skills.frontend },
    { title: "Backend", data: skills.backend },
    { title: "Tools", data: skills.tools }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {cat.data.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
