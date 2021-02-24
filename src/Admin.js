import React from "react";
import Welcome from "./Welcome";

const Admin = () => {
  return (
    <>
      <h3>Company name</h3>
      <br />
      <div>Admin Page</div>
      <br />
      <Welcome />
      <br />
      <div>Lots of important secret stuff...</div>
      {/* <input
        value={newCustomerValue}
        onChange={(e) => setNewCustomerValue(e.target.value)}
        placeholder="Daily customers"
        type="text"
      /> */}
      {/* <button
        onClick={(e) => {
          setCompanyData({ ...companyData, customers: newCustomerValue });
        }}
      >
        Save
      </button> */}
    </>
  );
};

export default Admin;
