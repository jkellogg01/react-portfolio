export default function About() {
  const imgPath = "/selfie.png"

  return (
    <figure className="flex flex-row justify-around items-start bg-violet-900 rounded-2xl">
      <img
        src={imgPath}
        alt="A photo of me (Joshua Kellogg)"
        className="max-h-96 aspect-[3/4] object-center rounded-l-2xl object-cover"
      />
      <div className="p-8" >
        <h3 className="text-4xl font-bold" >
          Hi, I'm Joshua Kellogg!
        </h3>
        <div className="max-w-md py-4 text-2xl">
          <p>I'm a full-stack web developer based out of Denver, Colorado!</p>
          <br />
          <p>When I'm not coding, I love to play & listen to music, and will try to catch a good show whenever I can!</p>
        </div>
      </div>
    </figure>
  )
}
