import React from "react";
import { useTranslation } from "./contexts/TranslationContext";

export default function SwitchLang() {
  const { langSelection, setLangSelection } = useTranslation();

  const handleLangSelection = () => {
    if (langSelection === "eng") {
      setLangSelection("deu");
    } else {
      setLangSelection("eng");
    }
  };

  return (
    <div>
      <br></br>
      <button onClick={handleLangSelection}>
        {langSelection === "eng" ? "deutsch" : "english"}
      </button>
    </div>
  );
}
