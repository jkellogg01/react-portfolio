export default function Resume() {
  return (
    <div className="bg-violet-900 rounded-3xl p-8 max-w-prose">
      <div className="flex flex-col gap-4">
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
    </div>
  );
}
