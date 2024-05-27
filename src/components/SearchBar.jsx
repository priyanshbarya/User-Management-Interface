import React from 'react';

const SearchBar=({ searchTerm, onSearch })=>{
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Search user..."
      />
    </div>
  );
}

export default SearchBar;