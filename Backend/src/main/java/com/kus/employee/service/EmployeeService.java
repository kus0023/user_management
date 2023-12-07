package com.kus.employee.service;

import com.kus.employee.model.Employee;
import org.springframework.data.domain.Page;

public interface EmployeeService {

    public Page<Employee> getAllEmployees(Integer page, Integer size);
    public Page<Employee> getAllEmployees(Integer page, Integer size, String[] sort);
    public Employee createEmployee(Employee e);
    public Employee getEmployeeById(Long id);
    public Employee updateEmployee(Long id, Employee e);
    public void deleteEmployee(Long id);
}
