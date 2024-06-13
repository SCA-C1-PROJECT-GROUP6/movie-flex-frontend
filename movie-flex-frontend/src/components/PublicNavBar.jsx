import { NavLink } from "react-router-dom";

const PublicNavBar = () => {
  return (
    <>
      <nav>
        <NavLink to={"/sign-in"}>Sign In</NavLink>
        <NavLink to={"/sign-up"}>Sign Up</NavLink>
      </nav>
    </>
  );
};

export default PublicNavBar;
