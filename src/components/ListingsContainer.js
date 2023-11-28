import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, searchedListings, setListings, deleteListing }) {

  return (
    <main>
      <ul className="cards">
        {searchedListings.map((each) => {
          return <ListingCard 
          key={each.id} 
          id={each.id} 
          description={each.description} 
          location={each.location} 
          image={each.image}
          deleteListing={deleteListing}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
