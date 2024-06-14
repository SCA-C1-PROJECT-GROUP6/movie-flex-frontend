import { NavLink } from "react-router-dom";

const PublicNavBar = () => {
  return (
    <>
      <nav className="cursor-pointer text-white flex justify-evenly">
        <NavLink to={"/signin"} className="text-white">
          Sign In
        </NavLink>
        <NavLink to={"/signup"} className="text-white">
          Sign Up
        </NavLink>
      </nav>
    </>
  );
};

export default PublicNavBar;
