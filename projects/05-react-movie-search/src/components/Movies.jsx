import DefaultResult from '../mocks/with-results.json'

export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

export function DefaultMoviesResult() {
  return (
    <ul className="movies">
      {DefaultResult.Search.map((movie) => (
        <li className="movie" key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

export function Movies({ movies, isFirstInput }) {
  const hasMovies = movies?.length > 0;
  if(!hasMovies && !isFirstInput) return <p>No movies found for your search</p>;

  return hasMovies ? <ListOfMovies movies={movies} /> : <DefaultMoviesResult />;
}
