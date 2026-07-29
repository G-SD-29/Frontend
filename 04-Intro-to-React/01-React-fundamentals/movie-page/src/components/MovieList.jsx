import MovieCard from "./MovieCard.jsx";

function MovieList({ movies, onSaveMovie, onToggleWatched }) {
  // im Falle einer leeren Liste können wir die Funktion frühzeitig beenden
  // und eine Nachricht anzeigen
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSaveMovie={onSaveMovie}
          onToggleWatched={onToggleWatched}
        />
      ))}
    </section>
  );
}

export default MovieList;
