import { useState, useEffect } from "react";
import Logo from "/logo.svg";
import axios from "../utils/axiosInstanc";
import WatchTrailerBtn from "../components/WatchTrailerBtn";
import PrivateNavBar from "./PrivateNavBar";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
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
  useEffect(() => {
    const fetchDefaultMovie = async () => {
      try {
        const response = await axios.get(
          `/movies/search?query=The dark Knight`
        );
        setMovie(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDefaultMovie();
  }, []);
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
          <div className="mt-2 flex justify-center g-34">
            <div>
              <img
                src={movie.posterImg}
                alt="img poster"
                className=" cursor-pointer adjust-width ml-8 hover:bg-black hover:opacity-60 transition-opacity duration-200 ease-in-out"
              />
            </div>
            <div className="text-left ml-20 flex flex-col ">
              <h2 className="m-2 text-left">
                <span className="text-red-600">Title:</span> {movie.title}
              </h2>
              <div className="flex flex-col">
                <ul className="flex text-left">
                  <span className="text-red-600 text-left">Actors:</span>
                  <li className="ml-2"> {movie.actors[0]}, </li>
                  <li className="ml-2"> {movie.actors[1]}, </li>
                  <li className="ml-2"> {movie.actors[2]}, </li>
                </ul>
                <p className=" mt-2 line-clamp-2 overflow-hidden text-ellipsis ">
                  <span className="text-red-600 text-left">Description:</span>{" "}
                  {movie.description}
                </p>
                <Rating />
                <p className="text-white">
                  <span className="text-red-600">Rating: </span>
                  {movie.averageRating}
                </p>
                <p className="text-white">
                  <span className="text-red-600">Reviews: </span>
                  {movie.reviews[0].review}
                </p>
                <div className="flex mt-2">
                  <Link to={"/details"}>
                    <button className="mx-auto block my-3  bg-red-800 text-white px-8 py-1 rounded-md hover:bg-red-950">
                      See details
                    </button>
                  </Link>
                  <WatchTrailerBtn url={movie.trailer} />
                </div>
              
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
