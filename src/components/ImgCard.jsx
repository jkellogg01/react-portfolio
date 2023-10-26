export default function ImageCard({ title, children, imgPath = "https://placehold.co/500", imgAlt = "No alt text provided" }) {
  return (
    <figure className="flex flex-col lg:flex-row justify-start items-start bg-violet-900 rounded-2xl">
      <img
        src={imgPath}
        alt={imgAlt}
        className="lg:max-h-96 aspect-video lg:aspect-[3/4] object-center object-cover max-lg:rounded-t-2xl lg:rounded-l-2xl"
      />
      <div className="p-8 lg:h-full w-full" >
        <h3 className="text-4xl font-bold" >
          {title}
        </h3>
        <div className="max-w-md py-4 text-2xl h-full">
          {children}
        </div>
      </div>
    </figure>
  )
}

