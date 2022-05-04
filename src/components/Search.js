import React from "react";

function Search({listing}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(listing);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={''}
        onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
