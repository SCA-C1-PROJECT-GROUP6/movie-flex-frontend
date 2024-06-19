import { NavLink } from "react-router-dom";

const PublicNavBar = () => {
  return (
    <>
      <nav className="cursor-pointer text-white flex justify-evenly mt-8 ">
        <NavLink
          to={"/signin"}
          className="text-lg hover:text-red-400 px-4 rounded-md py-1 bg-primaryRed hover:bg-black"
        >
          Sign In
        </NavLink>
        <NavLink
          to={"/signup"}
          className="text-lg hover:text-red-400 px-4 py-1 rounded-md border border-primaryRed hover:bg-primaryRed"
        >
          Sign Up
        </NavLink>
      </nav>
    </>
  );
};

export default PublicNavBar;
