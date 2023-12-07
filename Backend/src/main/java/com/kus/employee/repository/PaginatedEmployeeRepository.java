package com.kus.employee.repository;

import com.kus.employee.model.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaginatedEmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
}
