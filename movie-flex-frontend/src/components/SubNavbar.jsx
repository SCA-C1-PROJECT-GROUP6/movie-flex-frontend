// import React from "react";

const MainNavbar = () => {
  return (
    <nav className="cursor-pointer text-white p-4">
      <ul className="flex justify-evenly">
        <li>
          <a className="text-xl hover:text-red-400 px-3 py-2">Home</a>
        </li>
        <li>
          <a className="text-xl hover:text-red-400 px-3 py-2">Tv Shows</a>
        </li>
        <li>
          <a className="text-xl hover:text-red-400 px-3 py-2">Movies</a>
        </li>
        <li>
          <a className="text-xl hover:text-red-400 px-3 py-2">Latest</a>
        </li>
        <li>
          <a className="text-xl hover:text-red-400 px-3 py-2">My List</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
