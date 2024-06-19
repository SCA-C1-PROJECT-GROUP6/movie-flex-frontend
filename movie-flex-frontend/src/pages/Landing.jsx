import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="max-w-xl mx-auto flex  flex-col justify-center mt-16">
        <h1 className="text-3xl">Welcome to MovieFlex, Rate and Review</h1>
        <h2 className="text-2xl text-center mt-4">Your favorite movies</h2>
        <h3 className="text-lg mt-8 text-center text-red-300">
          <span className="text-blue-300 mr-4 ">Get started</span> by
          <Link to={"/signup"}> signing up</Link>
        </h3>
      </div>
    </>
  );
};

export default Landing;
