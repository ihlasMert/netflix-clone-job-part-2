const API_KEY = "cee12cb37033963292c994a55a74c82f";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-genres=99`,
};

export default requests;



//SEND REQUEST
//https://api.themoviedb.org/3/trending/all/day?api_key=cee12cb37033963292c994a55a74c82f