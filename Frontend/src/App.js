import { EmployeeContext } from "./EmployeeContext";
import EmployeesHeading from "./components/EmployeeHeading/EmployeeHeading";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import NavBar from "./components/NavBar.js/NavBar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <EmployeeContext>
      <div className="App">
        <ToastContainer />
        <NavBar />

        <div className="container">
          <div className="row m-4">
            <EmployeesHeading />
          </div>

          <hr />
          <div className="row m-4">
            <EmployeesList />
          </div>
        </div>
      </div>
    </EmployeeContext>
  );
}

export default App;
