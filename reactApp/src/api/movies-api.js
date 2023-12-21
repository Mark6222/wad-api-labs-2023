export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d676371d302725e3df4787c3f00824d9&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };