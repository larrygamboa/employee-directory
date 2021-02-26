import React from "react";
import "./index.css";

function SearchBar(props) {
    return (
        <div className="row">
            <div className="container">
                <form className="form-inline">
                <div className="form-group search-widget">
                    <label htmlFor="search">Search For:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        placeholder="Search the directory"
                        id="search"
                        className="form-control ml-2 mr-2"
                    />
                    <button 
                        type="submit"
                        onClick={props.handleFormSubmit}
                        className="btn btn-primary">
                    Search
                    </button>
                </div>
                </form>
                <hr />
            </div>
        </div>
    );
}

export default SearchBar;
