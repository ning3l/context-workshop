import React, { useContext } from "react";
import CompanyContext from "./contexts/CompanyContext";

const Welcome = () => {
  const infos = useContext(CompanyContext);

  return (
    <>
      <p>
        Welcome to {infos.name}! {infos.numCustomers} customers served daily!
      </p>
    </>
  );
};

export default Welcome;
