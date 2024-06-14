import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PrivateNavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    toast.success("Logout Successful", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: true,
    });
    navigate("/signin");
  };
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
          to={"/profile"}
          className="text-lg hover:text-red-400 px-1 py-2"
        >
          Profile
        </NavLink>
        <NavLink
          to={"/signin"}
          className="text-lg hover:text-red-400 px-1 py-2"
          onClick={handleLogout}
        >
          Logout
        </NavLink>
      </nav>
    </>
  );
};

export default PrivateNavBar;
