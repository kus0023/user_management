import { useEffect } from "react";
import EmployeesItem from "../EmployeesItem/EmployeesItem";
import { useEmployeeContext } from "../../EmployeeContext";

function EmployeesList() {
  const empAction = useEmployeeContext();

  const employees = empAction.employeesList;

  //Fetch the employees from database
  // useEffect(() => {
  //   empAction.retrieveEmplyees();
  // }, []);

  return (
    <table className="table table-info table-striped table-bordered border-primary">
      <thead>
        <tr className="table-dark">
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Username</th>
          <th scope="col">Telephone</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
          <th scope="col">Admin Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <EmployeesItem
            employee={employee}
            key={index}
            serialNumber={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeesList;
