package com.example.EmployeeManagnementBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.EmployeeManagnementBackend.Repository.EmployeeRepository;

@SpringBootApplication
public class EmployeeManagnementBackendApplication  {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagnementBackendApplication.class, args);
		
		
	}
	
	

}
