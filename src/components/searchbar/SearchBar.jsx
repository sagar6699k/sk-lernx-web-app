import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Make sure to import the SearchIcon from your icon library

const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-2">
        <MagnifyingGlassIcon className="h-4 w-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="| Search"
        className="border border-gray-300 pl-8 pr-20 py-1 px-2 rounded-md focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
};

export default SearchBar;
