import React, { Component } from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import TableData from "../TableData";
import Footer from "../Footer";
import API from "../../utils/api";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: "ASC",
      employees: [],
      filterEmployees: []
    };

    //bind handle methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  // Fetch the API data
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

  // Search the API for an employee
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

  // Search form function to search for an employee's name
  handleInputChange() {
    const value = document.querySelector("#search").value.toLowerCase();
    //filter search
    const filteredEmployees = this.state.employees.filter((employee) => employee.name.first.toLowerCase().indexOf(value) > -1);
    this.setState({
      filterEmployees: filteredEmployees
    });
  };

  // Sorting function for the employee name column
  handleSort() {
    if (this.state.sortOrder === "ASC") {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
          return -1
        }
      });
      this.setState({
        sortOrder:"DESC",
        filterEmployees: sortedEmployees
      });
    } else {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
          return 1
        }
      });
      this.setState({
        sortOrder:"ASC",
        filterEmployees: sortedEmployees
      });
    }
  }

  // Render the components
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
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
