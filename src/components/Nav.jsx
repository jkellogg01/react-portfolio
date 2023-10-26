import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {

  const navLinks = {
    About: "/",
    Resume: "/resume",
    Projects: "/projects",
    Contact: "/contact",
  }

  const [currentPage, setCurrentPage] = useState(location.pathname)

  return (
    <nav className="flex flex-row items-center gap-4 ">
      {Object.entries(navLinks).map(([name, path], index) => (
        <Link
          to={path}
          key={index}
          className={`flex-auto text-xl hover:text-2xl cursor-pointer ${currentPage === path ? "bg-violet-600" : ""} hover:bg-violet-400 py-2 px-3 transition-all duration-300 rounded-lg`}
          onClick={() => setCurrentPage(path)}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};
