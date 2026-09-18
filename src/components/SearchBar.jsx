function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search..."
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D6B36A]/50 focus:bg-white/[0.05] placeholder:text-white/30"
      />

      <button
        type="submit"
        className="rounded-xl bg-[#D6B36A] px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-[#E5C98A]"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
