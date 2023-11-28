import React from "react";
import Search from "./Search";

function Header({ listings, setListings, searchedListings, setSearchedListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} setListings={setListings} searchedListings={searchedListings} setSearchedListings={setSearchedListings}/>
    </header>
  );
}

export default Header;
