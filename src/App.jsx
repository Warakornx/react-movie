import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie.jsx";
import Search from "./components/Search.jsx";


const App = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=fbbf23571f50f853ad454ad3521da05c&language=en-US&page=1";
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

  const [popular, setPopular] = useState([]);

  return (
    <div className="App">
      <div className="header-logo" >
        <h1>Movie-Chicken</h1>
        <Search />
      </div>
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default App;