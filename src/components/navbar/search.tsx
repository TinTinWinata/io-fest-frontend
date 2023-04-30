import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target.searchText) {
      const search = e.target.searchText.value;
      const url = `/home?search=${search}`;
      navigate(url);
    }
  };
  return (
    <form onSubmit={handleOnSubmit} className="center">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative z-10">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          name="searchText"
          className="w-60 block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg dark:text-white dark:bg-transparent focus:none focus:outline-none focus:w-80 transition-all"
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
}
