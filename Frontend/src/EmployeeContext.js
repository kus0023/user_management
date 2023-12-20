import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const employeeContext = createContext();

function useEmployeeContext() {
  return useContext(employeeContext);
}

function EmployeeContext({ children }) {
  const SOURCEURL = "http://localhost:8080/api/v1/employees";
  const [employeesList, setEmployeesList] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState(null);

  const retrieveEmplyees = async () => {
    const result = await fetch(new URL(SOURCEURL));
    const json = await result.json();

    if (json.error) {
      throw new Error(json.error);
    }

    setEmployeesList(json.content);
  };

  const addEmp = async (employeeDetail) => {
    try {
      setSelectedEmp(null);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const result = await fetch(SOURCEURL, {
        method: "POST",
        body: JSON.stringify(employeeDetail),
        headers: myHeaders,
      });
      const json = await result.json();

      if (json.error) {
        throw new Error(json.error);
      }

      setEmployeesList([...employeesList, json]);

      toast.success("Created Successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const updateEmp = async (id, empDetails) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const result = await fetch(SOURCEURL + "/" + id, {
        method: "PUT",
        body: JSON.stringify(empDetails),
        headers: myHeaders,
      });
      const json = await result.json();

      if (json.error) {
        throw new Error(json.error);
      }

      const index = employeesList.findIndex((e) => e.id === id);
      employeesList.splice(index, 1, json);

      setEmployeesList([...employeesList]);
      setSelectedEmp(null);
      toast.success("Updated Successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  const deleteEmp = async (id) => {
    try {
      const result = await fetch(SOURCEURL + "/" + id, { method: "DELETE" });
      const json = await result.json();

      if (json.error) {
        throw new Error(json.error);
      }

      setEmployeesList(employeesList.filter((e) => e.id !== id));
      toast.success("Deleted Successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    retrieveEmplyees();
  }, []);

  return (
    <employeeContext.Provider
      value={{
        employeesList,
        addEmp,
        updateEmp,
        deleteEmp,
        retrieveEmplyees,
        selectedEmp,
        setSelectedEmp,
      }}
    >
      {children}
    </employeeContext.Provider>
  );
}

export { EmployeeContext, useEmployeeContext };
