import { Navigate, Outlet } from "react-router-dom";
import PublicNavBar from "../PublicNavBar";
const PrivateLayout = () => {
  const auth = false;
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
