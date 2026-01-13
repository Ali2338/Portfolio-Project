import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Personel Expense Tracker Web App",
      desc: "MERN app with OTP auth, expense tracking and analytics dashboard.",
      tech: "• React • Node • MongoDB",
      github: "https://github.com/Ali2338/Expense-tracker",
      live: "https://expense-tracker-nine-weld-38.vercel.app"
    },
    {
      title: "AI Interview Preparation Platform",
      desc: "AI-powered interview question practice with smart sessions.",
      tech: "• React • Node • MongoDB • AI APIs",
      github: "https://github.com/Ali2338/Interview-prep",
      live: ""
    },
    {
      title: "Retail Customer Behaviour Analysis",
      desc: "Data analytics project with visualization and insights.",
      tech: "• Python • Pandas • SQL • Power BI",
      github: "https://github.com/Ali2338/Customer_Behavior_Analysis",
      live: ""
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{p.desc}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-4">{p.tech}</p>

              <div className="flex gap-4 mt-6">
                <a href={p.github} target="_blank"
                  className="px-4 py-2 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition">
                  GitHub
                </a>

                {p.live && (
                  <a href={p.live} target="_blank"
                    className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
