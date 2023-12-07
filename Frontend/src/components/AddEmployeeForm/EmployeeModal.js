import EmployeeForm from "./EmployeeForm";

function EmployeeModal() {
  return (
    <div
      className="modal fade"
      id="employeeFormModal"
      // tabindex="-1"
      aria-labelledby="employeeFormModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="employeeFormModalLable">
              Fill Employee Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <EmployeeForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeModal;
