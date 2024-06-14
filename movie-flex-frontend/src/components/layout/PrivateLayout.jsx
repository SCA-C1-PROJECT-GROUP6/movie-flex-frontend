import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
import Navbar from "../Navbar";

const PrivateLayout = () => {
  const auth = UseAuth();
  if (!auth) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default PrivateLayout;
