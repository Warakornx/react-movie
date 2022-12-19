import React from "react";
import Prices from "./Prices.jsx"
import Shops from "./Shops.jsx";
const Movie = ({movie}) => {
  return (
    <div className="movies">
      <h5>{movie.title}</h5>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
      <div className="price-shop">
      <Prices />
      <Shops />
      </div>
    </div>
  );
};
export default Movie;