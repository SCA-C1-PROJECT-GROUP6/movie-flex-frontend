import { useState } from "react";
import Logo from "/logo.svg";
import axios from "../utils/axiosInstanc";
import WatchTrailerBtn from "../components/WatchTrailerBtn";
import PrivateNavBar from "./PrivateNavBar";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("The dark Knight");
  const [movie, setMovie] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const movieSearch = async () => {
      try {
        const response = await axios.get(`/movies/search?query=${inputValue}`);
        console.log(response.data[0]);
        setMovie(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    movieSearch();
  };
  const handleClear = () => {
    setInputValue("");
  };
  return (
    <>
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
      <PrivateNavBar className="mt-2" />
      <div className="text-white w-38 mt-8">
        {movie && (
          <div className="mt-2 flex justify-center">
            <div>
              <img
                src={movie.posterImg}
                alt="img poster"
                className="w-80 h-64 mx-auto hover:bg-black hover:opacity-60 transition-opacity duration-200 ease-in-out"
              />
            </div>
            <div className="mx-auto text-center flex flex-col w-34">
              <h2 className="m-2">{movie.title}</h2>
              <div>
                <h3>Actors:</h3>
                <ul>
                  <li>{movie.actor}</li>
                  <li>{movie.actor}</li>
                  <li>{movie.actor}</li>
                </ul>
              </div>
              <p className="line-clamp-2 overflow-hidden text-ellipsis">{""}</p>
              <WatchTrailerBtn className="text-left" url={movie.trailer} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
