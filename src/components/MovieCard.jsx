function MovieCard({ movie, onSelect }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const rating =
    movie.vote_average !== undefined ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B36A]/30">
      {/* Poster */}
      <div className="aspect-[2/3] overflow-hidden bg-white/5">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-white/30">
            No Image Available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-[#F5F5F5]">
          {movie.title}
        </h2>

        <div className="mt-2 flex items-center gap-3 text-sm text-white/40">
          <span className="text-[#D6B36A]">★ {rating}</span>

          <span>•</span>

          <span>{releaseYear}</span>
        </div>

        <button
          onClick={() => onSelect(movie)}
          className="mt-4 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-[#D6B36A]/30 hover:bg-[#D6B36A] hover:text-black"
        >
          <span>See Details</span>

          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
