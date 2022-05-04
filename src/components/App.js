import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [search, setSearch] = useState('')
  const [showListing, setShowListing] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((response) => response.json())
    .then((showListing) => setShowListing(showListing));
  }, []);

  

  
  return (
    <div className="app">
      <Header showListing={showListing}/>
      <ListingsContainer />
    </div>
  );
}

export default App;
