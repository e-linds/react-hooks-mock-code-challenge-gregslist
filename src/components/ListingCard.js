import React, { useState } from "react";

function ListingCard({ description, location, image, id, deleteListing }) {
  const [favorite, setFavorite] = useState(false)

  function handleButtonClick() {
    setFavorite(!favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleButtonClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleButtonClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => deleteListing(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
