import { useContext, useState, useEffect } from "react";
import axios from "../utils/axiosInstanc";

import NewOnMF from "../components/NewOnMF";
import NavContext from "../components/context/NavContext";
import WatchTrailerBtn from "../components/WatchTrailerBtn";

import "./Home.css";

const Home = () => {
  const { searchValue } = useContext(NavContext);

  const [movie, setMovie] = useState("");

  useEffect(() => {
    const movieSearch = async () => {
      try {
        const response = await axios.get(`/movies/search?q=${searchValue}`);
        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    movieSearch();
  });

  return (
    <>
      <div className="text-white flex justify-center g-4">
        <div className="mt-4 w-full h-full object-cover px-3">
          <img
            src={movie.posterImg}
            alt="img poster"
            className="w-42 h-34  hover:bg-black hover:opacity-60 transition-opacity duration-200 ease-in-out"
          />
          <div className="">
            <h2 className="m-2">{movie.title}</h2>
            <WatchTrailerBtn className="m-2" url={movie.trailer} />
          </div>
        </div>
      </div>
      <NewOnMF />
    </>
  );
};
export default Home;
