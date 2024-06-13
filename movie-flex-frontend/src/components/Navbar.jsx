// import React from "react";
import Logo from "/logo.svg";
import SignIn from "../pages/SignIn.jsx"
const TopNavbar = () => {
    return (
        <nav className=" flex">
            <div className="">
                <a href="">
                    <img src={Logo} alt="logo" className="" />
                </a>
            </div>
            <div className="ml-auto flex items-center gap-20">
                <div className="relative flex items-center w-full">
                    <img
                        src="/search.svg"
                        alt="Search Icon"
                        className="w-5 h-3 absolute inset-y-1/2 left-3 -translate-y-1/2"
                    />
                    <input
                        type="text"
                        placeholder="Search movie"
                        className="bg-inherit text-white px-3 py-2 border border-red-600 rounded-full  outline-none focus:ring-1 focus:ring-red-600 pl-10 w-full"
                    />
                    <img
                        src="/asterisk.svg"
                        alt="Asterisk Icon"
                        className="w-3 h-3 absolute inset-y-1/2 right-3 -translate-y-1/2"
                    />
                </div>

                <a href={SignIn} className="flex items-center px-5 py-2 rounded-md hover:bg-red-900 text-white whitespace-nowrap">
                    Sign In
                </a>
            </div>
        </nav>
    );
};

export default TopNavbar;
