import { useEffect, useState } from "react";
import { useEmployeeContext } from "../../EmployeeContext";

function EmployeeForm() {
  const empAction = useEmployeeContext();
  const selectedEmp = empAction.selectedEmp;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const [role, setRole] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");

  //If employee is selected then fill the form with data
  useEffect(() => {
    if (selectedEmp !== null) {
      setFirstName(selectedEmp.firstName);
      setLastName(selectedEmp.lastName);
      setEmailId(selectedEmp.emailId);
      setUsername(selectedEmp.username);
      setPosition(selectedEmp.position);
      setRole(selectedEmp.role);
      setTelephone(selectedEmp.telephone);
      // setPassword(selectedEmp.password);
    } else {
      clearForm();
    }
  }, [selectedEmp]);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    const employeeDetail = {
      firstName,
      lastName,
      emailId,
      username,
      position,
      role,
      telephone,
      password,
    };

    if (selectedEmp === null) {
      empAction.addEmp(employeeDetail);
    } else {
      empAction.updateEmp(selectedEmp.id, employeeDetail);
    }

    clearForm();
  };

  const clearForm = () => {
    setEmailId("");
    setFirstName("");
    setLastName("");
    setUsername("");
    setPosition("");
    setRole("");
    setTelephone("");
    setPassword("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          name="firstName"
          type="text"
          className="form-control"
          id="firstName"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          name="lastName"
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="emailId" className="form-label">
          Email address
        </label>
        <input
          name="emailId"
          type="email"
          className="form-control"
          id="emailId"
          value={emailId}
          onChange={({ target }) => setEmailId(target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          name="username"
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="telephone" className="form-label">
          Telephone
        </label>
        <input
          name="telephone"
          type="text"
          className="form-control"
          id="telephone"
          value={telephone}
          onChange={({ target }) => setTelephone(target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postition" className="form-label">
          Position
        </label>
        <select
          name="position"
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          id="position"
          required
          onChange={({ target }) => setPosition(target.value)}
          defaultValue="Auditor"
        >
          <option value="Auditor">Auditor</option>
          <option value="Administrator">Administrator</option>
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select
          position="role"
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          id="role"
          required
          onChange={({ target }) => setRole(target.value)}
          defaultValue="Administrator"
        >
          <option value="Administrator">Administrator</option>
          <option value="Support">Support</option>
          <option value="Assistant">Assistant</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-primary "
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        Submit
      </button>
    </form>
  );
}

export default EmployeeForm;
