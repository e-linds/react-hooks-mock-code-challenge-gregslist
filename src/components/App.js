import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchedListings, setSearchedListings] = useState([])


  useEffect(() => {

    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => {
      setListings(data)
      setSearchedListings(data)
    })
    }, []
    )

    function deleteListing(listingId) {
      fetch(`http://localhost:6001/listings/${listingId}`, {
        method: "DELETE"
      }) 

      const newArray = listings.filter((each) => {
        return each.id !== listingId
      })
      
      setListings(newArray)

    }



  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} searchedListings={searchedListings} setSearchedListings={setSearchedListings}/>
      <ListingsContainer listings={listings} setListings={setListings} searchedListings={searchedListings} setSearchedListings={setSearchedListings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
