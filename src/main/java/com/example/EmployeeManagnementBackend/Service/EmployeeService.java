package com.example.EmployeeManagnementBackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.example.EmployeeManagnementBackend.Entity.Employee;

public interface EmployeeService {

	 public List<Employee> getAllEmp();
	 public Employee saveEmp(Employee employee);
	 public String removeEmp(long id);
	 public Optional<Employee> empFindbyId(long id);
	 public Employee UpadateEmp(long id,Employee emp);
	
	
}
