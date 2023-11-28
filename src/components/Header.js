import React from "react";
import Search from "./Search";

function Header({ listings, setListings, searchedListings, setSearchedListings }) {

function sortedListings() {

  const newArray = listings.sort((a,b) => {
      const x = (a.location).toLowerCase()
      const y = (b.location).toLowerCase()
      return ((x < y) ? -1 : ((x > y ? 1 : 0)))
  })

  setSearchedListings([...newArray])

  }

  function handleSubmit(e) {
    e.preventDefault()

    const newListing = {
      description: e.target.description.value,
      location: e.target.location.value,
      image: e.target.image.value
    }

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newListing)
    })

    setListings([...listings, newListing])
    setSearchedListings([...searchedListings, newListing])

    
  }
 
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
        <Search listings={listings} setListings={setListings} searchedListings={searchedListings} setSearchedListings={setSearchedListings}/>
        <button onClick={sortedListings}>Sort By Location</button>
        <div>
          <form className="newListingForm" onSubmit={(e) => handleSubmit(e)}>
            <label><strong>ADD NEW LISTING</strong></label>
            <br></br>
            <input type="text" name="description" placeholder="description"></input>
            <br></br>
            <input type="text" name="location" placeholder="location"></input>
            <br></br>
            <input type="text" name="image" placeholder="image link"></input>
            <br></br>
            <button type="submit">Add New</button>
          </form>
        </div>
    </header>
  );

  }
export default Header;
