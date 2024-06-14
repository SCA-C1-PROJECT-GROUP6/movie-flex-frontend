import { useState, useContext } from "react";
import Logo from "/logo.svg";
import NavContext from "./context/NavContext";

//import SignIn from "../pages/SignIn.jsx"
const Navbar = () => {
  const [inputValue, setInputValue] = useState("Joker");

  const { handleSearchValueChange } = useContext(NavContext);
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    handleSearchValueChange(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  const handleClear = () => {
    setInputValue("");
  };
  return (
    <nav className=" flex">
      <div className="">
        <img src={Logo} alt="logo" className="" />
      </div>

      <div className="ml-auto flex items-center gap-20">
        <div className="relative flex items-center w-full">
          <img
            src="/search.svg"
            alt="Search Icon"
            className="w-5 cursor-pointer h-3 absolute inset-y-1/2 left-3 -translate-y-1/2"
            onClick={handleSubmit}
          />
          <input
            type="text"
            placeholder="Search movie"
            className="bg-inherit text-white px-3 py-2 border border-red-600 rounded-full  outline-none focus:ring-1 focus:ring-red-600 pl-10 w-full"
            onChange={handleChange}
            value={inputValue}
          />
          <img
            onClick={handleClear}
            src="/asterisk.svg"
            alt="Asterisk Icon"
            className="w-3 h-3 cursor-pointer absolute inset-y-1/2 right-3 -translate-y-1/2"
          />
        </div>
        <button
          className="md:-ml-16 text-white bg-red-900 px-4 py-1 rounded-md"
          onClick={handleSubmit}
        >
          Search
        </button>

        <a className=" cursor-pointer flex items-center px-5 py-2 rounded-md hover:bg-red-900 text-white whitespace-nowrap">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
