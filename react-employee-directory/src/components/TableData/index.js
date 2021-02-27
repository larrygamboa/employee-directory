import React from "react";
import "./index.css";

function TableData(props) {
    console.log(props);
    return (
        <div className="row">
            <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <th scope="col">&nbsp;</th>
                    <th scope="col" onClick={props.handleSort}>Name <i className="fa fa-sort-down"></i></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </thead>
                <tbody>
                    {props.employees.map(employee => (
                    <tr key={employee.login.uuid}>
                        <td><img alt={"profile image for " + employee.name.first + " " + employee.name.last} className="img-fluid" src={employee.picture.medium} /></td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td><a href={"mailto:" + employee.email} target="__blank">{employee.email}</a></td>
                        <td>{employee.dob.date}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div> 
        </div>
    );
}

export default TableData;
