export default function SocialLinks() {
  return (
    <>
      <ul className="flex flex-row justify-around gap-4 max-h-8">
        <li>
          <a href="">
            <img className="h-full w-full" src="github-mark-white.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="h-full w-full" src="LinkedIn-icon-wb.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img
              className="h-full w-full"
              src="twitter-logo-white.svg"
              alt=""
            />
          </a>
        </li>
      </ul>
    </>
  );
}
