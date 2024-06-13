import { Navigate, Outlet } from "react-router-dom";
import PublicNavBar from "../PublicNavBar";
const PrivateLayout = () => {
  const auth = true;
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
