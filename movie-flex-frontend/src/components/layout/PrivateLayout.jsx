import { Navigate, Outlet } from "react-router-dom";
import PrivateNavBar from "../PrivateNavBar";
import Footer from "../footer";
import SubNavbar from "../SubNavbar"
const PrivateLayout = () => {
  const auth = true;
  if (!auth) {
    return <Navigate to={"/login"} />;
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
