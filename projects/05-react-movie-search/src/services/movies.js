const API_KEY = '4287ad07'
const API_URL = 'https://www.omdbapi.com/'

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    if (search) {
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
      const json = await response.json()

      const movies = json.Search;

      return movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      }));
    }
  } catch (error) {
    throw new Error("Error searching movies")
  }
};
