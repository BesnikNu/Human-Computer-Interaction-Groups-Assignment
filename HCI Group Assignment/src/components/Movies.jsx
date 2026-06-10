import MovieCards from "./MovieCards";

export default function Movies({ movies }) {
  return (
    <>
      <div>
        <h1>Featured</h1>
      </div>
      <div className="flex">
        {movies.slice(0, 7).map((movie, index) => (
          <MovieCards key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}