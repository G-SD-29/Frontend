function MovieStatus({ watched }) {
  return <p> {watched ? "Already watched" : "Watchlist"}</p>;
}

function MovieCard({ movie, onSaveMovie, onToggleWatched }) {
  function handleSaveClick() {
    onSaveMovie(movie.id);
  }
  function handleToggleWatchedClick() {
    onToggleWatched(movie.id);
  }

  return (
    <article
      className={`movie-card ${movie.watched ? "movie-card--watched" : ""}`}
    >
      <p className="movie-card__meta">
        {movie.year} {movie.genre}
      </p>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
      {movie.rating > 8 && <span className="badge">Top rated</span>}
      <MovieStatus watched={movie.watched} />
      <button onClick={handleSaveClick}>Save movie</button>
      <button onClick={handleToggleWatchedClick}>Toggle watched</button>
    </article>
  );
}

export default MovieCard;

/* <button onclick="handleClick()">Save</button> in HTML
<button onClick={handleClick()}>Save</button> in JSX */
