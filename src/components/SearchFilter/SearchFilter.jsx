const SearchFilter = ({ getSearchValue }) => {
  return (
    <input
      type="text"
      placeholder="Поиск"
      className="search__input"
      onChange={(e) => getSearchValue(e.target.value)}
    />
  );
};

export default SearchFilter;
