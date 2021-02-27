import React , {Component} from "react";
import "./index.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="container">
                    <form className="form-inline">
                    <div className="form-group search-widget">
                        <label htmlFor="search">Search For:</label>
                        <input
                            onChange={this.props.handleInputChange}
                            value={this.props.value}
                            name="search"
                            type="text"
                            placeholder="Search the directory"
                            id="search"
                            className="form-control ml-2 mr-2"
                        />
                    </div>
                    </form>
                    <hr />
                </div>
            </div>
        );
    }
}

export default SearchBar;
