package com.example.EmployeeManagnementBackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.EmployeeManagnementBackend.Entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
