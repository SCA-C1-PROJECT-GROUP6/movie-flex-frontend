import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "./components/layout/PrivateLayout";
import PublicLayout from "./components/layout/PublicLayout";
import SignUp from "./pages/SingUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
