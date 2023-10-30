import ImageCard from "../components/ImgCard";

export default function Projects() {
  // TODO: Pick all of the projects to feature
  // TODO: Get screenshots of all of the featured projects
  // TODO: Link to deployed repos and (if applicable) deployed sites
  const projects = [
    {
      name: "Sunny",
      description:
        "Definitely the only CLI weather solution that's ever been made",
      links: {
        Repository: "https://github.com/jkellogg01/sunny",
      },
      image: {
        uri: "sunny.png",
        alt: "A screenshot of the weather in london provided by sunny",
      },
    },
    {
      name: "Menu Match",
      description: "A party planner's recipe app",
      links: {
        Repository: "https://github.com/jkellogg01/menu-match",
        Deployed: "https://jkellogg01.github.io/menu-match/",
      },
      image: {
        uri: "menu-match.png",
        alt: "A screenshot of the menu match landing page",
      },
    },
    {
      name: "Dev Row Records",
      description: "The coolest label you've never heard of",
      links: {
        Repository: "https://github.com/PRich57/dev-row-records",
        Deployed: "https://dev-row-records-63d750921ea0.herokuapp.com/",
      },
      image: {
        uri: "dev-row-records.png",
        alt: "A screenshot of the dev row records landing page",
      },
    },
    {
      name: "Stopwatch",
      description: "A nice-looking stopwatch",
      links: {
        Repository: "https://github.com/jkellogg01/stopwatch-project",
        Deployed: "https://jkellogg01.github.io/stopwatch-project/",
      },
      image: {
        uri: "stopwatch.png",
        alt: "A screenshot of the stopwatch app",
      },
    },
    {
      name: "Employee Tracker API",
      description: "An API layer for keeping track of employees in a company",
      links: {
        Repository: "https://github.com/jkellogg01/employee-tracker",
      },
    },
    {
      name: "Social Media API",
      description: "A functional RESTful back-end API for a social media site",
      links: {
        Repository: "https://github.com/jkellogg01/social-media-api",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-16">
      {projects.map(({ name, description, links, image }, index) => (
        <ImageCard
          key={index}
          title={name}
          imgPath={image ? image.uri : null}
          imgAlt={image ? image.alt : null}
        >
          <div className="h-full flex flex-col items-left justify-between pb-4">
            <p>{description}</p>
            {links && (
              <div className="flex flex-row justify-end gap-4">
                {Object.entries(links).map(([key, value], index) => (
                  <a
                    key={index}
                    href={value}
                    target="_blank"
                    className="py-2 px-4 bg-violet-600 hover:bg-violet-400 rounded-lg"
                  >
                    {key}
                  </a>
                ))}
              </div>
            )}
          </div>
        </ImageCard>
      ))}
    </div>
  );
}
