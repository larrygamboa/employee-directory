import React from "react";
import "./index.css";

function Header() {
  return ( 
    <div>
      <div className="jumbotron jumbotron-fluid" id="header">
          <div className="container">
              <h1 className="display-4">The Bomb Burger Employee Directory</h1>
              <p className="lead">Use the search to narrow your results. Click on each heading to filter.</p>
          </div>
      </div>
    </div> 
  );
}

export default Header;
