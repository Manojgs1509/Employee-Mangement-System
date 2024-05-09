import React, { useEffect, useState } from 'react'
import EmployeeService from '../Service/EmployeeService';
import { Link, Navigate } from 'react-router-dom';

const EmployeeList = () => {
  const [employee,Setemployee]=useState([]);

    
    useEffect(() => {
       
      getAllEmp();

    }, [])
    
  const getAllEmp=()=>{
    EmployeeService.getAllEmp().then((response)=>{
      console.log(response.data);
      Setemployee(response.data);
   }).catch(error=>{
     console.log(error);
   })
  }
  const deleteById=(employeeid)=>{
      EmployeeService.deleteEmp(employeeid).then((response)=>{

        getAllEmp();
         
      }).catch(error=>{
        console.log(error);
      })
        
  }

  return (
    <div>
  
        <div className='py-5 w-100%'>
          <div className='container'>
               <h2 className='text-center mb-5'>EMPLOYEE LIST</h2>
               <Link className='btn btn-primary mb-3' to='/add-employee'>Add Employee</Link>
                <table className='table table-bordered table-striped  table-hover text-dark'>
                     <thead className='bg-dark text-white'>
                      <th>EMPLOYEE ID</th>
                          <th>EMPLOYEE FIRSTNAME</th>
                          <th>EMPLOYEE LASTNAME</th>
                          <th>EMPLOYEE EMAILID</th> 
                          <th>ACTIONS</th>
                     </thead>
                     <tbody className=''>
                        {  employee.map((employee)=>(
                           <tr key={employee.emp_id}>
                              <td>{employee.emp_id}</td>
                               <td>{employee.first_name}</td>
                               <td>{employee.last_name}</td>
                               <td>{employee.email_id}</td>
                               <td>
                                  <div className='d-flex '>
                                     <Link className='btn btn-info me-3' to={`/edit-employee/${employee.emp_id}`}>Update</Link>
                                     <button className='btn btn-danger ' onClick={()=>deleteById(employee.emp_id)}>Delete</button>

                                  </div>
                               </td>
                           </tr>
                        )) }
                     </tbody>
                </table>

          </div>
        </div>
    </div>
  )
}

export default EmployeeList