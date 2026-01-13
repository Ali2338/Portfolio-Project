export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Let's Connect
      </h2>

      <p className="text-gray-600 dark:text-gray-300">
        Open to opportunities and collaborations.
      </p>

      <div className="mt-6 flex justify-center gap-6">
        <a href="mailto:mohammadali98999899@gmail.com"
          className="text-blue-600 dark:text-blue-400 hover:underline">
          Email
        </a>

        <a href="https://www.linkedin.com/in/mohammad-ali-5b6509258/"
          className="text-blue-600 dark:text-blue-400 hover:underline">
          LinkedIn
        </a>

        <a href="https://github.com/Ali2338"
          className="text-blue-600 dark:text-blue-400 hover:underline">
          GitHub
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        © 2026 Mohammad Ali
      </p>
    </section>
  );
}
