import { useEmployeeContext } from "../../EmployeeContext";

function EmployeesItem({ employee }) {
  const empAction = useEmployeeContext();

  return (
    <tr>
      <th scope="row">{employee.id}</th>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.username}</td>
      <td>{employee.telephone}</td>
      <td>{employee.emailId}</td>
      <td className={`table-${employee.isActive ? "success" : "danger"}`}>
        {employee.isActive ? "Active" : "Inactive"}
      </td>
      <td className="d-flex justify-content-center">
        <img
          className="dropdown-toggle"
          src="https://www.freeiconspng.com/uploads/gear-icon-png-23.png"
          alt=""
          height={25}
          width={25}
          id="navbarScrollingDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />

        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <li>
            <button
              className="dorpdoen-item btn"
              // To trigger modal
              data-bs-toggle="modal"
              data-bs-target="#employeeFormModal"
              onClick={() => {
                empAction.setSelectedEmp(employee);
              }}
            >
              Edit Employee
            </button>
          </li>
          <li>
            <button
              className="dorpdoen-item btn"
              onClick={() => {
                empAction.deleteEmp(employee.id);
              }}
            >
              Delete Employee
            </button>
          </li>
        </ul>
      </td>
    </tr>
  );
}

export default EmployeesItem;
