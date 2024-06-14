import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "./components/layout/PrivateLayout";
import PublicLayout from "./components/layout/PublicLayout";
import SignUp from "./pages/SingUp";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import NavContext from "./components/context/NavContext";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <NavContext.Provider value={{ searchValue, handleSearchValueChange }}>
        <Navbar />
        <Routes>
          <Route element={<PrivateLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="details"
              element={<Home searchValue={searchValue} />}
            />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route element={<PublicLayout />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </NavContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
