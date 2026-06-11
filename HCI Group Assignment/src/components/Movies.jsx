// Component for making a row of movie cards

import MovieCards from "./MovieCards";

export default function Movies({ movies, start, end, h }) {
  let x = start;
  let y = end;
  return (
    <>
      <div className="typeofmovie">
        <h1 className="fonts">{h}</h1>
      </div>
      <div className="flex fonts">
        {movies.slice(x, y).map((movie, index) => (
          <MovieCards key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}
