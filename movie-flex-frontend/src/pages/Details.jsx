import { useState, useEffect } from 'react';
import axios from 'axios';

const Details = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  // useEffect(() => {
  //   // Mocked data
  //   const mockMovies = [
  //     {
  //       id: 1,
  //       title: "Movie Title 1",
  //       posterUrl: "./logo.svg",
  //       likes: 100,
  //       dislikes: 5,
  //       appRating: 4.5,
  //       viewerRating: 4.7,
  //       description: "Movie description 1",
  //       comments: [
  //         {
  //           user: "User1",
  //           text: "Great movie!"
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       title: "Movie Title 2",
  //       posterUrl: "./IMG_4986.jpeg",
  //       likes: 200,
  //       dislikes: 15,
  //       appRating: 4.8,
  //       viewerRating: 4.9,
  //       description: "Movie description 2",
  //       comments: [
  //         {
  //           user: "User2",
  //           text: "Amazing!"
  //         }
  //       ]
  //     },
  //     // Add more mock movies as needed
  //   ];

  //   setMovies(mockMovies);
  // }, []);

  // const handleNext = () => {
  //   setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  // };

  // const handlePrevious = () => {
  //   setCurrentMovieIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  // };

  // const handleLike = () => {
  //   const updatedMovies = movies.map((movie, index) =>
  //     index === currentMovieIndex ? { ...movie, likes: movie.likes + 1 } : movie
  //   );
  //   setMovies(updatedMovies);
  // };

  // const handleDislike = () => {
  //   const updatedMovies = movies.map((movie, index) =>
  //     index === currentMovieIndex ? { ...movie, dislikes: movie.dislikes + 1 } : movie
  //   );
  //   setMovies(updatedMovies);
  // };

  // if (!movies.length) {
  //   return <div>Loading...</div>;
  // }

  // const currentMovie = movies[currentMovieIndex];

  
  useEffect(() => {
    axios.get('http://localhost:9000/api/movies/getallmovies')
      .then(response => {
        if (Array.isArray(response.data)) {
          setMovies(response.data);
        } else {
          console.error('Fetched data is not an array:', response.data);
        }
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleNext = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrevious = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  const handleLike = () => {
    const currentMovie = movies[currentMovieIndex];

    axios.post(`/api/movies/${currentMovie.id}/like`)
      .then(response => {
        const updatedMovie = response.data;

        const updatedMovies = movies.map((movie, index) => 
          index === currentMovieIndex ? { ...movie, likes: updatedMovie.likes } : movie
        );

        setMovies(updatedMovies);
      })
      .catch(error => console.error('Error liking the movie:', error));
  };

  const handleDislike = () => {
    const currentMovie = movies[currentMovieIndex];

    axios.post(`/api/movies/${currentMovie.id}/dislike`)
      .then(response => {
        const updatedMovie = response.data;

        const updatedMovies = movies.map((movie, index) => 
          index === currentMovieIndex ? { ...movie, dislikes: updatedMovie.dislikes } : movie
        );

        setMovies(updatedMovies);
      })
      .catch(error => console.error('Error disliking the movie:', error));
  };

  if (!movies.length) {
    return <div>Loading...</div>;
  }

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-2/4">
        <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
          &#9664;
        </button>
        <img src={currentMovie.posterUrl} alt={currentMovie.title} className="w-ful h-96" />
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
          &#9654;
        </button>

        <div className="flex mt-4">
          <div className="flex flex-col items-start mr-8">
            <h2 className="text-2xl font-bold">{currentMovie.title}</h2>
            <div className="flex items-center mt-2">
              <button onClick={handleLike} className="mr-2">&#128077; {currentMovie.likes}</button>
              <button onClick={handleDislike}>&#128078; {currentMovie.dislikes}</button>
            </div>
            <div className="mt-2">
              <p>App Rating: {currentMovie.appRating}</p>
              <p>Viewer Rating: {currentMovie.viewerRating}</p>
            </div>
            <p className="mt-2">{currentMovie.description}</p>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex flex-col">
        <h3 className="text-xl font-semibold">Up Next</h3>
        <ul className="space-y-2">
          {movies.map((movie, index) => (
            index !== currentMovieIndex && (
              <li key={index} className="text-gray-600">{movie.title}</li>
            )
          ))}
        </ul>
      </div>

      {/* <div className="mt-8 w-full max-w-2xl">
        <h3 className="text-xl font-semibold">Comments</h3>
        <form className="flex flex-col space-y-2 mt-4">
          <textarea placeholder="Add a comment..." className="w-full p-2 rounded-md border border-gray-300"></textarea>
          <button type="submit" className="self-end bg-blue-500 text-white py-2 px-4 rounded-md">Post Comment</button>
        </form>
        <div className="mt-4 space-y-4">
          {currentMovie.comments.map((comment, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-md">
              <p>{comment.text}</p>
              <p className="text-sm text-gray-500">- {comment.user}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Details;
