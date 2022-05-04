import React, {useState} from "react";

function ListingCard({listings, onDeleteListing}) {
const [isLiked, setIsLiked] = useState(false)

  const {id, image, description, location} = listings

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => {
      onDeleteListing(id)
    })
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={() => setIsLiked(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsLiked(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
