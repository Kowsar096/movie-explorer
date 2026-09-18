const API_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

async function request(endpoint) {
  if (!ACCESS_TOKEN) {
    throw new Error(
      "Missing VITE_TMDB_ACCESS_TOKEN. Add it to a .env.local file and restart Vite.",
    );
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
}

export async function getMovies() {
  const data = await request("/movie/popular?language=en-US&page=1");

  return data.results;
}

export async function searchMovies(query) {
  const data = await request(
    `/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
  );

  return data.results;
}

export async function getMovieDetails(movieId) {
  return request(`/movie/${movieId}?language=en-US`);
}
