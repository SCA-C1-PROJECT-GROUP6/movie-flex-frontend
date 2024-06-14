import { Navigate, Outlet } from "react-router-dom";
import PublicNavBar from "../PublicNavBar";
import { UseAuth } from "../context/AuthContext";

const PrivateLayout = () => {
  const auth = UseAuth();
  if (auth) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <PublicNavBar />
      <Outlet />
    </>
  );
};
export default PrivateLayout;
