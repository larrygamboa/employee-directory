import React from "react";
import "./index.css";

function SearchBar() {
    return (
        <div className="container">
            <form className="search">
            <div className="form-group search-widget">
                <label htmlFor="language">Search For:</label>
                <input
                //   value={props.search}
                //   onChange={props.handleInputChange}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search the directory"
                id="search"
                />
                <button type="submit" onClick="" className="btn btn-success">
                Search
                </button>
            </div>
            </form>
        </div>
    );
}

export default SearchBar;
