import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService'
import { useEffect } from 'react'


export const AddEmployee = () => {

    const [first_name,Setfirst_name]=useState("");
    const[last_name,Setlast_name]=useState("");
    const[email_id,Setemail_id]=useState("");
    const {id}=useParams();

    const navigate=useNavigate();

    const saveOrUpadteChange=(e)=>{
        
        e.preventDefault();

        const employee={first_name,last_name,email_id};

        // console.log(employee);

        if(id){
             
            EmployeeService.updateEmp(id,employee).then((response)=>{
                navigate('/employee-list');
            }).catch(error=>{
                console.log(error);
            })
        }else{
  
        EmployeeService.saveEmp(employee).then(response=>{

            navigate('/employee-list');
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
        }

    }

    useEffect(() => {
       
        EmployeeService.getEmpById(id).then((response)=>{
            Setfirst_name(response.data.first_name);
            Setlast_name(response.data.last_name)
            Setemail_id(response.data.email_id)
        }).catch(error=>{
            console.log(error);
        })
         
    }, [])
    
     const title=()=>{
          if(id){
           return <h3 className='text-center mb-4 mt-4 title'>UPDATE EMPLOYEE</h3>
              
          }else{
           return  <h3 className='text-center mb-4 mt-4 title'>Add New  Employee</h3>

          }
     }
  return (
    <div>

<div className='addemployee mb-3 py-5  '>
                 <div className='container-xxl'>
                     <div className='row'>
                          <div className='col-12'>
                          <div className='login-card '> 
                             {title()}
                             <div className='d-flex flex-column align-items-center justify-content-center'>
                             <form action="" className='form d-flex flex-column gap-30  '>
                             <div>
                                     <input type="text" name="firstname" value={first_name}  onChange={(e)=> Setfirst_name(e.target.value)} style={{"width":"400px"}} className='form-control mt-1' id="" placeholder='First Name' />
                                 </div>
                                <div>
                                     <input type="text" name="lastname" value={last_name} onChange={(e)=> Setlast_name(e.target.value)} className='form-control mt-1' style={{"width":"400px"}} id="" placeholder='Last Name' />
                                 </div>
                                 <div>
                                     <input type="email" name="emailid" value={email_id} onChange={(e)=> Setemail_id(e.target.value)} className='form-control 'style={{"width":"400px"}}  id="" placeholder='Email'/>
                                 </div>
                                  <div className='d-flex mt-0 mb-4 justify-content-center gap-15'>
                                      <button className="button " onClick={saveOrUpadteChange}>Save</button>
                                       <button className='button bg-danger'>Clear</button>
                                  </div>
                             </form>
                             </div>
                         </div>
                          </div>
                     </div>
                 </div>
            </div>
    </div>
  )
}
