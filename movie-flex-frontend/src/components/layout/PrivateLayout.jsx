import { Navigate, Outlet } from "react-router-dom";
import PrivateNavBar from "../PrivateNavBar";
import { UseAuth } from "../context/AuthContext";
const PrivateLayout = () => {
  const auth = UseAuth();
  if (!auth) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <>
      <PrivateNavBar />
      <Outlet />
    </>
  );
};
export default PrivateLayout;
