package com.kus.employee.service;

import com.kus.employee.exception.ResourceNotFoundException;
import com.kus.employee.model.Employee;
import com.kus.employee.repository.EmployeeRepository;
import com.kus.employee.repository.PaginatedEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private PaginatedEmployeeRepository paginatedEmployeeRepository;

    @Override
    public Page<Employee> getAllEmployees(Integer page, Integer size) {

        return paginatedEmployeeRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public Page<Employee> getAllEmployees(Integer page, Integer size, String[] sort) {
        return paginatedEmployeeRepository.findAll(PageRequest.of(page, size, Sort.by(sort)));
    }

    @Override
    public Employee createEmployee(Employee e) {
        return employeeRepository.save(e);
    }

    @Override
    public Employee getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));


        //setting the value only if it is provided.
        employee.setFirstName(Optional.ofNullable(employeeDetails.getFirstName()).orElse(employee.getFirstName()));
        employee.setLastName(Optional.ofNullable(employeeDetails.getLastName()).orElse(employee.getLastName()));
        employee.setEmailId(Optional.ofNullable(employeeDetails.getEmailId()).orElse(employee.getEmailId()));
        employee.setTelephone(Optional.ofNullable(employeeDetails.getTelephone()).orElse(employee.getTelephone()));
        employee.setUsername(Optional.ofNullable(employeeDetails.getUsername()).orElse(employee.getUsername()));
        employee.setRole(Optional.ofNullable(employeeDetails.getRole()).orElse(employee.getRole()));
        employee.setPosition(Optional.ofNullable(employeeDetails.getPosition()).orElse(employee.getPosition()));
        employee.setIsActive(Optional.ofNullable(employeeDetails.getIsActive()).orElse(employee.getIsActive()));


        Employee updatedEmployee = employeeRepository.save(employee);
        return updatedEmployee;
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        employeeRepository.delete(employee);
    }
}
