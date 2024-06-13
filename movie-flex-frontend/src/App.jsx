import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import SignUp from "./pages/SingUp";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <SignUp /> */}
       <Home /> 
      <ToastContainer />
    </>
  );
}

export default App;
