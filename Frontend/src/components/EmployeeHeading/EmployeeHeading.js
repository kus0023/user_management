import { useEmployeeContext } from "../../EmployeeContext";
import EmployeeModal from "../AddEmployeeForm/EmployeeModal";

function EmployeesHeading() {
  const empAction = useEmployeeContext();

  return (
    <>
      <div className="col-6">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="col-6">
        {/* Trigger the modal */}
        <button
          className="btn btn-success float-end"
          data-bs-toggle="modal"
          data-bs-target="#employeeFormModal"
          onClick={() => {
            empAction.setSelectedEmp(null);
          }}
        >
          Add Employee
        </button>
      </div>

      <EmployeeModal />
    </>
  );
}

export default EmployeesHeading;
