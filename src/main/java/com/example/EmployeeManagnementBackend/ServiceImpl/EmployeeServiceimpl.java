package com.example.EmployeeManagnementBackend.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.EmployeeManagnementBackend.Entity.Employee;
import com.example.EmployeeManagnementBackend.Repository.EmployeeRepository;
import com.example.EmployeeManagnementBackend.Service.EmployeeService;

@Service
public class EmployeeServiceimpl implements EmployeeService{
	
	@Autowired
	private EmployeeRepository empRepo;

	@Override
	public List<Employee> getAllEmp() {
		
		List<Employee> empl=empRepo.findAll();
		return empl;
	}

	@Override
	public Employee saveEmp(Employee employee) {
		
		Employee emp=empRepo.save(employee);
		
		return emp ;
	}

	@Override
	public String removeEmp(long id) {
		
		Optional<Employee> emp=empRepo.findById(id);
		
	    empRepo.deleteById(id);
		return "data deleted sucessfully";
	}


	@Override
	public Employee UpadateEmp(long id, Employee emp) {
		
		Employee updatedEmp=empRepo.findById(id).orElseThrow();
		
		updatedEmp.setFirst_name(emp.getFirst_name());
		updatedEmp.setEmail_id(emp.getEmail_id());
		updatedEmp.setLast_name(emp.getLast_name());
		
		 empRepo.save(updatedEmp);
		 
		 return updatedEmp;
	}

	@Override
	public Optional<Employee> empFindbyId(long id) {
		
		Optional<Employee> emp=empRepo.findById(id);

		return emp;
	}


	 




	

}
