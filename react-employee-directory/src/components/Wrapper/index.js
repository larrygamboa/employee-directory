import React, { Component } from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import TableData from "../TableData";
import API from "../../utils/api";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: "A",
      employees: [],
      filterEmployees: []
    };

    //bind handle methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  // Fetch the API
  componentDidMount() {
    API.getEmployees()
      .then(res => {
        this.setState({
            employees: res.data.results,
            filterEmployees: res.data.results
        })
        // console.log(res.data.results)
      })
      .catch(err => console.log(err))
  }

  searchEmployees(query) {
    API.getEmployees(query)
      .then(res => {
          this.setState({
            employees: res.data.results,
            filterEmployees: res.data.results
        })}
      )
      .catch(err => console.log(err));
  };

  handleInputChange() {
    const value = document.querySelector("#search").value.toLowerCase();
    //filter search
    const filteredEmployees = this.state.employees.filter((employee) => employee.name.first.toLowerCase().indexOf(value) > -1);
    this.setState({
      filterEmployees: filteredEmployees
    });
  };

  handleSort() {
    if (this.state.sortOrder === "A") {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
          return -1
        }
      });
      this.setState({
        sortOrder:"D",
        filterEmployees: sortedEmployees
      });
    } else {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
          return 1
        }
      });
      this.setState({
        sortOrder:"A",
        filterEmployees: sortedEmployees
      });
    }
  }


  render() {
    return (
      <div>
        <Header />
        <SearchBar
          handleInputChange={this.handleInputChange}
        />
        <TableData 
          employees={this.state.filterEmployees}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Wrapper;
