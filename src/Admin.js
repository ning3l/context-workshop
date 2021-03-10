import React, { useState, useContext } from "react";
import Welcome from "./Welcome";
import CompanyContext from "./contexts/CompanyContext";
import { useTranslation } from "./contexts/TranslationContext";

const Admin = () => {
  const { infos, setInfos } = useContext(CompanyContext);
  const { lang } = useTranslation();
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
      <br></br>
      <h3>{infos.name}</h3>
      <br />
      <div>{lang.admin.location}</div>
      <br />
      <Welcome />
      <br />
      <div>{lang.admin.main}</div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleUpdate}>{lang.buttons.update}</button>
    </>
  );
};

export default Admin;
