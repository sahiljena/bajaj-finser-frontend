const SearchBar = ({
  query,
  setQuery,
  filterEmployeesByName,
  searchCategory,
  setSearchCategory,
}) => {
  return (
    <div className="p-2 flex">
      <select
        id="serachCategory"
        className="outline-0 w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      >
        <option selected value="name">
          Name
        </option>
        <option value="designation">Designation</option>
        <option value="skill">Skill</option>
      </select>
      <input
        placeholder={`type  ${searchCategory} here `}
        type="search"
        onChange={(e) => filterEmployeesByName(e, searchCategory)}
        className="border w-full rounded-r-lg p-2 text-xl outline-0 shadow"
      />
    </div>
  );
};

export default SearchBar;
