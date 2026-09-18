function MovieModal({ movie, loading, onClose }) {
  if (!movie) {
    return null;
  }

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const rating =
    movie.vote_average !== undefined && movie.vote_average !== null
      ? movie.vote_average.toFixed(1)
      : "N/A";

  const genres = movie.genres || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950 text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 sm:h-72">
          {backdropUrl ? (
            <img
              src={backdropUrl}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-white/5" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/30 to-black/10" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-white hover:text-black"
            aria-label="Close movie details"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-5 pb-6 sm:px-8 sm:pb-8">
          <div className="-mt-12 relative sm:-mt-16">
            {/* Movie Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {movie.title}
              </h2>

              {movie.tagline && (
                <p className="mt-2 text-sm italic text-white/40">
                  {movie.tagline}
                </p>
              )}

              {/* Metadata */}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/50">
                <span>★ {rating}</span>

                <span>•</span>

                <span>{releaseYear}</span>

                {movie.runtime && (
                  <>
                    <span>•</span>
                    <span>{movie.runtime} min</span>
                  </>
                )}

                {movie.status && (
                  <>
                    <span>•</span>
                    <span>{movie.status}</span>
                  </>
                )}
              </div>

              {/* Genres */}
              {genres.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Loading */}
            {loading && (
              <p className="mt-8 text-sm text-white/40">
                Loading movie details...
              </p>
            )}

            {/* Overview */}
            {!loading && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Overview</h3>

                <p className="mt-3 max-w-3xl leading-7 text-white/50">
                  {movie.overview || "No overview available."}
                </p>
              </div>
            )}

            {/* Additional Information */}
            {!loading && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {movie.original_language && (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Language
                    </p>

                    <p className="mt-2 text-sm uppercase text-white/70">
                      {movie.original_language}
                    </p>
                  </div>
                )}

                {movie.release_date && (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Release Date
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      {movie.release_date}
                    </p>
                  </div>
                )}

                {movie.vote_count !== undefined && (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Vote Count
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      {movie.vote_count.toLocaleString()}
                    </p>
                  </div>
                )}

                {movie.popularity !== undefined && (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Popularity
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      {movie.popularity.toFixed(1)}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
