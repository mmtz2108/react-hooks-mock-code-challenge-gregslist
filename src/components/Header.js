import React from "react";
import Search from "./Search";

function Header({showListing}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listing={showListing}/>
    </header>
  );
}

export default Header;
