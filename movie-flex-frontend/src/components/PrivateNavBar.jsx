import { NavLink } from "react-router-dom";

const PrivateNavBar = () => {
  return (
    <>
      <nav className="cursor-pointer text-white flex justify-evenly">
        <NavLink to={"/"} className="text-lg hover:text-red-400 px-1 py-2">
          Home
        </NavLink>
        <NavLink
          to={"/details"}
          className="text-lg hover:text-red-400 px-1 py-2"
        >
          TV Shows
        </NavLink>
        <NavLink
          to={"/profile"}
          className="text-lg hover:text-red-400 px-1 py-2"
        >
          Movies
        </NavLink>
        <NavLink
          to={"/logout"}
          className="text-lg hover:text-red-400 px-1 py-2"
        >
          Latest
        </NavLink>
        <NavLink
          to={"/logout"}
          className="text-lg hover:text-red-400 px-1 py-2"
        >
          Profile
        </NavLink>
        <NavLink
          to={"/logout"}
          className="text-lg hover:text-red-400 px-1 py-2"
        >
          Logout
        </NavLink>
      </nav>
    </>
  );
};

export default PrivateNavBar;
