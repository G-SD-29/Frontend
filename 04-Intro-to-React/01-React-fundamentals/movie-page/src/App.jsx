import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MovieList from "./components/MovieList.jsx";
import SearchForm from "./components/SearchForm.jsx";
import { movies as initialMovies } from "./data/movies.js";
import "./App.css";
import AddMovieForm from "./components/AddMovieForm.jsx";

function App() {
  // const watchedMovies = movies.filter((movie) => movie.watched);
  // const topRatedMovies = movies.filter((movie) => movie.rating >= 8);
  // const sortedTopRatedMovies = [...topRatedMovies].sort((a, b) => {
  //   return b.rating - a.rating;
  // });

  const [savedCount, setSavedCount] = useState(0);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showWatchedOnly, setShowWatchedOnly] = useState(false);
  const [movies, setMovies] = useState(initialMovies);

  const visibleMovies = movies
    .filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .filter((movie) => {
      if (!showWatchedOnly) {
        return true;
      }
      return movie.watched;
    });

  function handleSaveMovie(movieId) {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    setSavedCount((currentCount) => currentCount + 1);
    setSelectedMovieTitle(selectedMovie.title);
    console.log("Save count:", savedCount);
    console.log("Save movie:", movieId);
  }

  function handleAddMovie(movie) {
    if (movie.title.trim() === "") {
      return;
    }

    const newMovie = {
      id: crypto.randomUUID(),
      title: movie.title,
      year: movie.year,
      genre: movie.genre,
      rating: 0,
      watched: movie.watched,
    };

    setMovies((currentMovies) => {
      return [...currentMovies, newMovie];
    });

    // AddMovieForm ruft diese Funktion mit einem neuen Movie-Objekt auf
    console.log("Add movie:", movie);
  }

  function handleToggleWatched(movieId) {
    setMovies((currentMovies) => {
      return currentMovies.map((movie) => {
        if (movie.id !== movieId) {
          return movie;
        }

        return {
          ...movie,
          watched: !movie.watched,
        };
      });
    });
  }

  return (
    <main className="app">
      <Header />
      <Hero />
      <p>Saved movies: {savedCount}</p>
      <p>Last saved: {selectedMovieTitle}</p>
      <SearchForm
        query={searchQuery}
        onQueryChange={setSearchQuery}
        showWatchedOnly={showWatchedOnly}
        onShowWatchedOnlyChange={setShowWatchedOnly}
      />
      <MovieList
        movies={visibleMovies}
        onSaveMovie={handleSaveMovie}
        onToggleWatched={handleToggleWatched}
      />
      <AddMovieForm onAddMovie={handleAddMovie} />
    </main>
  );
}

export default App;
