import React, { useState } from "react";
import "./SearchBar.css"; // Ensure CSS styling is applied

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search input to parent component
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;