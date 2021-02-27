import React from "react";
import "./index.css";

function Header() {
  return ( 
    <div className="jumbotron jumbotron-fluid" id="header">
        <div className="container">
            <h1 className="display-4">The Bomb Burger Employee Directory</h1>
            <p className="lead">Use the form below to narrow your search results.</p>
        </div>
    </div>
  );
}

export default Header;
