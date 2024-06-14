import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  return (
    <nav className="cursor-pointer flex justify-evenly text-white p-4">
         <NavLink to={"/"} className="text-xl hover:text-red-400 px-1 py-2">
          Home
        </NavLink>
        <NavLink to={"/"} className="text-xl hover:text-red-400 px-1 py-2">
          Tv Shows
        </NavLink>
        <NavLink to={"/"} className="text-xl hover:text-red-400 px-1 py-2">
          Movies
        </NavLink>
        <NavLink to={"/"} className="text-xl hover:text-red-400 px-1 py-2">
          Latest
        </NavLink>
        <NavLink to={"/"} className="text-xl hover:text-red-400 px-1 py-2">
          My Lists
        </NavLink>
    </nav>
  );
};

export default MainNavbar;
