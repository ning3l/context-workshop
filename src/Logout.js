import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import Cookies from "js-cookie";
import { useTranslation } from "./contexts/TranslationContext";

const Logout = () => {
  const { isToken, setIsToken } = useContext(AuthContext);
  const { lang } = useTranslation();
  const history = useHistory();

  return (
    <>
      <br />
      <button
        style={{ marginTop: "2em" }}
        onClick={() => {
          // delete the cookie
          Cookies.remove("Bwok-auth-token");
          // reset the auth context
          setIsToken(false);
          // redirect to signin
          history.push("/signin");
        }}
      >
        {lang.buttons.logout}
      </button>
    </>
  );
};

export default Logout;
