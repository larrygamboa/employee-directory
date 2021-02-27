import React , {Component} from "react";
import "./index.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="container bg-white">
                    <form className="form-inline">
                    <div className="form-group search-widget">
                        <label htmlFor="search"><strong>Search For:</strong></label>
                        <input
                            onChange={this.props.handleInputChange}
                            value={this.props.value}
                            name="search"
                            type="text"
                            placeholder="search the directory"
                            id="search"
                            className="form-control ml-2 mr-2"
                        />
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
