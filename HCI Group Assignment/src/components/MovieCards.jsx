// Component for making the movie cards

export default function movie({ movie }) {
  return (
    <div className="movie">
      <div>
        <img src={movie.image} className="movieimg" />
      </div>
      <div className="fsize">{movie.title}</div>
      <div>{movie.description}</div>
    </div>
  );
}
