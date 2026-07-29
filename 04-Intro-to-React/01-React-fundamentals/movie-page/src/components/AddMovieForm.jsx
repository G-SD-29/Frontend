function AddMovieForm({ onAddMovie }) {
  function handleSubmit(event) {
    event.preventDefault();

    // FormData liest die Werte aus dem Formular
    const formData = new FormData(event.currentTarget);

    const movie = {
      title: formData.get("title"),
      year: Number(formData.get("year")),
      genre: formData.get("genre"),
      watched: formData.get("watched") === "on",
    };

    onAddMovie(movie);
    event.currentTarget.reset();
  }

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Movie title" required />
      <input name="year" type="number" placeholder="Year" required />
      <input name="genre" placeholder="Genre" required />
      <label>
        <input name="watched" type="checkbox" />
        Already watched
      </label>
      <button>Add movie</button>
    </form>
  );
}

export default AddMovieForm;
