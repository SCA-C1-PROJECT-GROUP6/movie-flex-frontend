//import { useState } from "react";
//import axios from "axios";
import TrailerButton from "../components/WatchTrailerBtn";

const Home = () => {
  const movieUrl = "https://www.youtube.com/watch?v=Al4LG2YUa3k";

  //   const [movies, setMovies] = useState([]);
  //   const [movieTitle, setMovieTitle] = useState("");

  //   const handleChange = (event) => {
  //     setMovieTitle(event.target.value);
  //   };
  //   const handleSearch = async () => {
  //     const apiKey = "669bd93a4a46a32cd284d7f88107c0dc";
  //     try {
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/movie/popular?Language=enUS&apikey=${apiKey}`
  //       );

  //       console.log(response.data);
  //       setMovies(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <TrailerButton url={movieUrl} />
      <h1>this is the home page</h1>

      {/*           
       <h1>hello</h1>
      <input
        type="text"
        value={movieTitle}
        onChange={handleChange}
        className="border-2"
      />
      <button onClick={handleSearch} className="bg-red-500 text-white">
        search movie
      </button>
      <div>
        {movies.map((item, index) => {
          return (
            <div key={index}>
              <video
                src={`https://www.youtube.com/watch?v=${item.videos.results.key}`}
                type="video/webm"
                poster={item.poster_path}
                width="350px"
                controls
              >
                <track
                  kind="subtitles"
                  src="src/deals/subtitle.vtt"
                  srcLang="en"
                  label="English"
                />
                <p>
                  Your browser does not support video tags here is a link to the
                  video
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${item.videos.results.key}`}
                  width="350px"
                >
                  link to video
                </a>
              </video>
            </div>
          );
        })}
      </div>  */}
    </>
  );
};
export default Home;
