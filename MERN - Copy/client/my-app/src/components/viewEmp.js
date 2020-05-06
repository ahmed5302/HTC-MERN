import React,{useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Link,useHistory} from 'react-router-dom';

export default function ViewEmp(props){

console.log(props.empdata);
const[tableList,setTableList] = useState({
    allData:1
}); 



return(
<div className="row">
                <table>
                    <thead>
                        <tr>
                        <td>Emp.ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Mobile</td>
                        <td>Password</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        
)
}
