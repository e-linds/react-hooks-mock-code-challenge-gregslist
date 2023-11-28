import React, { useState } from "react";

function Search({ listings, setListings, searchedListings, setSearchedListings }) {

  function handleSubmit(e) {
    e.preventDefault();

    const searchInput = e.target.search.value

    const newArray = listings.filter((each) => {
      return searchInput === each.description
    })

    console.log(newArray)

    setSearchedListings(newArray)

  }

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={""}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
