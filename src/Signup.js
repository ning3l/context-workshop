import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "./contexts/TranslationContext";

const Signup = () => {
  const { lang } = useTranslation();

  const notImplemented = () => {
    alert(lang.warning);
  };

  return (
    <>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button onClick={notImplemented}>{lang.buttons.signup}</button>
      <br />
      <Link to="/signin">{lang.buttons.login}</Link>
    </>
  );
};

export default Signup;
