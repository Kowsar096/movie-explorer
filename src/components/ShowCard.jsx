function ShowCard({ show, onSelect }) {
  const imageUrl = show.image?.original || show.image?.medium;

  const rating =
    show.rating?.average !== null && show.rating?.average !== undefined
      ? show.rating.average.toFixed(1)
      : "N/A";

  const year = show.premiered ? new Date(show.premiered).getFullYear() : "N/A";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B36A]/30">
      <div className="aspect-[2/3] overflow-hidden bg-white/5">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={show.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-white/30">
            No Image Available
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-[#F5F5F5]">
          {show.name}
        </h2>

        <div className="mt-2 flex items-center gap-3 text-sm text-white/40">
          <span className="text-[#D6B36A]">★ {rating}</span>

          <span>•</span>

          <span>{year}</span>
        </div>

        <button
          onClick={() => onSelect(show)}
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

export default ShowCard;
