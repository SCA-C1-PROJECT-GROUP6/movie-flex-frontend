const Rating = () => {
  const starRate = "https://i.imgur.com/Fh28ri7.png";

  const handleRating = () => {};

  return (
    <>
      <img
        src={starRate}
        alt="rating star"
        className="w-8 h-8"
        onClick={handleRating}
      />
    </>
  );
};

export default Rating;
