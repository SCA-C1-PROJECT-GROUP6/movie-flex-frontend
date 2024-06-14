import { useState, useEffect } from "react";
import axios from "../utils/axiosInstanc";
import WatchTrailerBtn from "./WatchTrailerBtn";

const NewOnMF = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieSearch = async () => {
      try {
        const response = await axios.get("/movies/getallmovies");
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    movieSearch();
  }, []);

  return (
    <>
    
      <section>
        <h1 className="text-2xl px-1 py-2">New on MovieFlex</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6">
          {movies.map((item, index) => {
            return (
              <div
                key={index}
                className="  mt-4 w-full h-full object-cover px-3"
              >
                <img
                  src={item.posterImg}
                  alt="img poster"
                  className="w-30 h-30  hover:bg-black hover:opacity-60 transition-opacity duration-200 ease-in-out"
                />
                <div className=" bg-[#282525] w-38 -mt-2 pb-2 rounded-md">
                  <h2 className="m-2">{item.title}</h2>
                  <WatchTrailerBtn className="m-2" url={item.trailer} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NewOnMF;
