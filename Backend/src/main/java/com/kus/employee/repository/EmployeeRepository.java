package com.kus.employee.repository;

import com.kus.employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

    // To get paginated result.
//    @Query(value = "SELECT e FROM employees e")
//    Page<Employee> getPersons(final Pageable pageable);

}