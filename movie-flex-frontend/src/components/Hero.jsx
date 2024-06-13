//import { useState } from "react";
import axios from "../utils/axiosInstanc";

const Hero = () => {
  //const [movies, setMovies] = useState([]);

  const movieSearch = async () => {
    try {
      const response = await axios.get("/movies/getallmovies");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={movieSearch}
          className="bg-primaryRed rounded-md py-2 px-2"
        >
          show Api call
        </button>
      </div>
    </>
  );
};

export default Hero;
