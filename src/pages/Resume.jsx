function ResumeSection({ title, children }) {
  return (
    <div className="flex flex-col gap-4 bg-violet-800 p-4 rounded-lg">
      {title && <h4 className="text-2xl font-semibold">{title}</h4>}
      {children}
    </div>
  );
}

export default function Resume() {
  const technicalSkills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "Bootstrap",
      "Tailwind",
      "JQuery",
      "React",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Relational Databases",
      "MongoDB",
      "Mongoose",
      "NoSQL",
      "Handlebars",
      "Java",
      "Go",
    ],
  };

  const projects = [
    {
      name: "Menu Match",
      links: {
        Repository: "https://github.com/jkellogg01/menu-match",
        Deployed: "https://jkellogg01.github.io/menu-match/",
      },
      role: [
        "API integration",
        "Client-side rendering",
        "Dynamic content Population",
        "Data Storage",
      ],
      description:
        "Menu match is a front-end web application which makes use of third-party APIs to aggregate data that would serve as useful to those looking to entertain at home.",
    },
    {
      name: "Dev Row Records",
      links: {
        Repository: "https://github.com/PRich57/dev-row-records",
        Deployed: "https://dev-row-records-63d750921ea0.herokuapp.com/",
      },
      role: [
        "Management of RESTful back-end API routing",
        "Database integration and manipulation",
      ],
      description:
        "Dev Row Records is a fictional record label invented for the purpose of demonstrating the functionality of a full-stack application, including a RESTful back-end API, the use of the Sequelize ORM to interface with a relational database system, and the use of handlebars templating in order to serve dynamic content to users.",
    },
  ];

  return (
    <div className="bg-violet-900 rounded-3xl p-4 max-w-prose text-xl flex flex-col gap-4">
      <ResumeSection>
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
      </ResumeSection>
      <ResumeSection title="Summary">
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
      </ResumeSection>
      <ResumeSection title="Technical Skills">
        <div>
          Front-end
          <ul className="flex flex-row flex-wrap items-center gap-2 pt-2">
            {technicalSkills.frontend.map((skill, index) => (
              <li
                className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all cursor-default"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          Back-end
          <ul className="flex flex-row flex-wrap items-center gap-2 pt-2">
            {technicalSkills.backend.map((skill, index) => (
              <li
                className="p-2 rounded-md bg-violet-600 hover:bg-violet-400 hover:text-2xl transition-all cursor-default"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </ResumeSection>
      <ResumeSection title="Projects">
        {/* In a stunning variation on a theme, I have a very legitimately cool idea for how to implement this but I just want to be done with this assignment more than anything else */}
        {projects.map((project, index) => (
          <div className="bg-violet-600 p-4 rounded-xl" key={index}>
            <div className="flex flex-row gap-4">
              <div>{project.name}</div>
              {Object.entries(project.links).map(([key, value], index) => (
                <a key={index} href={value} className="text-blue-400">
                  {key}
                </a>
              ))}
            </div>
            <div>
              Responsibilities:
              <ul>
                {project.role.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            <div>Description: {project.description}</div>
          </div>
        ))}
      </ResumeSection>
    </div>
  );
}
