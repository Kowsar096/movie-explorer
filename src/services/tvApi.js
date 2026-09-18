const API_URL = "https://api.tvmaze.com";

async function request(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`TVMaze request failed: ${response.status}`);
  }

  return response.json();
}

export async function getShows() {
  return request("/shows?page=1");
}

export async function searchShows(query) {
  return request(`/search/shows?q=${encodeURIComponent(query)}`);
}

export async function getShowDetails(showId) {
  return request(`/shows/${showId}`);
}
