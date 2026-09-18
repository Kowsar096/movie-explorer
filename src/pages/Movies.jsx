import { useCallback, useEffect, useState } from "react";
import { getMovies, searchMovies, getMovieDetails } from "../services/movieApi";

import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const loadMovies = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getMovies();

      setMovies(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load movies.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  async function handleSearch(event) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      loadMovies();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const results = await searchMovies(query);

      setMovies(results);
    } catch (error) {
      console.error(error);
      setError("Unable to search movies.");
    } finally {
      setLoading(false);
    }
  }

  async function handleMovieSelect(movie) {
    try {
      setSelectedMovie(movie);
      setMovieDetails(null);
      setDetailsLoading(true);

      const details = await getMovieDetails(movie.id);

      setMovieDetails(details);
    } catch (error) {
      console.error(error);
    } finally {
      setDetailsLoading(false);
    }
  }

  function handleCloseModal() {
    setSelectedMovie(null);
    setMovieDetails(null);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Page Header */}
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Explore
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Movies
        </h1>

        <p className="mt-4 text-white/40">
          Discover movies and find something worth watching.
        </p>
      </div>

      {/* Search */}
      <div className="mt-10">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSubmit={handleSearch}
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="mt-10 text-sm text-white/40">Loading movies...</p>
      )}

      {/* Error */}
      {error && <p className="mt-10 text-sm text-red-400">{error}</p>}

      {/* Empty State */}
      {!loading && !error && movies.length === 0 && (
        <p className="mt-10 text-sm text-white/40">No movies found.</p>
      )}

      {/* Movie Grid */}
      {!loading && !error && movies.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={handleMovieSelect}
            />
          ))}
        </div>
      )}

      {/* Movie Modal */}
      <MovieModal
        movie={movieDetails || selectedMovie}
        loading={detailsLoading}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Movies;
