package com.example.EmployeeManagnementBackend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.EmployeeManagnementBackend.Entity.Employee;
import com.example.EmployeeManagnementBackend.Service.EmployeeService;
import com.example.EmployeeManagnementBackend.ServiceImpl.EmployeeServiceimpl;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1")
public class EmployeeControlelr {
	
	@Autowired
	private EmployeeServiceimpl employeeServiceimpl;
	
	@GetMapping("/hello")
	public String hello() {
		return "hello world";
	}
	
	@PostMapping("/employees")
	public ResponseEntity<Employee> addEmp(@RequestBody Employee employee){
		
		Employee emp=employeeServiceimpl.saveEmp(employee);
		
		return new ResponseEntity<Employee>(emp,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/employees")
	public  ResponseEntity<List<Employee>> getAllEmp(){
		
		List<Employee> empl=employeeServiceimpl.getAllEmp();
		
		return new ResponseEntity<List<Employee>>( empl,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<String> deleteEmp(@PathVariable long id){
	     
		employeeServiceimpl.removeEmp(id);
		
		return new ResponseEntity<String>("deleted sucessfully",HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Optional<Employee>> findEmpbyId(@PathVariable long id){
		 Optional<Employee> emp=employeeServiceimpl.empFindbyId(id);
		 
		 return new ResponseEntity<Optional<Employee>>(emp,HttpStatus.ACCEPTED);
	}
	
   
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmp(@PathVariable long id,@RequestBody Employee emp){
		  
		Employee res=employeeServiceimpl.UpadateEmp(id, emp);
		
		return new ResponseEntity<Employee>(res,HttpStatus.ACCEPTED);
	}
	
	


	
}
