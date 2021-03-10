import React, { useContext } from "react";
import CompanyContext from "./contexts/CompanyContext";
import { useTranslation } from "./contexts/TranslationContext";

const Welcome = () => {
  const { infos } = useContext(CompanyContext);
  const { lang } = useTranslation();

  return (
    <>
      {infos && (
        <p>
          {lang.welcome} {infos.name}! {infos.numCustomers} {lang.greeting}!
        </p>
      )}
    </>
  );
};

export default Welcome;
