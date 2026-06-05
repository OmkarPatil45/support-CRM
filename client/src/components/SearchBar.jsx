const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      placeholder="Search tickets..."
      className="w-full border border-slate-200 rounded-xl px-4 py-3"
    />
  );
};

export default SearchBar;