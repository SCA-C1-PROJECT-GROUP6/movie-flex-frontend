import { Navigate, Outlet } from "react-router-dom";
import PrivateNavBar from "../PrivateNavBar";
import Footer from "../footer";
import SubNavbar from "../SubNavbar"
import { UseAuth } from "../context/AuthContext";
const PrivateLayout = () => {
  const auth = UseAuth();
  if (!auth) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <>
      <PrivateNavBar />
      <SubNavbar/>
      <Footer/>
      <Outlet />
    </>
  );
};
export default PrivateLayout;
