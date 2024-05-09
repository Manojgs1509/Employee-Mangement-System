
import React, { useState } from 'react'
import { useEffect } from 'react';
import EmployeeService from '../Service/EmployeeService';
import { Link } from 'react-router-dom';


function ListEmployee() {
     const [employee,setEmployee]=useState([]);

     useEffect(()=>{
        EmployeeService.getAllEmployees().then((response)=>{
           setEmployee(response.data);
           console.log(response.data);
        }).catch(error=>{
           console.log(error);
        })
    })
  return (

    <div className='container'>
        <h1 className='text-center'>EMPLOYEE MANAGEMENT LIST</h1>
        <br />
        <Link to="/add-employee" className='btn btn-primary mb-2'>ADD EMPLOYEE</Link>
        <br />
         <table className='table table-striped table-dark table-bordered'>
            <thead className='table-dark'>
                 <tr>
                    <th>EMPLOYEE ID</th>
                    <th>EMPLOYEE FIRSTNAME</th>
                    <th>EMPLOYEE LASTNAME</th>
                    <th>EMPLOYEE EMAILID</th>

                 </tr>
            </thead>
            <tbody>
                 {
                    employee.map(employee=>(
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>  
                        </tr>
                    ))
                 }
            </tbody>
         </table>
    </div>
  )
}

export default ListEmployee;