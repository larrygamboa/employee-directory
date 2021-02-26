import React from "react";
import "./index.css";

function TableData(props) {
    return (
        <div className="row">
            <div className="container">
            <table>
                <thead>
                    <th>&nbsp;</th>
                    <th>Name <i className="fa fa-sort-down"></i></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </thead>
                <tbody>
                    {/* Map results */}
                    <tr>
                        <td>Image</td>
                        <td>Lorem Ipsum</td>
                        <td>123-456-7890</td>
                        <td>email@email.com</td>
                        <td>01/01/2021</td>
                    </tr>
                </tbody>
            </table>
            </div> 
        </div>
    );
}

export default TableData;
