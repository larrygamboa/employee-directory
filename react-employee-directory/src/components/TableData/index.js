import React from "react";
import "./index.css";

function TableData() {
    return ( 
        <div className="container">
        <table>
            <thead>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </thead>
            <tbody>
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
    );
}

export default TableData;
