import { useEffect, useState } from "react";
import { getShows, searchShows } from "../services/tvApi";

import SearchBar from "../components/SearchBar";
import ShowCard from "../components/ShowCard";
import ShowModal from "../components/ShowModal";

function Shows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    async function loadShows() {
      try {
        setLoading(true);
        setError("");

        const data = await getShows();

        setShows(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load TV shows.");
      } finally {
        setLoading(false);
      }
    }

    loadShows();
  }, []);

  async function handleSearch(event) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      const data = await getShows();
      setShows(data);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const results = await searchShows(query);

      setShows(results.map((result) => result.show));
    } catch (error) {
      console.error(error);
      setError("Unable to search TV shows.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
          Explore
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          TV Shows
        </h1>

        <p className="mt-4 text-white/40">
          Discover TV shows and find something worth watching.
        </p>
      </div>

      <div className="mt-10">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSubmit={handleSearch}
        />
      </div>

      {loading && <p className="mt-8 text-white/40">Loading TV shows...</p>}

      {error && <p className="mt-8 text-red-400">{error}</p>}

      {!loading && !error && shows.length === 0 && (
        <p className="mt-8 text-white/40">No TV shows found.</p>
      )}

      {!loading && !error && shows.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} onSelect={setSelectedShow} />
          ))}
        </div>
      )}

      <ShowModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}

export default Shows;
