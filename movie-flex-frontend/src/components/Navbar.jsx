// import React from "react";
import Logo from "/logo.svg";
import SignIn from "../pages/SignIn.jsx"
const TopNavbar = () => {
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


// // import React from "react";
// import Logo from "/logo.svg";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook


// const TopNavbar = () => {
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const handleSignInClick = () => {
//     navigate("../pages/SignIn"); // Navigate to the "/signin" route when clicked
//   };

//   return (
//     <nav className="flex bg-gray-800 items-center p-4">
//       {/* Logo */}
//       <div className="">
//         <img src={Logo} alt="logo" className="" />
//       </div>

//       <div className="ml-auto flex items-center gap-20"> {/* Right-aligned container */}
//         <div className="relative flex items-center w-full"> {/* Search box container */}
//           <img
//             src="/search.svg"
//             alt="Search Icon"
//             className="w-5 h-3 absolute inset-y-1/2 left-3 -translate-y-1/2"
//           />
//           <input
//             type="text"
//             placeholder="Search movie"
//             className="bg-inherit text-white px-3 py-2 border border-red-600 rounded-full outline-none focus:ring-1 focus:ring-red-600 pl-10 w-full"
//           />
//           <img
//             src="/asterisk.svg"
//             alt="Asterisk Icon"
//             className="w-3 h-3 absolute inset-y-1/2 right-3 -translate-y-1/2"
//           />
//         </div>

//         <button // Use button instead of anchor tag for better behavior
//           onClick={handleSignInClick} // Call handleSignInClick on button click
//           className="flex items-center px-5 py-2 rounded-md hover:bg-red-900 text-white whitespace-nowrap"
//         >
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default TopNavbar;
