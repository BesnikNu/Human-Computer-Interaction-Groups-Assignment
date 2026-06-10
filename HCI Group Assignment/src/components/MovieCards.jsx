export default function movie ({movie}) {

    return (
        <div className="movie">
            <div><img src={movie.image}/></div>
            <div>{movie.title}</div>
            <div>{movie.description}</div>
        </div>
    );
    
}