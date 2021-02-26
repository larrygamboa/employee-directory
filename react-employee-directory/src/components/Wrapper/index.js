import React, {Component} from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import TableData from "../TableData";
import API from "../../utils/api.js";
import "./index.css";

class Wrapper extends Component {

    // // Setting up the component's initial state
    // state = {
    //     search: "",
    //     employees: "",
    //     filterEmployees: "",
    //     order: ""
    // }

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filterEmployees: res.data.results
        })).catch(err => console.log(err))
    }
    
    // searchEmployees = () => {
    //     API.getUsers()
    //         .then(res => this.setState({
    //             filterEmployees: res.data.results,
    //             employees: res.data.results
    //         }))
    //         .catch(err => console.log(err))
    // }

    // handleInputChange = event => {

    //     const employees = this.state.employees;
    //     const UserInput = event.target.value;
    //     const filterEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    //     )
    //     this.setState({
    //         filterEmployees,
    //     });


    // };

    // handleFormSubmit = event => {
        // event.preventDefault();
    
    // };

    

    render() {
        return (
            <div>
                <Header />
                <SearchBar 
                    // value={}
                    // handleInputChange={}
                    // handleFormSubmit={}
                />
                <TableData />
            </div>
        )
    }



}

export default Wrapper;
