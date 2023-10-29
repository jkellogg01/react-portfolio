export default function Resume() {
  return (
    <div className="bg-violet-900 rounded-3xl p-4 max-w-prose text-xl flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-violet-800 p-4 rounded-lg">
        <h3 className="text-3xl font-semibold">Joshua Kellogg</h3>
        <div className="flex flex-row gap-4">
          <a
            href="mailto:kellogg.20.joshua@gmail.com"
            className="bg-violet-400 hover:bg-violet-600 rounded-lg p-2"
            target="_blank"
          >
            kellogg.20.joshua@gmail.com
          </a>
          <div className="bg-violet-600 rounded-lg p-2">(720) 441-8268</div>
          <div className="bg-violet-600 rounded-lg p-2">Aurora, Colorado</div>
        </div>
        <div className="flex flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/joshua-kellogg-a55402294/"
            className="bg-violet-400 hover:bg-violet-600 rounded-lg p-2"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jkellogg01"
            className="bg-violet-400 hover:bg-violet-600 rounded-lg p-2"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-violet-800 p-4 rounded-lg">
        <h4 className="text-2xl font-semibold">Summary</h4>
        <p>
          Entry-level full-stack developer seeking opportunities for growth
          within the field of back-end web development.
        </p>
        <p>Seeking remote or in-person roles; willing to relocate.</p>
        <div>
          Recognized by colleagues for:
          <ul className="flex flex-row gap-2 py-2">
            <li className="p-2 rounded-md bg-violet-600">
              Effective communication
            </li>
            <li className="p-2 rounded-md bg-violet-600">
              Attention to detail
            </li>
            <li className="p-2 rounded-md bg-violet-600">Positive outlook</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-violet-800 p-4 rounded-lg">
        <h4>Technical Skills</h4>
        <div>
          Front-end
          <ul className="flex flex-row flex-wrap items-center gap-2 pt-2">
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              HTML
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              CSS
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              JavaScript
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              AJAX
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              Bootstrap
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              JQuery
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              React
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              Tailwind
            </li>
          </ul>
        </div>
        <div>
          Back-end
          <ul className="flex flex-row flex-wrap items-center gap-2 pt-2">
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              Node
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              Express
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              SQL
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              Sequelize
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              Handlebars
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              Java
            </li>
            <li className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all">
              Go
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
