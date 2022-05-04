import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [showListing, setShowListing] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((response) => response.json())
    .then((showListing) => setShowListing(showListing));
  }, []);

  const handleDeleteListing = (id) => {
    const updatedListingArray = listings.filter((listings) => listings.id !== id)
    setShowListing(updatedListingArray)
  }

  const listings = showListing.map(listingObj => {
    return <ListingCard key={listingObj.id} listings={listingObj} onDeleteListing={handleDeleteListing}/>
  }
    )
  return (
    <main>
      <ul className="cards">
       {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
