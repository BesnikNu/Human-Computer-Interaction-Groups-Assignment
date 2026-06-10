import MovieCards from "./MovieCards";

export default function Movies({ movies }) {
  return (
    <>
      <div className="typeofmovie">
        <h1 className="fonts">Featured</h1>
      </div>
      <div className="flex fonts">
        {movies.slice(0, 7).map((movie, index) => (
          <MovieCards key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}
