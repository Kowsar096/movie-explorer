function ShowModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  const imageUrl = show.image?.original || show.image?.medium;

  const rating =
    show.rating?.average !== null && show.rating?.average !== undefined
      ? show.rating.average.toFixed(1)
      : "N/A";

  const year = show.premiered ? new Date(show.premiered).getFullYear() : "N/A";

  const genres = show.genres || [];

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
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={show.name}
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
            aria-label="Close show details"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-5 pb-6 sm:px-8 sm:pb-8">
          <div className="-mt-12 relative sm:-mt-16">
            {/* Show Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {show.name}
              </h2>

              {show.type && (
                <p className="mt-2 text-sm text-white/40">{show.type}</p>
              )}

              {/* Metadata */}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/50">
                <span>★ {rating}</span>

                <span>•</span>

                <span>{year}</span>

                {show.runtime && (
                  <>
                    <span>•</span>
                    <span>{show.runtime} min</span>
                  </>
                )}

                {show.status && (
                  <>
                    <span>•</span>
                    <span>{show.status}</span>
                  </>
                )}
              </div>

              {/* Genres */}
              {genres.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Overview</h3>

              <div
                className="mt-3 max-w-3xl leading-7 text-white/50"
                dangerouslySetInnerHTML={{
                  __html: show.summary || "<p>No overview available.</p>",
                }}
              />
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {show.network?.name && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-wider text-white/30">
                    Network
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    {show.network.name}
                  </p>
                </div>
              )}

              {show.language && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-wider text-white/30">
                    Language
                  </p>

                  <p className="mt-2 text-sm text-white/70">{show.language}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;
