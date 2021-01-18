import React, { useRef } from 'react';

function Search() {
  const searchInput = useRef<HTMLInputElement>(null)

  console.log(searchInput);
  

  const focusSearchInput = (evt: React.MouseEvent) => {
    console.log('hello');
    
    searchInput.current && searchInput.current.focus()
    searchInput.current && console.log('test');
  }
  
  return (
    <div className="relative w-12 transition-width duration-500 overflow-hidden text-gray-600 rounded-md focus-within:w-96">
      <span onClick={focusSearchInput} className="absolute inset-y-0 left-0 flex items-center px-2">
        <button type="submit" className="p-1 pb-2 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input
        ref={searchInput}
        type="search" 
        name="q" 
        className="py-2 w-full text-sm rounded-md text-white bg-gray-200 pl-12 focus:outline-none focus:bg-white focus:text-gray-900" 
        placeholder="Search" 
        autoFocus
      />
    </div>
  );
}

export default Search;
