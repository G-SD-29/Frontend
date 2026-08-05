function SearchForm({
  query,
  showWatchedOnly,
  onQueryChange,
  onShowWatchedOnlyChange,
}) {
  function handleSearchChange(event) {
    onQueryChange(event.target.value);
  }

  function handleWatchedChange(event) {
    onShowWatchedOnlyChange(event.target.checked);
  }

  return (
    <form className="search-form">
      <label htmlFor="movie-search">Search movies</label>
      <input
        id="movie-search"
        name="query"
        type="search"
        placeholder="Search by title"
        value={query}
        onChange={handleSearchChange}
      />
      <div className="filter-options">
        <label>
          <input
            type="checkbox"
            checked={showWatchedOnly}
            onChange={handleWatchedChange}
          />
          Only watched movies
        </label>
      </div>
    </form>
  );
}

export default SearchForm;
