import RemoveIcon from "/assets/icon-remove.svg";

interface ISearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  placeholder?: string;
}

function SearchBar(props: ISearchBarProps) {
  const { search, setSearch, placeholder } = props;

  function handleClearSearch() {
    setSearch("");
  }

  function handleSearchChange(value?: string) {
    setSearch(value ?? "");
  }

  return (
    <div className="w-full flex flex-col justify-center">
      <label className="text-filterClearButton font-medium">Search bar</label>

      <div className="flex gap-2">
        <input
          className="w-full h-10 p-2 text-filterClearButton rounded outline-none border"
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(event) => handleSearchChange(event.target?.value)}
        />

        {search && (
          <button
            className="bg-filterClearButton hover:bg-filterItemButtonHover transition-colors w-10 h-10 flex items-center justify-center rounded"
            type="button"
            title="Click here to clear search bar"
            onClick={handleClearSearch}
          >
            <img src={RemoveIcon} />
          </button>
        )}
      </div>
    </div>
  );
}

export { SearchBar };
