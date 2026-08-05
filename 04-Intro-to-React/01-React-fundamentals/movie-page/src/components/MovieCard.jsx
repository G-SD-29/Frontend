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
      {movie.poster && movie.poster !== "N/A" && (
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-card__poster"
        />
      )}
      <p className="movie-card__meta">
        {movie.year} · {movie.genre}
      </p>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
      {movie.rating >= 8 && <span className="badge">Top rated</span>}
      <p>{movie.watched ? "Already watched" : "Watchlist"}</p>
      <div className="movie-card__actions">
        <button onClick={handleSaveClick}>Save movie</button>
        <button onClick={handleToggleWatchedClick}>Toggle watched</button>
      </div>
    </article>
  );
}

export default MovieCard;
