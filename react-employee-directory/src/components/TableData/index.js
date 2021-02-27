import React from "react";
import "./index.css";

function TableData(props) {
    console.log(props);
    return (
        <div className="row">
            <div className="container">
            <table>
                <thead>
                    <th>&nbsp;</th>
                    <th onClick={props.handleSort}>Name <i className="fa fa-sort-down"></i></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </thead>
                <tbody>
                    {props.employees.map(employee => (
                    <tr key={employee.login.uuid}>
                        <td><img className="img-fluid" src={employee.picture.medium} /></td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
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
