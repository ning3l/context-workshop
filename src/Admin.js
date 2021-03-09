import React, { useState, useContext } from "react";
import Welcome from "./Welcome";
import CompanyContext from "./contexts/CompanyContext";

const Admin = () => {
  const { setInfos } = useContext(CompanyContext);
  const [newCustomNum, setNewCustomNum] = useState();

  const handleChange = (e) => {
    setNewCustomNum(e.target.value);
  };

  const handleUpdate = () => {
    setInfos((prev) => ({
      ...prev,
      numCustomers: newCustomNum,
    }));
  };

  return (
    <>
      <h3>Company name</h3>
      <br />
      <div>Admin Page</div>
      <br />
      <Welcome />
      <br />
      <div>Lots of important secret stuff...</div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleUpdate}>update</button>
    </>
  );
};

export default Admin;
