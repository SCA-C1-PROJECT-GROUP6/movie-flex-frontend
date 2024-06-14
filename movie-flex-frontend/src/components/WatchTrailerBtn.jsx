import PropTypes from "prop-types";

const TrailerButton = ({ url }) => {
  const handleWatchClick = () => {
    if (url) {
      window.location.href = url;
    } else {
      alert("URL is not provided or invalid");
    }
  };

  return (
    <button
      className="mx-auto block my-3  bg-red-800 text-white px-8 py-1 rounded-md hover:bg-red-950"
      onClick={handleWatchClick}
    >
      Watch Trailer
    </button>
  );
};

TrailerButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default TrailerButton;
